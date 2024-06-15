import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfileDto } from './dtos/Profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get()
  getAll(): Promise<ProfileDto[]> {
    const profiles = this.profileService.getAll();
    return profiles;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() profile: ProfileDto): Promise<ProfileDto> {
    const newProfile = this.profileService.create(profile);
    return newProfile;
  }
}
