import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const isProduction = process.env.NODE_ENV === 'production';

const formatMessage = winston.format((info) => {
  // const requestContext = RequestContext.current;
  //
  // if (requestContext) {
  //   info.traceId = requestContext.getTraceId();
  // }

  // console.log(info);

  info.level = info.level.toUpperCase();
  return info;
});

// 콘솔 로그 전송기(Transport) 설정
const consoleTransport = new winston.transports.Console({
  level: isProduction ? 'info' : 'silly',
  format: winston.format.combine(
    formatMessage(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(({ timestamp, level, message, context, stack }) => {
      let log = `${timestamp} [${level}] [${context || '-'}] ${message}`;

      // 에러 스택이 있으면 추가로 출력
      if (stack) {
        log += `\nSTACK : ${stack}`;
      }

      return log;
    }),
  ),
});

// 파일 로그(Daily Rotate) 전송기 설정
const dailyRotateFileTransport = new DailyRotateFile({
  level: 'silly',
  dirname: 'logs',
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  // 로그 파일 최대 크기 및 보관 기간은 우선 설정하지 않습니다.
  // maxSize: '20m',
  // maxFiles: '14d',
  // 과거 설정
  // format: winston.format.combine(
  //   winston.format.timestamp(),
  //   formatMessage(),
  //   winston.format.json(),
  // ),
  format: winston.format.combine(
    // 1. 에러 로깅 시 스택 트레이스 자동 포함
    winston.format.errors({ stack: true }),

    // 2. 타임스탬프 추가
    winston.format.timestamp(),

    // 3. NestJS Context 등 메타데이터를 최상위 필드로 추출
    // (this.logger.log('메시지', '컨텍스트') 에서 '컨텍스트'를 분리)
    winston.format.metadata({
      fillExcept: ['message', 'level', 'timestamp', 'stack'],
    }),

    // 4. (강력 추천) 'timestamp' 필드명을 '@timestamp'로 변경 (ELK 표준)
    winston.format((info) => {
      info['@timestamp'] = info.timestamp; // ELK 기본 타임스탬프 필드명
      delete info.timestamp; // 기존 'timestamp' 필드 제거
      return info;
    })(),

    // 5. 최종적으로 모든 것을 JSON으로 직렬화
    winston.format.json(),
  ),
});

export const winstonLoggerOptions: winston.LoggerOptions = {
  transports: [consoleTransport, dailyRotateFileTransport],
};
