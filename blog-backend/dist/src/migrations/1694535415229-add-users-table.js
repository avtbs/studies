"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsersTable1694535415229 = void 0;
const typeorm_1 = require("typeorm");
class AddUsersTable1694535415229 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "Users",
            columns: [
                {
                    name: "UserId",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "UserName",
                    type: "varchar(50)",
                },
                {
                    name: "Address",
                    type: "varchar(50)",
                },
                {
                    name: "Email",
                    type: "varchar(50)",
                },
                {
                    name: "Telephone",
                    type: "decimal",
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
                },
                {
                    name: "RoleId",
                    type: "int",
                    isNullable: false,
                },
            ],
        }), true);
        await queryRunner.createForeignKey("Users", new typeorm_1.TableForeignKey({
            columnNames: ["RoleId"],
            referencedColumnNames: ["RoleId"],
            referencedTableName: "Roles",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("Users");
    }
}
exports.AddUsersTable1694535415229 = AddUsersTable1694535415229;
//# sourceMappingURL=1694535415229-add-users-table.js.map