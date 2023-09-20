import { MigrationInterface, QueryRunner } from "typeorm"

export class AddRolesSeed1694618219121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO Roles (RoleName, CanManageUsers, CanApproveUsers, CanManageQuestions, Created_at, Created_by, Updated_at, Updated_by) VALUES ('Администратор', TRUE, TRUE, TRUE, NOW(), 1, NOW(), 1);`
        );
        await queryRunner.query(
            `INSERT INTO Roles (RoleName, CanManageUsers, CanApproveUsers, CanManageQuestions, Created_at, Created_by, Updated_at, Updated_by) VALUES ('Модератор', FALSE, FALSE, TRUE, NOW(), 2, NOW(), 2);`
        );
        await queryRunner.query(
            `INSERT INTO Roles (RoleName, CanManageUsers, CanApproveUsers, CanManageQuestions, Created_at, Created_by, Updated_at, Updated_by) VALUES ('Пользователь', FALSE, FALSE, FALSE, NOW(), 3, NOW(), 3);`
        );
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
