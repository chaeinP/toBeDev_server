import httpStatus from 'http-status';
import { Exception } from './Exception';

export class ConflictException extends Exception {
  constructor(statusCode?: number, message?: string) {
    super();

    this.statusCode = statusCode || httpStatus.CONFLICT;
    this.message = message || (httpStatus[this.statusCode] as string);
  }
}
