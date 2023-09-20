"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRolesSeed1694618219121 = void 0;
class AddRolesSeed1694618219121 {
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO Roles (RoleName, CanManageUsers, CanApproveUsers, CanManageQuestions, Created_at, Created_by, Updated_at, Updated_by) VALUES ('Администратор', TRUE, TRUE, TRUE, NOW(), 1, NOW(), 1);`);
        await queryRunner.query(`INSERT INTO Roles (RoleName, CanManageUsers, CanApproveUsers, CanManageQuestions, Created_at, Created_by, Updated_at, Updated_by) VALUES ('Модератор', FALSE, FALSE, TRUE, NOW(), 2, NOW(), 2);`);
        await queryRunner.query(`INSERT INTO Roles (RoleName, CanManageUsers, CanApproveUsers, CanManageQuestions, Created_at, Created_by, Updated_at, Updated_by) VALUES ('Пользователь', FALSE, FALSE, FALSE, NOW(), 3, NOW(), 3);`);
    }
    async down(queryRunner) {
    }
}
exports.AddRolesSeed1694618219121 = AddRolesSeed1694618219121;
//# sourceMappingURL=1694618219121-add-roles-seed.js.map