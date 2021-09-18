import { VitalSignsRegistration } from './vital-signs-registration';

interface Elder {
  id: string;
  name: string;
  vitalSignsHistory: VitalSignsRegistration[];
}

export { Elder };
