declare global {
  namespace Express {
    export interface Request {
      extraData?: any;
    }
  }
}

export {};
