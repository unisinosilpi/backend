import { IHttpService, IRequest, IResponse } from '../contracts/http-service';

class LoginController implements IHttpService {
  handle(request: IRequest): IResponse {
    return { body: request, statusCode: 200 };
  }
}

export { LoginController };
