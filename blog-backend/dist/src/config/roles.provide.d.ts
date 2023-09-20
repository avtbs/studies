import { DataSource } from 'typeorm';
import { Roles } from 'src/entities/roles';
export declare const rolesProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Roles>;
    inject: string[];
}[];
