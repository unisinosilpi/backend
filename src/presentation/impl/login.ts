import { IHttpService, IRequest, IResponse } from '../contracts/http-service';

class LoginHttpService implements IHttpService {
  handle(request: IRequest): IResponse {
    return { body: request, statusCode: 200 };
  }
}

export { LoginHttpService };
