import { IElderRepository } from '../../infrastructure/contracts/elder-repository';
import { IRegisterVitalSignsService } from '../contracts/register-vital-signs';
import { Elder } from '../models/elder';
import { VitalSigns } from '../models/vital-signs';

class RegisterVitalSignsService implements IRegisterVitalSignsService {
  constructor(private readonly elderRepository: IElderRepository) {}

  async register(vitalSigns: VitalSigns, nurseId: string, elderId: string): Promise<Elder> {
    return this.elderRepository.registerVitalSigns(vitalSigns, nurseId, elderId);
  }
}

export { RegisterVitalSignsService };
