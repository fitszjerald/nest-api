import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/User.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll(): Promise<UserDto[]> {
    const users = this.userService.getAll();
    return users;
  }

  @Post()
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
