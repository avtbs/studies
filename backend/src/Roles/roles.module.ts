import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { Roles } from 'src/entities/roles';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rolesProviders } from "@src/config/roles.provide";
import { AppModule } from "@src/app.module";

@Module({
    imports: [
        //TypeOrmModule.forFeature([Roles]),
        AppModule,
    ],
    controllers:[RolesController],
    providers: [RolesService, ...rolesProviders],
    //exports: [TypeOrmModule]
    })
export class RolesModule{}