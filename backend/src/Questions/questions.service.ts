import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Questions } from 'src/entities/questions';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class QuestionsService {

  constructor(
    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
  ) { }

  findAll(): Promise<Questions[]> {
    return this.questionsRepository.find();
  }

  findOne(QuestionId: number): Promise<Questions | null> {
    return this.questionsRepository.findOneBy({ QuestionId });
  }

  async remove(QuestionId: number): Promise<void> {
    await this.questionsRepository.delete(QuestionId);
  }

  async create(newQuestion: Partial<Questions>): Promise<Questions> {
    const createdQuestion = await this.questionsRepository.create(newQuestion);
    return await this.questionsRepository.save(createdQuestion);
  }

  async update(QuestionId: number, questions: Questions): Promise<void> {
    await this.questionsRepository.update({ QuestionId }, questions);
  }
}