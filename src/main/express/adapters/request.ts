import { Request } from 'express';
import { IRequest } from '../../../presentation/contracts/http-service';

const adaptRequest = (expressRequest: Request): IRequest => {
  const { body } = expressRequest;
  return { body };
};

export { adaptRequest };
