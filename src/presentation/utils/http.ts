import { IResponse } from '../contracts/http-service';
import { BaseError } from '../../domain/errors/base-error';
import { InternalServerError } from '../../domain/errors/internal-server-error';

const badRequest = (error: BaseError): IResponse => {
  return { statusCode: 400, body: error };
};

const ok = (response: unknown): IResponse => {
  return { statusCode: 200, body: response };
};

const serverError = (err?: Error): IResponse => {
  return { statusCode: 500, body: new InternalServerError(err) };
};

export { badRequest, ok, serverError };
