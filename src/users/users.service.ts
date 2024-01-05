import { Injectable } from '@nestjs/common';
import users from './user.json';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable()
export class UsersService {
  getAll(): User[] {
    return users;
  }
}
