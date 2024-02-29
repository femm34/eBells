import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/roles/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Role])],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule { }
