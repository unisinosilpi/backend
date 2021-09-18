import { BaseError } from './base-error';

class InternalServerError extends BaseError {
  constructor(err?: Error) {
    super(`Internal Server Error`, err);
    this.name = this.constructor.name;
  }
}

export { InternalServerError };
