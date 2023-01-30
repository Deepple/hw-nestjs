import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./brand.entity";
import { Category } from "../../common/entities/category.entity";

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

    @Column({ name: "display_name", type: "varchar", length: 200 })
    displayName: string;

    @Column({ name: "eng_display_name", type: "varchar", length: 200 })
    engDisplayName: string;

    @CreateDateColumn({ name: "created_at", type: "timestamptz" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", type: "timestamptz" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at", type: "timestamptz" })
    deletedAt: Date;
}
