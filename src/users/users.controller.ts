import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/User.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll(): Promise<UserDto[]> {
    const users = this.userService.getAll();
    return users;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() user: UserDto): Promise<UserDto> {
    const newUser = this.userService.create(user);
    return newUser;
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UserDto) {
    const updateUser = this.userService.update(id, user);
    return updateUser
  }
}
