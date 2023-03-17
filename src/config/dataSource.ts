import { env } from '@config/env';
import { DataSource } from 'typeorm';

import path from 'path';

const { db } = env;

export const dataSource = new DataSource({
  type: 'mysql',
  host: db.host,
  port: db.port!,
  username: db.username,
  password: db.password,
  database: db.database,
  entities: [path.join(__dirname + '/../entities/index{.js,.ts}')],
  synchronize: true,
  dropSchema: true,
  timezone: 'Z',
  charset: 'utf8mb4',
});
