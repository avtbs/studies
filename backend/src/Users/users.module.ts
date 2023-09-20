import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Users } from 'src/entities/users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usersProviders } from "@src/config/users.provide";
import { AppModule } from "@src/app.module";

@Module({
    imports: [
        //TypeOrmModule.forFeature([Users]),
        AppModule,
    ],
    controllers:[UsersController],
    providers: [UsersService,   ...usersProviders],
    //exports: [Users]
    })
export class UsersModule{}