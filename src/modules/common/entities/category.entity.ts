import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "../../item_card/entities/item.entity";

@Entity("common.category")
export class Category {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string;

    @OneToMany(() => Item, (item) => item.brand)
    items: Item[];
}
