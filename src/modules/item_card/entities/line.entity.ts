import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("item_card.line")
export class Line {
    @PrimaryGeneratedColumn({ name: "id", type: "int" })
    id: number;

    @Column({ name: "display_name", type: "varchar", length: 200, nullable: false })
    displayName: string;

    @Column({ name: "eng_display_name", type: "varchar", length: 200, nullable: true })
    engDisplayName: string | null;

    @Column({ name: "description", type: "text", nullable: true })
    description: string | null;

    @CreateDateColumn({ name: "created_at", type: "timestamptz", nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", type: "timestamptz", nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ name: "deleted_at", type: "timestamptz", nullable: true })
    deletedAt: Date | null;
}
