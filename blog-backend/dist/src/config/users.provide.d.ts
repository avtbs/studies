import { DataSource } from 'typeorm';
import { Users } from 'src/entities/users';
export declare const usersProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Users>;
    inject: string[];
}[];
