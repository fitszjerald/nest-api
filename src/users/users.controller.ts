import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }
}
