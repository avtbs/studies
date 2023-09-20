import { QuestionsService } from "./questions.service";
import { Questions } from "src/entities/questions";
export declare class QuestionsController {
    private readonly questionsService;
    constructor(questionsService: QuestionsService);
    getAll(): Promise<Questions[]>;
    getOne(QuestionId: number): Promise<Questions>;
    remove(QuestionId: number): Promise<{
        message: string;
        deletedQuestion: void;
    }>;
    createQuestion(question: Questions): Promise<{
        message: string;
        newQuestion: Questions;
    }>;
    update(QuestionId: number, updatedQuestion: Questions): Promise<{
        message: string;
        updateQuestion: void;
    }>;
}
