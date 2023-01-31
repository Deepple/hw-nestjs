import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { AccountStatus } from "../../_common/entities/account_status.entity";
import { AccountType } from "../../_common/entities/account_type.entity";
import { Model } from "../../item_card/entities/model.entity";
import { ModelUpdateLog } from "../../log/entities/model_update.entity";

@Entity("account.account")
export class Account {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @ManyToOne(() => AccountStatus, (accountStatus) => accountStatus.accounts)
    @JoinColumn({ name: "account_status_id" })
    accountStatus: AccountStatus;

    @ManyToOne(() => AccountType, (accountType) => accountType.accounts)
    @JoinColumn({ name: "account_type_id" })
    accountType: AccountType;

    @OneToMany(() => Model, (model) => model.account)
    models: Model[];

    @OneToMany(() => ModelUpdateLog, (modelUpdate) => modelUpdate.model)
    modelUpdate: ModelUpdateLog[];

    @Column({ name: "email", type: "varchar", length: 100, nullable: false })
    email: string;

    @Column({ name: "password", type: "varchar", length: 100, nullable: false })
    password: string;

    @CreateDateColumn({ name: "created_at", type: "timestamptz", nullable: false })
    createdAt: Date;

    @DeleteDateColumn({ name: "deleted_at", type: "timestamptz", nullable: true })
    deletedAt: Date | null;

    @Column({ name: "last_password_changed_at", type: "timestamptz", nullable: true })
    lastPasswordChangedAt: Date | null;
}
