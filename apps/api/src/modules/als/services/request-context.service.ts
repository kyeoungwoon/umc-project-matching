import { Inject, Injectable } from '@nestjs/common';

import { CustomException } from '@common/codes/custom.exception';
import { CommonErrorCode } from '@common/codes/error/common.error.code';
import { RequestContext } from '@common/context/reqeust.context';

import { ALS, AlsInstance } from '@modules/als/constants/als.constants';

@Injectable()
export class RequestContextService {
  constructor(@Inject(ALS) private readonly als: AlsInstance) {}

  /**
   * 현재 요청의 RequestContext 인스턴스를 반환합니다.
   * 컨텍스트가 존재하지 않을 경우 에러를 발생시킵니다.
   */
  getContext(): RequestContext {
    const requestContext = this.als.getStore();
    if (!requestContext) {
      // 이 에러는 미들웨어 설정이 잘못되지 않은 이상 발생해서는 안 됩니다.
      throw new CustomException(CommonErrorCode.REQUEST_CONTEXT_ERROR);
    }
    return requestContext;
  }

  /**
   * 현재 요청 컨텍스트에서 userId를 가져옵니다.
   */
  getOrThrowUserId() {
    const contextUserId = this.getContext().getUserId();
    if (!contextUserId) {
      throw new CustomException(CommonErrorCode.REQUEST_CONTEXT_NO_USER);
    }

    return contextUserId;
  }

  getOrThrowUserIdAsBigInt() {
    const userId = this.getOrThrowUserId();
    try {
      return BigInt(userId);
    } catch {
      throw new CustomException(CommonErrorCode.USER_ID_TYPE_ERR);
    }
  }

  getUserId(): string | null {
    return this.getContext().getUserId();
  }

  /**
   * 현재 요청 컨텍스트에 userId를 설정합니다.
   */
  setUserId(userId: string | bigint): void {
    this.getContext().setUserId(String(userId));
  }

  /**
   * 현재 요청 컨텍스트에서 traceId를 가져옵니다.
   */
  getOrThrowTraceId(): string {
    return this.getContext().getTraceId();
  }

  getTraceId(): string {
    const requestContext = this.als.getStore();
    if (!requestContext) {
      return 'NO_TRACE_ID';
    }

    return requestContext.getTraceId();
  }
}
