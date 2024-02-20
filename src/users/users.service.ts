import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find()
  }
  async findUserToLogin(username: string) {
    return await this.userRepository.find({ where: { username: username } })
  }
  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto)
    return await this.userRepository.findOne({ where: { id: id } })
  }

  async remove(id: number) {
    return await this.userRepository.delete(id)
  }
}
