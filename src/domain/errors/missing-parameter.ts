import { BaseError } from './base-error';

class MissingParameterError extends BaseError {
  constructor(parameter: string) {
    super(`Parameter ${parameter} is missing`);
    this.name = this.constructor.name;
  }
}

export { MissingParameterError };
