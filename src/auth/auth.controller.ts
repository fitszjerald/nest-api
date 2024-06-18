import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RefreshToken } from './dtos/Auth.dto';
import { Token } from './types';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';

@ApiTags('auth')
@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() user: LoginDto): Promise<Token> {
    const tokens = this.authService.login(user);
    return tokens;
  }

  @Post('signup')
  @UsePipes(new ValidationPipe())
  signup(@Body() user: LoginDto): Promise<LoginDto> {
    const users = this.authService.signup(user);
    return users;
  }

  @Post('refresh')
  @UsePipes(new ValidationPipe())
  refresh(@Body() token: RefreshToken): Promise<Token> {
    const tokens = this.authService.getRefreshToken(token);
    return tokens;
  }
}
