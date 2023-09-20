"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const users_1 = require("../entities/users");
exports.usersProviders = [
    {
        provide: 'Users_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(users_1.Users),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=users.provide.js.map