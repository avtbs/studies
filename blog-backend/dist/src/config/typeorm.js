"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: '.env' });
exports.config = [{
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const configSource = new typeorm_1.DataSource({
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
            });
            return configSource.initialize();
        }
    }];
//# sourceMappingURL=typeorm.js.map