import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("common.account_status")
export class AccountStatus {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string;
}
