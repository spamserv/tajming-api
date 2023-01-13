import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { CitiesModule } from './cities/cities.module';
import { CompaniesModule } from './companies/companies.module';
import { ServicesModule } from './services/services.module';
import { StaffModule } from './staff/staff.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AppointmentsModule } from './appointments/appointments.module';

import { Brand } from './brands/entities/brand.entity';
import { Category } from './categories/entities/category.entity';
import { City } from './cities/entities/city.entity';
import { DatabaseConfigService } from './database/database-config.service';

@Module({
  imports: [
    CategoriesModule, 
    CitiesModule, 
    CompaniesModule, 
    ServicesModule, 
    StaffModule, 
    FeedbackModule, 
    AppointmentsModule, 
    BrandsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
      inject: [DatabaseConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
