"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsProviders = void 0;
const questions_1 = require("../entities/questions");
exports.questionsProviders = [
    {
        provide: 'Questions_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(questions_1.Questions),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=questions.provide.js.map