import { Nurse } from '../models/nurse';

interface ILoginService {
  login(username: string, password: string): Promise<Nurse>;
}

export { ILoginService };
