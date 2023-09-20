"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRolesTable1694533415098 = void 0;
const typeorm_1 = require("typeorm");
class AddRolesTable1694533415098 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "Roles",
            columns: [
                {
                    name: "RoleId",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "RoleName",
                    type: "varchar(50)",
                },
                {
                    name: "CanManageUsers",
                    type: "BOOLEAN",
                },
                {
                    name: "CanApproveUsers",
                    type: "BOOLEAN",
                },
                {
                    name: "CanManageQuestions",
                    type: "BOOLEAN",
                },
                {
                    name: "Created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "Created_by",
                    type: "int",
                },
                {
                    name: "Updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
                },
                {
                    name: "Updated_by",
                    type: "int",
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("Roles");
    }
}
exports.AddRolesTable1694533415098 = AddRolesTable1694533415098;
//# sourceMappingURL=1694533415098-add-roles-table.js.map