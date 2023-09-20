import { DataSource } from "typeorm";
export declare const config: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
