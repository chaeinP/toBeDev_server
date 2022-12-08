import { env } from '@config/env';
import { DataSource } from 'typeorm';

const { db } = env;

export const dataSource = new DataSource({
  type: 'mysql',
  host: db.host,
  port: db.port!,
  username: db.username,
  password: db.password,
  database: db.database,
  entities: [__dirname + '/entity/*{.js,.ts}'],
  synchronize: true,
});
