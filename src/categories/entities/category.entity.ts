import { Service } from "src/services/entities/service.entity";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";

@Entity({name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
