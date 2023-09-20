import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions, Entity } from "typeorm";

dotenvConfig({ path: '.env' });

export const config = [{
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const configSource = new DataSource({
            migrationsTableName: 'migrations',
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "Laid22052002",
            database: "websitedb",
            entities: ["src/entities/*.ts"],
            migrations: ["src/migrations/*.ts", "src/seeds/*.ts"],
            synchronize: true,
        })
        return configSource.initialize();
    }
}]
//export default registerAs('typeorm', () => config)
//export const connectionSource = new DataSource(config as DataSourceOptions);