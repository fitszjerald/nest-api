import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDto } from './dtos/Role.dto';
import { Roles } from 'src/decorator/role.decorator';
import { ApiTags } from '@nestjs/swagger';
import { RoleEnum } from './roles.enum';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Get()
  @Roles(RoleEnum.ADMIN)
  getAll(): Promise<RoleDto[]> {
    const roles = this.roleService.getAll();
    return roles;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() role: RoleDto): Promise<RoleDto> {
    const newRole = this.roleService.create(role);
    return newRole;
  }
}
