import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'services'})
export class Service {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    duration: number

    @Column({ type: 'decimal' })
    price: number

    @Column({ type: 'date' })
    created_at: string

    @Column({ type: 'date' })
    deleted_at: string

    @ManyToOne(type => Category)
    @JoinColumn({ 
        name: 'category_id',
        
    })
    category: Category
}
