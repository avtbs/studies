import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Roles } from './roles';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  UserId: number;

  @Column({length: 50})
  UserName: string;

  @Column({length: 50})
  Address: string;

  @Column({length: 50})
  Email: string;

  @Column('decimal')
  Telephone: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  Created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  Updated_at: Date;

  @ManyToOne(() => Roles)
  RoleId: Roles;
}