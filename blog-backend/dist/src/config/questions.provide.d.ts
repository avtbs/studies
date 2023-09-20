import { DataSource } from 'typeorm';
import { Questions } from 'src/entities/questions';
export declare const questionsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Questions>;
    inject: string[];
}[];
