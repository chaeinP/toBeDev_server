import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { dataSource } from './data-source';
const app: express.Application = express();

dataSource
  .initialize()
  .then(() => {
    console.log('db successfully connected');
  })
  .catch((error: Error) => console.log('db connect failed', error));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World'));
export default app;
