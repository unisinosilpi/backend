import { Elder } from '../../domain/models/elder';
import { VitalSigns } from '../../domain/models/vital-signs';

interface IElderRepository {
  registerVitalSigns(vitalSigns: VitalSigns, nurseId: string, elderId: string): Promise<Elder>;
  getAll(): Promise<Elder[]>;
}

export { IElderRepository };
