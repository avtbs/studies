import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    RoleId: number;

    @Column()
    RoleName: string;

    @Column({ type: 'boolean', nullable: true })
    CanManageUsers: boolean;

    @Column({ type: 'boolean', nullable: true })
    CanApproveUsers: boolean;

    @Column({ type: 'boolean', nullable: true })
    CanManageQuestions: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    Create_at: Date;

    @Column()
    Created_by: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    Updated_at: Date;

    @Column()
    Updated_by: number;
}