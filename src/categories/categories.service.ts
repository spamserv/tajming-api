import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) 
    private categoryRepository: Repository<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.save(createCategoryDto)
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({id})
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.categoryRepository.save(updateCategoryDto)
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id)
  }
}
