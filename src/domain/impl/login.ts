import { ILoginService } from '../contracts/login';
import { Nurse } from '../models/nurse';

class LoginService implements ILoginService {
  login(username: string, password: string): Promise<Nurse> {
    return new Promise((resolve) =>
      resolve({
        id: password,
        username,
        coren: 111,
      }),
    );
  }
}

export { LoginService };
