import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./brand.entity";
import { Category } from "../../_common/entities/category.entity";
import { Model } from "./model.entity";

@Entity("item_card.item")
export class Item {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @ManyToOne(() => Brand, (brand) => brand.items)
    @JoinColumn({ name: "brand_id" })
    brand: Brand;

    @ManyToOne(() => Category, (category) => category.items)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @OneToMany(() => Model, (model) => model.item)
    models: Model[];

    @Column({ name: "display_name", type: "varchar", length: 200, nullable: false })
    displayName: string;

    @Column({ name: "eng_display_name", type: "varchar", length: 200, nullable: true })
    engDisplayName: string | null;

    @CreateDateColumn({ name: "created_at", type: "timestamptz", nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", type: "timestamptz", nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ name: "deleted_at", type: "timestamptz", nullable: true })
    deletedAt: Date | null;
}
