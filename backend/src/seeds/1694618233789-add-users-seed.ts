import { MigrationInterface, QueryRunner } from "typeorm"

export class AddUsersSeed1694618233789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `insert into Users (UserName, Address, Email, Telephone, RoleId) 
            values ("Valera", "Ukrain, Kharkiv, Myra str.", "valera@gmail.com", 00000, 1);`
        );
        await queryRunner.query(
            `insert into Users (UserName, Address, Email, Telephone, RoleId) 
            values ("Vlad", "Ukrain, Kharkiv, Myra str.", "vlad@gmail.com", 12345, 2);`
        );
        await queryRunner.query(
            `insert into Users (UserName, Address, Email, Telephone, RoleId) 
            values ("Alex", "Ukrain, Kharkiv, Myra str.", "alex@gmail.com", 54321, 3);`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
