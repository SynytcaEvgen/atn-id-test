import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  fullname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ select: false, nullable: true })
  authConfirmToken: string;

  @Column({ default: false, nullable: true })
  isVarrified: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
