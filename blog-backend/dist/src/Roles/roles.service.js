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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const roles_1 = require("../entities/roles");
const typeorm_2 = require("@nestjs/typeorm");
let RolesService = class RolesService {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    findAll() {
        return this.rolesRepository.find();
    }
    findOne(RoleId) {
        return this.rolesRepository.findOneBy({ RoleId });
    }
    async remove(RoleId) {
        await this.rolesRepository.delete(RoleId);
    }
    async create(newRole) {
        const createdRole = await this.rolesRepository.create(newRole);
        return await this.rolesRepository.save(createdRole);
    }
    async update(RoleId, role) {
        const updateRole = await this.rolesRepository.findOneBy({ RoleId });
        if (!updateRole) {
            throw new Error('Role not found');
        }
        Object.assign(updateRole, role);
        updateRole.Updated_at = new Date();
        return await this.rolesRepository.save(updateRole);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(roles_1.Roles)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map