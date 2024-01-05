import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import users from './user.json';

interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  async create(user: UserDto): Promise<UserDto> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  update(id: number, user: UserDto) {
    return this.userRepository.update({ id }, { ...user });
  }
}
