import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  
  constructor(
    @InjectRepository(Service) 
    private serviceRepository: Repository<Service>
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    return await this.serviceRepository.save(createServiceDto)
  }

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find()
  }

  async findOne(id: number): Promise<Service> {
    return await this.serviceRepository.findOneBy({id})
  }

  async update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service> {
    return await this.serviceRepository.save(updateServiceDto)
  }

  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id)
  }
}
