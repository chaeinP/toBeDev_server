import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';

import { RegisterRoutes } from '@routes/routes';
import { errorHandler } from '@middlewares/errorHandler';
import { dataSource } from '@config/dataSource';
import swaggerFile from './swagger.json';

const app: express.Application = express();

dataSource
  .initialize()
  .then(() => {
    console.log('db successfully connected');
  })
  .catch((error: Error) => console.log('db connect failed', error));

app.use(express.json());
app.use(cors());
RegisterRoutes(app);
app.get('/health', (req, res) => res.send('OK'));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(errorHandler);
export default app;
