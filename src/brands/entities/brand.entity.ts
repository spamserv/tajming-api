import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'brands'})
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string;
}


