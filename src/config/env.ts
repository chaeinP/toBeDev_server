export const env = {
  db: {
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT!,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
};
