import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./brand.entity";
import { Item } from "./item.entity";
import { Line } from "./line.entity";
import { Account } from "../../account/entities/account.entity";
import { ModelUpdateLog } from "../../log/entities/model_update.entity";

@Entity("item_card.model")
export class Model {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @ManyToOne(() => Item, (item) => item.models)
    @JoinColumn({ name: "item_id" })
    item: Item;

    @ManyToOne(() => Line, (line) => line.models)
    @JoinColumn({ name: "line_id" })
    line: Line;

    @ManyToOne(() => Account, (account) => account.models)
    @JoinColumn({ name: "account_id" })
    account: Account;

    @OneToMany(() => ModelUpdateLog, (modelUpdate) => modelUpdate.model)
    modelUpdate: ModelUpdateLog[];

    @Column({ name: "model_code", type: "varchar", length: 200, nullable: false })
    modelCode: string;

    @Column({ name: "thumbnail_image", type: "text", nullable: false })
    thumbnailImage: string;

    @Column({ name: "description", type: "text", nullable: true })
    description: string | null;

    @Column({ name: "is_deleted", type: "boolean", nullable: true })
    isDeleted: boolean | null;

    @CreateDateColumn({ name: "created_at", type: "timestamptz", nullable: false })
    createdAt: Date;

    @DeleteDateColumn({ name: "deleted_at", type: "timestamptz", nullable: true })
    deletedAt: Date | null;
}
