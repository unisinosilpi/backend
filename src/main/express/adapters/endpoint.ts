import { Request, Response } from 'express';
import { IHttpService } from '../../../presentation/contracts/http-service';
import { adaptRequest } from './request';

const adaptEndpoint = (service: IHttpService) => {
  return async (req: Request, res: Response): Promise<void> => {
    const request = adaptRequest(req);
    const { statusCode, body } = await service.handle(request);
    res.status(statusCode).json(body);
  };
};

export { adaptEndpoint };
