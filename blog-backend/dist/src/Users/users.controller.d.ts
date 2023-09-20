import { UsersService } from "./users.service";
import { Users } from "src/entities/users";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<Users[]>;
    getOne(UserId: number): Promise<Users>;
    remove(UserId: number): Promise<{
        message: string;
        deletedUser: void;
    }>;
    createUser(user: Users): Promise<{
        message: string;
        newUser: Users;
    }>;
    update(UserId: number, updatedUser: Users): Promise<Users>;
}
