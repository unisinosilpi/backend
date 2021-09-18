import admin from 'firebase-admin';
import { ElderDoesNotExist } from '../../../domain/errors/elder-does-not-exist';
import { Elder } from '../../../domain/models/elder';
import { VitalSigns } from '../../../domain/models/vital-signs';
import { IElderRepository } from '../../contracts/elder-repository';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('./firebase-key.json');

class ElderRepository implements IElderRepository {
  private readonly eldersCollection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor() {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    this.eldersCollection = admin.firestore().collection('elders');
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
}

export { ElderRepository };
