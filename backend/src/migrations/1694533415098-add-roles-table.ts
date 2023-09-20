import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddRolesTable1694533415098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Roles");
    }

}
