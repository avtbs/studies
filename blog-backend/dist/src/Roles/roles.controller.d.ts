import { RolesService } from "./roles.service";
import { Roles } from "src/entities/roles";
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getAll(): Promise<Roles[]>;
    getOne(RoleId: number): Promise<Roles>;
    remove(RoleId: number): Promise<{
        message: string;
        deletedRole: void;
    }>;
    createRole(role: Roles): Promise<{
        message: string;
        newRole: Roles;
    }>;
    update(RolesId: number, updatedRole: Partial<Roles>): Promise<Roles>;
}
