import { RegisterVitalSignsService } from '../../../domain/impl/register-vital-signs';
import { ElderRepository } from '../../../infrastructure/impl/firebase/elder-repository';
import { IHttpService } from '../../../presentation/contracts/http-service';
import { RegisterVitalSignsHttpService } from '../../../presentation/impl/register-vital-signs';

const makeRegisterVitalSignsService = (): IHttpService => {
  const elderRepository = new ElderRepository();
  const registerVitalSignsService = new RegisterVitalSignsService(elderRepository);
  return new RegisterVitalSignsHttpService(registerVitalSignsService);
};

export { makeRegisterVitalSignsService };
