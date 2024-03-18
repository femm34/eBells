import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { Portfolio } from './entities/portfolio.entity';
import { Role } from 'src/roles/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio, Role])],
  controllers: [PortfolioController],
  providers: [PortfolioService, CloudinaryService],
})
export class PortfolioModule { }
