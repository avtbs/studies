import { Repository } from 'typeorm';
import { Users } from '@src/entities/users';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): Promise<Users[]>;
    findOne(UserId: number): Promise<Users | null>;
    remove(UsersId: number): Promise<void>;
    create(newUser: Partial<Users>): Promise<Users>;
    update(UserId: number, user: Partial<Users>): Promise<Users>;
}
