import express, { json } from 'express';
import cors from 'cors';
import { adaptEndpoint } from './adapters/endpoint';
import { makeLoginService } from './factories/login';

const app = express();
app.use(cors());
app.use(json());

app.post('/login', adaptEndpoint(makeLoginService()));

app.listen(8081, () => {
  // eslint-disable-next-line no-console
  console.log('Server running at 8081');
});
