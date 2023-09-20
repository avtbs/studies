import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/typeorm';
import { UsersModule } from './Users/users.module';
import { RouterModule } from '@nestjs/core';
import { QuestionsModule } from './Questions/questions.module';
import { RolesModule } from './Roles/roles.module';

@Module({
  imports: [
    /*ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),*/
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
      UsersModule,
      RouterModule.register([
          {
            path: 'users',
            module: UsersModule,
          },
      ]),
      QuestionsModule,
      RouterModule.register([
          {
            path: 'questions',
            module: QuestionsModule,
          },
        ]),
      RolesModule,
      RouterModule.register([
          {
            path: 'roles',
            module: RolesModule,
          },
        ]),
  ], 
  controllers: [AppController],
  providers: [AppService, ...config] ,
  exports: [...config],
})
export class AppModule {}
