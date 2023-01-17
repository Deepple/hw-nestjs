import {
  Column,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account.entity";

@Entity({ name: "account_type" })
export class AccountType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: "text" })
  description: string;

  @OneToMany(() => Account, (account) => account.account_type)
  accounts: Account[];
}
