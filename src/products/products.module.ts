import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Role } from 'src/roles/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Role])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
