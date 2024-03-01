import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { Material } from './entities/material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Material])],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule { }
