import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("item_card.brand")
export class Brand {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string;
}
