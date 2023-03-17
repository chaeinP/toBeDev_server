import httpStatus from 'http-status';

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
