import {
  Column,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity({ name: "user_status" })
export class UserStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: "text" })
  description: string;

  @OneToMany(() => User, (user) => user.user_status)
  users: User[];
}
