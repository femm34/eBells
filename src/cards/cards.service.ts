import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) { }

  async create(createCardDto: CreateCardDto) {
    const newCard = this.cardRepository.create(createCardDto)
    return await this.cardRepository.save(newCard);
  }

  async findAll() {
    return await this.cardRepository.find({ relations: ['user', 'user.role'] })
  }

  async findOne(id: number) {
    return await this.cardRepository.findOne({ where: { id: id }, relations: ['user', 'user.role'] })
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    await this.cardRepository.update(id, updateCardDto)
    return await this.cardRepository.findOne({ where: { id: id }, relations: ['user'] })
  }

  async remove(id: number) {
    return await this.cardRepository.delete(id)
  }
}
