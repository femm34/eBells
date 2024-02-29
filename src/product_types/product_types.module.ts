import { Module } from '@nestjs/common';
import { ProductTypesService } from './product_types.service';
import { ProductTypesController } from './product_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from './entities/product_type.entity';
import { Role } from 'src/roles/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType, Role])],
  controllers: [ProductTypesController],
  providers: [ProductTypesService],
})
export class ProductTypesModule { }
