import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UserDto } from './dtos/User.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<UserDto[]> {
    return this.userRepository.find({
      relations: ['profile', 'role'],
    });
  }

  async create(user: UserDto): Promise<any> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  update(id: number, user: UserDto) {
    return this.userRepository.update({ id }, { ...user });
  }
  async findOne(username: string): Promise<UserDto> {
    return this.userRepository.findOne({ where: { username } });
  }
}
