import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>
  ){}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    return await this.brandRepository.save(createBrandDto)
  }

  findAll(): Promise<Brand[]> {
    return this.brandRepository.find()
  }

  findOne(id: number): Promise<Brand> {
    return this.brandRepository.findOneBy({ id })
  }

  async update(id: number, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    return await this.brandRepository.save(updateBrandDto)
  }

  async remove(id: number): Promise<void> {
    await this.brandRepository.delete(id)
  }
}
