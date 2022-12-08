import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { dataSource } from '@config/data-source';
const app: express.Application = express();

dataSource
  .initialize()
  .then(() => {
    console.log('db successfully connected');
  })
  .catch((error: Error) => console.log('db connect failed', error));

app.use(express.json());
app.use(cors());

// 데이터 insert 기능 부터 추가하자
// 공통 에러 처리
// tsoa 라우팅 추가

app.get('/', (req, res) => res.send('Hello World'));
export default app;
