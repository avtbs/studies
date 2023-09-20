import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Roles } from 'src/entities/roles';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RolesService {

    constructor(
      
        @InjectRepository(Roles)
        private rolesRepository: Repository<Roles>,
      ) {}
         
      findAll(): Promise<Roles[]> {
        return this.rolesRepository.find();
      }
    
      findOne(RoleId: number): Promise<Roles | null> {
        return this.rolesRepository.findOneBy({ RoleId });
      }
    
      async remove(RoleId: number): Promise<void> {
        await this.rolesRepository.delete(RoleId);
      }

      async create(newRole: Partial<Roles>): Promise<Roles> {      
        const createdRole = await this.rolesRepository.create(newRole);
        return await this.rolesRepository.save(createdRole);
      }

      async update(RoleId: number, role: Partial<Roles>): Promise<Roles> {
        const updateRole = await this.rolesRepository.findOneBy( {RoleId});
        if (!updateRole) {
          throw new Error('Role not found');
        }
        Object.assign(updateRole, role);
        updateRole.Updated_at = new Date();
        return await this.rolesRepository.save(updateRole); 
      }
}