import express, { json } from 'express';
import cors from 'cors';
import { adaptEndpoint } from './adapters/endpoint';
import { makeRegisterVitalSignsService } from './factories/register-vital-signs';

const app = express();
app.use(cors());
app.use(json());

app.post('/elder/:elderId/vitalsigns', adaptEndpoint(makeRegisterVitalSignsService()));

app.listen(8081, () => {
  // eslint-disable-next-line no-console
  console.log('Server running at 8081');
});
