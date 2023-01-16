import { IsInt, Max, Min } from "class-validator";
import { City } from "src/cities/entities/city.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyImage } from "./company-image.entity";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: number


    @ManyToOne(type => City)
    @JoinColumn({ 
        name: 'city_id',
    })
    city: City

    @Column({ name: 'cover_img'})
    coverImageUrl: string
    
    @Column()
    name: string

    @Column()
    description: string

    @Column({ name:'address_formatted'})
    formattedAddress: string

    @Column({ name:'street_address'})
    streetAddress: string

    @Column()
    @IsInt()
    @Min(10000)
    @Max(99999)
    zip: number

    @Column()
    email: string

    @Column({ name:'tel'})
    phone: string

    @Column({ name:'facebook'})
    facebookUrl: string

    @Column({ name:'twitter'})
    twitterUrl: string

    @Column({ name:'instagram'})
    instagramUrl: string

    @Column({ name:'is_approved'})
    isApproved: boolean

    @Column({ name:'auto_approval'})
    isAutoApprovalEnabled: boolean

    @Column({ name:'hidden'})
    isHidden: boolean

    @Column({ name:'featured'})
    isFeatured: boolean

    @Column({type: 'date', name: 'created_at'})
    createdAt: string

    @Column({type: 'date', name: 'created_at'})
    deletedAt: string

    @OneToMany(type => CompanyImage, image => image.company)
    companyImages: CompanyImage
}
