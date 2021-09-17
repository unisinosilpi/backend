import { ILoginService } from '../../domain/contracts/login';
import { MissingParameterError } from '../../domain/errors/missing-parameter';
import { IHttpService, IRequest, IResponse } from '../contracts/http-service';
import { badRequest, ok } from '../utils/http';

class LoginHttpService implements IHttpService {
  constructor(private readonly loginService: ILoginService) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { username, password } = request.body;
    if (!username) return badRequest(new MissingParameterError('username'));
    if (!password) return badRequest(new MissingParameterError('password'));
    const user = await this.loginService.login(username, password);
    return ok(user);
  }
}

export { LoginHttpService };
