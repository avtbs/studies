import { Repository } from 'typeorm';
import { Roles } from 'src/entities/roles';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Roles>);
    findAll(): Promise<Roles[]>;
    findOne(RoleId: number): Promise<Roles | null>;
    remove(RoleId: number): Promise<void>;
    create(newRole: Partial<Roles>): Promise<Roles>;
    update(RoleId: number, role: Partial<Roles>): Promise<Roles>;
}
