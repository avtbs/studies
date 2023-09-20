import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
    migrationsTableName: 'migrations',
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Laid22052002",
    database: "websitedb",
    logging: true,
    synchronize: false,
    entities: ["src/entities/*{.ts,.js}"],
    migrations: ["src/migrations/*{.ts,.js}"],

})