import { IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  hash: string;
}

export class LoginDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class RefreshToken {
  @IsNotEmpty()
  refreshToken: string;
}
