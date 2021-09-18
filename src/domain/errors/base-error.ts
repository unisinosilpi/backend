class BaseError {
  message: string;

  name: string;

  stack: string | undefined;

  constructor(message: string, err?: Error) {
    this.name = this.constructor.name;
    this.message = message;
    this.stack = err?.stack;
  }
}

export { BaseError };
