import { GetEldersService } from '../../../domain/impl/get-elders';
import { ElderRepository } from '../../../infrastructure/impl/firebase/elder-repository';
import { IHttpService } from '../../../presentation/contracts/http-service';
import { GetEldersHttpService } from '../../../presentation/impl/get-elders';

const makeGetElders = (): IHttpService => {
  const elderRepository = new ElderRepository();
  const getEldersService = new GetEldersService(elderRepository);
  return new GetEldersHttpService(getEldersService);
};

export { makeGetElders };
