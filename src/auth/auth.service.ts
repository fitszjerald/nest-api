import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/Auth.dto';
import { Token } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(dto): Promise<any> {
    const hash = await this.hashData(dto.password);
    const user = await this.usersService.create({
      username: dto.username,
      hash,
    });
    return user;
  }

  async login(dto): Promise<Token> {
    const user = await this.validateUser(dto);
    const tokens = await this.getToken(user.id, user.username);
    return tokens;
  }
  async getRefreshToken(token) {
    const user = await this.jwtService.verifyAsync(token.refreshToken, {
      secret: 'at-secret',
    });
    const tokens = this.getToken(user.id, user.username);
    return tokens;
  }

  private hashData(data) {
    return bcrypt.hash(data, 10);
  }

  private async getToken(userId: number, username: string): Promise<Token> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username: username,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username: username,
        },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 15,
        },
      ),
    ]);
    return {
      accessToken: at,
      refreshToken: rt,
    };
  }

  async validateUser(user: LoginDto): Promise<any> {
    const findUser = await this.usersService.findOne(user.username);
    const isEqual = await bcrypt.compareSync(user.password, findUser.hash);
    if (!isEqual) {
      throw new UnauthorizedException('password does not match');
    }
    if (findUser && isEqual) {
      return findUser;
    }
    return null;
  }
}
