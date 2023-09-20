"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddQuestionsTable1694533396657 = void 0;
const typeorm_1 = require("typeorm");
class AddQuestionsTable1694533396657 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "Questions",
            columns: [
                {
                    name: "QuestionId",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "DescrQuest",
                    type: "varchar(100)",
                },
                {
                    name: "Answer",
                    type: "JSON",
                },
                {
                    name: "Created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "Updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("Questions");
    }
}
exports.AddQuestionsTable1694533396657 = AddQuestionsTable1694533396657;
//# sourceMappingURL=1694533396657-add-questions-table.js.map