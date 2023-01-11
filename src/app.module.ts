import { Module } from '@nestjs/common';
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

@Module({
  imports: [CategoriesModule, CitiesModule, CompaniesModule, ServicesModule, StaffModule, FeedbackModule, AppointmentsModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
