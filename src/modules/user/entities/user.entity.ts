import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserStatus } from "./user_status.entity";
import { UserType } from "./user_type.entity";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @ManyToOne(() => UserStatus, (user_status) => user_status.users)
  user_status: UserStatus;

  @ManyToOne(() => UserType, (user_type) => user_type.users)
  user_type: UserType;

  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;

  @DeleteDateColumn({ type: "timestamptz" })
  deleted_at: Date;
}
