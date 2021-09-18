import { Elder } from '../models/elder';

interface IGetEldersService {
  get(): Promise<Elder[]>;
}

export { IGetEldersService };
