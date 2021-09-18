import { BaseError } from './base-error';

class ElderDoesNotExist extends BaseError {
  constructor(id: string) {
    super(`Provided elder id ${id} does not exist`);
    this.name = this.constructor.name;
  }
}

export { ElderDoesNotExist };
