import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Portfolio } from './entities/portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepository: Repository<Portfolio>,
  ) { }
  async create(createPortfolioDto: CreatePortfolioDto) {
    const newPortfolioItem = this.portfolioRepository.create(createPortfolioDto)
    return await this.portfolioRepository.save(newPortfolioItem);
  }

  async findAll() {
    return await this.portfolioRepository.find();
  }

  async findOne(id: number) {
    return await this.portfolioRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
    await this.portfolioRepository.update(id, updatePortfolioDto)
    return await this.portfolioRepository.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    return await this.portfolioRepository.delete(id)
  }
}
