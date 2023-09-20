import { Controller, Get, Param, Delete, Post, Body, Put} from "@nestjs/common";
import { UsersService } from "./users.service";
import { Users } from "src/entities/users";


@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.findAll();       
    }   
        
    @Get(':id')
    async getOne(@Param('id') UserId: number) {
        const user = await this.usersService.findOne( UserId);
        return user;
    }

    @Delete(':id')
    async remove(@Param('id') UserId: number) {
        const deletedUser = await this.usersService.remove( UserId);
        return { message: 'User deleted', deletedUser };
    }

    @Post()
    async createUser(@Body() user: Users) {
        console.log(user);
        const newUser = await this.usersService.create(user);
        return { message: 'User created', newUser };
    }

    @Put(':id')
    async update(@Param('id') UserId: number,@Body() updatedUser: Users){
        return await this.usersService.update(UserId, updatedUser);
    }
}