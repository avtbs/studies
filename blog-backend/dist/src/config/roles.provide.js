"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesProviders = void 0;
const roles_1 = require("../entities/roles");
exports.rolesProviders = [
    {
        provide: 'Roles_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(roles_1.Roles),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=roles.provide.js.map