import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City) 
    private cityRepository: Repository<City>
  ){}

  async create(createCityDto: CreateCityDto): Promise<City> {
    return await this.cityRepository.save(createCityDto)
  }

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  findOne(id: number): Promise<City> {
    return this.cityRepository.findOneBy({ id })
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    return await this.cityRepository.save(updateCityDto)
  }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id)
  }
}
