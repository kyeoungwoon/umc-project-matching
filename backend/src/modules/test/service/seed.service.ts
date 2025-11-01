import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { UserPartEnum } from '@generated/prisma/mongodb';
import * as xlsx from 'xlsx';
import * as argon2 from 'argon2';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { MongoDBPrismaService } from '@modules/prisma/services/mongodb.prisma.service';

// --- 1. 인터페이스 수정 (nickname, name 추가) ---
interface ExcelRow {
  school: string;
  nickname: string;
  name: string;
  part: UserPartEnum;
  studentId: string;
  plainPassword: string;
}

@Injectable()
export class ChallengerImportService {
  constructor(
    private prisma: MongoDBPrismaService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  // --- 1. [추가] 엑셀 문자열을 Enum으로 매핑하는 헬퍼 함수 ---
  private mapPartToEnum(rawPart: string): UserPartEnum | null {
    switch (rawPart) {
      case 'Plan':
        return UserPartEnum.PLAN;
      case 'Design':
        return UserPartEnum.DESIGN;
      case 'Web':
        return UserPartEnum.WEB;
      case 'Android':
        return UserPartEnum.ANDROID;
      case 'iOS':
        return UserPartEnum.IOS;
      case 'Server(Spring Boot)':
        return UserPartEnum.SPRINGBOOT;
      case 'Server(Node.js)':
        return UserPartEnum.NODEJS;
      // case 'Admin': // 엑셀 데이터에 'Admin'이 있다면 이것도 추가
      //   return UserPartEnum.ADMIN;
      default:
        // 매핑되는 값이 없으면 null 반환
        return null;
    }
  }

  async importFromExcel(filePath: string) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json<any[]>(worksheet, { header: 1 });

    let successCount = 0;
    const failedRows = [];

    // 엑셀 순서: A(0):학교, B(1):닉네임, C(2):이름, D(3):파트, E(4):학번

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];

      // --- 2. [수정] D열(파트) 값을 헬퍼 함수로 변환 ---
      const rawPartString = String(row[3]); // D열: "Server(Spring Boot)" 등
      const mappedPart = this.mapPartToEnum(rawPartString);

      // --- 3. [추가] 매핑 실패 시 해당 행 건너뛰기 ---
      if (!mappedPart) {
        this.logger.warn(
          `Skipping row ${i + 1}: Unknown part value "${rawPartString}"`,
        );
        failedRows.push({
          row: i + 1,
          data: row,
          error: `Unknown part value: ${rawPartString}`,
        });
        continue; // 다음 행으로
      }

      // --- 3. 데이터 매핑 수정 (새 엑셀 순서 적용) ---
      const rowData: ExcelRow = {
        school: row[0], // A열: 학교
        nickname: String(row[1]), // B열: 닉네임
        name: String(row[2]), // C열: 이름
        part: row[3], // D열: 파트
        studentId: String(row[4]), // E열: 학번
        // 초기 비밀번호는 학번으로 설정
        plainPassword: String(row[4]),
      };

      try {
        // Enum 값 유효성 검사
        if (!Object.values(UserPartEnum).includes(rowData.part)) {
          throw new Error(`Invalid part value: ${rowData.part}`);
        }

        // 비밀번호 해싱
        const hashedPassword = await argon2.hash(rowData.plainPassword);

        // --- 4. Upsert 로직 수정 (nickname, name 추가) ---
        await this.prisma.challenger.upsert({
          where: {
            // school + studentId 복합 고유 키
            school_studentId: {
              school: rowData.school,
              studentId: rowData.studentId, // E열 학번
            },
          },
          update: {
            password: hashedPassword,
            part: rowData.part,
            nickname: rowData.nickname, // B열 닉네임
            name: rowData.name, // C열 이름
          },
          create: {
            school: rowData.school,
            studentId: rowData.studentId,
            password: hashedPassword,
            part: rowData.part,
            nickname: rowData.nickname,
            name: rowData.name,
          },
        });

        successCount++;
      } catch (error) {
        this.logger.error(
          `Failed to import row ${i + 1}: ${error.message}`,
          rowData,
        );
        failedRows.push({ row: i + 1, data: rowData, error: error.message });
      }
    }

    this.logger.log(
      `Import complete: ${successCount} rows processed successfully.`,
    );
    if (failedRows.length > 0) {
      this.logger.warn(`Failed rows: ${failedRows.length}`, failedRows);
    }

    return {
      successCount,
      failedCount: failedRows.length,
      failedRows,
    };
  }
}
