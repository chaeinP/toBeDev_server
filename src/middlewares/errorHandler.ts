import { Exception } from '@common/exceptions/Exception';
import { ErrorRequestHandler } from 'express';
import { ErrorResponsePayload } from '@common/responses/ErrorResponsePayload';

export const errorHandler: ErrorRequestHandler = (
  err: Error | Exception,
  req,
  res,
  next,
) => {
  let response = new ErrorResponsePayload(err);

  // 에러 응답 로깅 추가
  res.status(response.statusCode).send(response);
};
