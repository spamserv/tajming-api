import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find()
  }

  async findOne(id: number): Promise<Category> {
    try {
      return await this.categoryRepository.findOneByOrFail({id})
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.categoryRepository.save(updateCategoryDto)
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id)
  }
}
