import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../typeorm/entities/Role';
import { RoleDto } from './dtos/Role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private RoleRepository: Repository<Role>,
  ) {}

  getAll(): Promise<RoleDto[]> {
    return this.RoleRepository.find();
  }

  async create(role: RoleDto): Promise<any> {
    const newRole = this.RoleRepository.create(role);
    return this.RoleRepository.save(newRole);
  }
}
