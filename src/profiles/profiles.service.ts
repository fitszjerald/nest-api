import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../typeorm/entities/Profile';
import { ProfileDto } from './dtos/Profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private ProfileRepository: Repository<Profile>,
  ) {}

  getAll(): Promise<ProfileDto[]> {
    return this.ProfileRepository.find();
  }

  async create(profile: ProfileDto): Promise<any> {
    const newProfile = this.ProfileRepository.create(profile);
    return this.ProfileRepository.save(newProfile);
  }
}
