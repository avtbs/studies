import { Module } from "@nestjs/common";
import { QuestionsController } from "./questions.controller";
import { QuestionsService } from "./questions.service";
import { Questions } from 'src/entities/questions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { questionsProviders } from "@src/config/questions.provide";
import { AppModule } from "@src/app.module";

@Module({
    imports: [
        //TypeOrmModule.forFeature([Questions]),
        AppModule,
    ],
    controllers:[QuestionsController],
    providers: [QuestionsService, ...questionsProviders],
    //exports: [TypeOrmModule]
    })
export class QuestionsModule{}