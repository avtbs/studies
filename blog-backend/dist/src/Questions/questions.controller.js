"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const questions_service_1 = require("./questions.service");
const questions_1 = require("../entities/questions");
let QuestionsController = class QuestionsController {
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    getAll() {
        return this.questionsService.findAll();
    }
    async getOne(QuestionId) {
        const question = await this.questionsService.findOne(QuestionId);
        return question;
    }
    async remove(QuestionId) {
        const deletedQuestion = await this.questionsService.remove(QuestionId);
        return { message: 'Question deleted', deletedQuestion };
    }
    async createQuestion(question) {
        console.log(question);
        const newQuestion = await this.questionsService.create(question);
        return { message: 'Question created', newQuestion };
    }
    async update(QuestionId, updatedQuestion) {
        const updateQuestion = await this.questionsService.update(QuestionId, updatedQuestion);
        return { message: 'Question update', updateQuestion };
    }
};
exports.QuestionsController = QuestionsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_1.Questions]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "createQuestion", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, questions_1.Questions]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "update", null);
exports.QuestionsController = QuestionsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [questions_service_1.QuestionsService])
], QuestionsController);
//# sourceMappingURL=questions.controller.js.map