import { MigrationInterface, QueryRunner } from "typeorm"

export class AddQuestionsSeed1694618192353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO Questions (DescrQuest, Answer) VALUES ('Какое самое высокое горное озеро в мире?', 
            '[{"text": "Титикака", "правильный": false}, {"text": "Онтарио", "правильный": false},
            {"text": "Виктория", "правильный": false}, {"text": "Тинтинабулу", "правильный": true}]');`
        );
        await queryRunner.query(
            `INSERT INTO Questions (DescrQuest, Answer) VALUES ('Какая столица Японии?', 
            '[{"text": "Пекин", "правильный": false}, {"text": "Токио", "правильный": true},
            {"text": "Сеул", "правильный": false}, {"text": "Хонолулу", "правильный": false}]');`
        );
        await queryRunner.query(
            `INSERT INTO Questions (DescrQuest, Answer) VALUES ('Сколько континентов на планете Земля?', 
            '[{"text": "4", "правильный": false}, {"text": "5", "правильный": false},
            {"text": "6", "правильный": false}, {"text": "7", "правильный": true}]');`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
