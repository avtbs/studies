import { Repository } from 'typeorm';
import { Questions } from 'src/entities/questions';
export declare class QuestionsService {
    private questionsRepository;
    constructor(questionsRepository: Repository<Questions>);
    findAll(): Promise<Questions[]>;
    findOne(QuestionId: number): Promise<Questions | null>;
    remove(QuestionId: number): Promise<void>;
    create(newQuestion: Partial<Questions>): Promise<Questions>;
    update(QuestionId: number, questions: Questions): Promise<void>;
}
