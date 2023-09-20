import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class AddUsersTable1694535415229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )
        await queryRunner.createForeignKey(
            "Users",
            new TableForeignKey({
                columnNames: ["RoleId"],
                referencedColumnNames: ["RoleId"],
                referencedTableName: "Roles",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users");
        //await queryRunner.dropColumn("Users", "UsersId");
    }

}
