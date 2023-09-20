import { Controller, Get, Param, Delete, Post, Body, Put} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { Roles } from "src/entities/roles";


@Controller()
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    getAll() {
        return this.rolesService.findAll();       
    }   
        
    @Get(':id')
    async getOne(@Param('id') RoleId: number) {
        const role = await this.rolesService.findOne( RoleId);
        return role;
    }

    @Delete(':id')
    async remove(@Param('id') RoleId: number) {
        const deletedRole = await this.rolesService.remove( RoleId);
        return { message: 'Role deleted', deletedRole };
    }

    @Post()
    async createRole(@Body() role: Roles) {
        console.log(role);
        const newRole = await this.rolesService.create(role);
        return { message: 'Role created', newRole };
    }

    @Put(':id')
    async update(@Param('id') RolesId: number,@Body() updatedRole: Partial<Roles>){
        return await this.rolesService.update(RolesId, updatedRole);
    }
}