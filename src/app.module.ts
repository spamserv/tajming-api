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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Brand],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
