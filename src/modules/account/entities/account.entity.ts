import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AccountStatus } from "./account-status.entity";
import { AccountType } from "./account-type.entity";

@Entity({ name: "account" })
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @ManyToOne(() => AccountStatus, (account_status) => account_status.accounts)
  account_status: AccountStatus;

  @ManyToOne(() => AccountType, (account_type) => account_type.accounts)
  account_type: AccountType;

  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;

  @DeleteDateColumn({ type: "timestamptz" })
  deleted_at: Date;
}
