import { LoginService } from '../../../domain/impl/login';
import { IHttpService } from '../../../presentation/contracts/http-service';
import { LoginHttpService } from '../../../presentation/impl/login';

const makeLoginService = (): IHttpService => {
  const loginService = new LoginService();
  return new LoginHttpService(loginService);
};

export { makeLoginService };
