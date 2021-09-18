import { FirebaseConfig } from './config/firebase';
import { ElderDoesNotExist } from '../../../domain/errors/elder-does-not-exist';
import { Elder } from '../../../domain/models/elder';
import { VitalSigns } from '../../../domain/models/vital-signs';
import { IElderRepository } from '../../contracts/elder-repository';

class ElderRepository implements IElderRepository {
  private readonly eldersCollection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor() {
    this.eldersCollection = new FirebaseConfig().getInstance().collection('elders');
  }

  async registerVitalSigns(vitalSigns: VitalSigns, nurseId: string, elderId: string): Promise<Elder> {
    const elderDocRef = this.eldersCollection.doc(elderId);
    const elderDoc = await elderDocRef.get();
    if (!elderDoc.exists) throw new ElderDoesNotExist(elderId);
    const elder = { id: elderId, ...elderDoc.data() } as Elder;
    const collectedVitalSigns = { vitalSigns, nurseId, collectedAt: new Date().toISOString() };
    elder.vitalSignsHistory.push(collectedVitalSigns);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...elderData } = elder;
    await elderDocRef.set(elderData);
    return elder;
  }

  async getAll(): Promise<Elder[]> {
    const elders: Elder[] = (await this.eldersCollection.get()).docs.map((doc) => {
      const elder = doc.data() as Elder;
      return { ...elder, id: doc.id };
    });

    return elders;
  }
}

export { ElderRepository };
