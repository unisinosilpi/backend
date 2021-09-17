import { IResponse } from '../contracts/http-service';
import { BaseError } from '../../domain/errors/base-error';

const badRequest = (error: BaseError): IResponse => {
  return { statusCode: 400, body: error };
};

const ok = (response: unknown): IResponse => {
  return { statusCode: 200, body: response };
};

export { badRequest, ok };
