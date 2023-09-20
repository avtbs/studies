"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsersSeed1694618233789 = void 0;
class AddUsersSeed1694618233789 {
    async up(queryRunner) {
        await queryRunner.query(`insert into Users (UserName, Address, Email, Telephone, RoleId) 
            values ("Valera", "Ukrain, Kharkiv, Myra str.", "valera@gmail.com", 00000, 1);`);
        await queryRunner.query(`insert into Users (UserName, Address, Email, Telephone, RoleId) 
            values ("Vlad", "Ukrain, Kharkiv, Myra str.", "vlad@gmail.com", 12345, 2);`);
        await queryRunner.query(`insert into Users (UserName, Address, Email, Telephone, RoleId) 
            values ("Alex", "Ukrain, Kharkiv, Myra str.", "alex@gmail.com", 54321, 3);`);
    }
    async down(queryRunner) {
    }
}
exports.AddUsersSeed1694618233789 = AddUsersSeed1694618233789;
//# sourceMappingURL=1694618233789-add-users-seed.js.map