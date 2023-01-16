import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity('company_images')
export class CompanyImage {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'img'})
    url: string

    @ManyToOne(type => Company)
    @JoinColumn({
        name: 'company_id'
    })
    company: Company
}
