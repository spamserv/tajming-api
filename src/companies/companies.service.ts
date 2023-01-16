import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyService: Repository<Company>
  ){}

  async create(createCompanyDto: CreateCompanyDto) {
    return this.companyService.save(createCompanyDto)
  }

  async findAll() {
    return this.companyService.find()
  }

  async findOne(id: number) {
    try {
      return this.companyService.find(
        {
          where: {id}, 
          relations: ['companyImages', 'city'],
          select: {
            id: true,
            coverImageUrl: true,
            name: true,
            description: true,
            formattedAddress: true,
            streetAddress: true,
            zip: true,
            email: true,
            phone: true,
            facebookUrl: true,
            twitterUrl: true,
            instagramUrl: true,
            isApproved: true,
            isAutoApprovalEnabled: true,
            isHidden: true,
            isFeatured: true,
            createdAt: true,
            companyImages: {
              url: true
            },
            city: {
              name: true
            }
          },
        })

      this.companyService.createQueryBuilder()
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.save(updateCompanyDto)
  }

  async remove(id: number) {
    return this.companyService.delete(id)
  }
}
