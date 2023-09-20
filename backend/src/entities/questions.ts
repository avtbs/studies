import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  QuestionId: number;

  @Column({length: 100})
  DescrQuest: string;

  @Column({ type: 'json'})
  Answer: Record<string, any>;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  Created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  Updated_at: Date;
}