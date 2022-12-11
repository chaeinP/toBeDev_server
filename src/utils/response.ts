import { env } from '@config/env';
import httpStatus from 'http-status';
import { FieldErrors, ValidateError } from 'tsoa';
import { Exception } from '../exceptions/Exception';

export class ResponsePayload<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;

  constructor(statusCode?: number, data?: T, message?: string) {
    this.statusCode = statusCode || httpStatus.OK;
    this.success = true;
    this.message = message || (httpStatus[this.statusCode] as string);
    if (data) this.data = data;
  }
}

export class ErrorResponsePayload {
  statusCode: number;
  success: boolean;
  message: string;
  details?: FieldErrors;
  stack?: string;

  constructor(err: Error | Exception | ValidateError) {
    this.success = false;
    // logical error
    if (err instanceof Exception) {
      const { statusCode, message, stack } = err.getter();
      this.statusCode = statusCode;
      this.message = message;
      if (env.node_env !== 'live') this.stack = stack;
    }
    // tsoa validation error
    else if (err instanceof ValidateError) {
      this.statusCode = err.status;
      this.message = err.message;
      this.details = err.fields;
      if (env.node_env !== 'live') this.stack = err.stack;
    }
    // physical error
    else {
      this.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      this.message = httpStatus[500];
      if (env.node_env !== 'live') this.stack = err.stack;
    }
  }
}
