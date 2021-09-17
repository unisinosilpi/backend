import { IHttpService } from '../../../presentation/contracts/http-service';
import { LoginHttpService } from '../../../presentation/impl/login';

const makeLoginService = (): IHttpService => {
  return new LoginHttpService();
};

export { makeLoginService };
