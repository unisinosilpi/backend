import { IGetEldersService } from '../../domain/contracts/get-elders';
import { IHttpService, IRequest, IResponse } from '../contracts/http-service';
import { ok } from '../utils/http';

class GetEldersHttpService implements IHttpService {
  constructor(private readonly getEldersService: IGetEldersService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(_request: IRequest): Promise<IResponse> {
    return ok(await this.getEldersService.get());
  }
}

export { GetEldersHttpService };
