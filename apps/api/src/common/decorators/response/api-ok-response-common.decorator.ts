import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiOkResponseCommon = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(dataDto),
    ApiOkResponse({
      schema: {
        properties: {
          isSuccess: { type: 'boolean', example: true },
          code: { type: 'string', example: 'COMMON_SUCCESS' },
          message: { type: 'string', example: '요청에 성공했습니다.' },
          result: {
            $ref: getSchemaPath(dataDto),
          },
        },
      },
    }),
  );

export const ApiOkResponseCommonArray = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(dataDto),
    ApiOkResponse({
      schema: {
        properties: {
          isSuccess: { type: 'boolean', example: true },
          code: { type: 'string', example: 'COMMON_SUCCESS' },
          message: { type: 'string', example: '요청에 성공했습니다.' },
          result: {
            type: 'array',
            items: { $ref: getSchemaPath(dataDto) },
          },
        },
      },
    }),
  );
