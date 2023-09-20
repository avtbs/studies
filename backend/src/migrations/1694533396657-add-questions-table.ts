import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddQuestionsTable1694533396657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Questions");
    }

}
