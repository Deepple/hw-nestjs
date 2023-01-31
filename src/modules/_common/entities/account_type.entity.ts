import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../../account/entities/account.entity";

@Entity("common.account_type")
export class AccountType {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @OneToMany(() => Account, (account) => account.accountType)
    accounts: Account[];

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string;
}
