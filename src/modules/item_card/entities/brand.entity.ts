import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";

@Entity("item_card.brand")
export class Brand {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string;

    @Column({ name: "eng_name", type: "varchar", length: 100, nullable: true })
    engName: string | null;

    @OneToMany(() => Item, (item) => item.brand)
    items: Item[];
}
