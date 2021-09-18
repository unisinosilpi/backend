import { IElderRepository } from '../../infrastructure/contracts/elder-repository';
import { IGetEldersService } from '../contracts/get-elders';
import { Elder } from '../models/elder';

class GetEldersService implements IGetEldersService {
  constructor(private readonly eldersRepository: IElderRepository) {}

  async get(): Promise<Elder[]> {
    return this.eldersRepository.getAll();
  }
}

export { GetEldersService };
