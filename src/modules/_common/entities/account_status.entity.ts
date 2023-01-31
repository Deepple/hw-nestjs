import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../../account/entities/account.entity";

@Entity("common.account_status")
export class AccountStatus {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @OneToMany(() => Account, (account) => account.accountStatus)
    accounts: Account[];

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string;
}
