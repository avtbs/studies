"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
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
});
//# sourceMappingURL=ormconfig.js.map