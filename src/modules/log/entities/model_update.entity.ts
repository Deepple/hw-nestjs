import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "../../item_card/entities/model.entity";
import { Account } from "../../account/entities/account.entity";

@Entity("log.model_update_log")
export class ModelUpdateLog {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @ManyToOne(() => Model, (model) => model.modelUpdate)
    @JoinColumn({ name: "model_id" })
    model: Model;

    @ManyToOne(() => Account, (account) => account.modelUpdate)
    @JoinColumn({ name: "account_id" })
    account: Account;

    @Column({ name: "description", type: "text", nullable: true })
    description: string | null;

    @CreateDateColumn({ name: "created_at", type: "timestamptz", nullable: false })
    createdAt: Date;
}
