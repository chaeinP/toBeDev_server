import { Exception } from '@common/exceptions/Exception';
import httpStatus from 'http-status';
import { FieldErrors, ValidateError } from 'tsoa';

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
      if (process.env.NODE_ENV === 'local') this.stack = stack;
    }
    // tsoa validation error
    else if (err instanceof ValidateError) {
      this.statusCode = err.status;
      this.message = 'Validation error';
      this.details = err.fields;
      if (process.env.NODE_ENV === 'local') this.stack = err.stack;
    }
    // physical error
    else {
      this.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      this.message = httpStatus[500];
      if (process.env.NODE_ENV === 'local') this.stack = err.stack;
    }
  }
}

export type CommonErrorPayload = Omit<
  ErrorResponsePayload,
  'details' | 'stack'
>;

export type ValidationErrorPayload = Omit<ErrorResponsePayload, 'stack'>;
