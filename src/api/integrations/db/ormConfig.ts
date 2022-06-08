import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource  = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    `${__dirname}/entities/index{.ts,.js}`,
  ],
  synchronize: false,
  logging: Boolean(process.env.DB_LOG || false),
})


AppDataSource.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))

export default AppDataSource;
