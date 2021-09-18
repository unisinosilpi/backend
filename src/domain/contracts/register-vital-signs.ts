import { Elder } from '../models/elder';
import { VitalSigns } from '../models/vital-signs';

interface IRegisterVitalSignsService {
  register(vitalSigns: VitalSigns, nurseId: string, elderId: string): Promise<Elder>;
}

export { IRegisterVitalSignsService };
