import { IsNotEmpty, IsEmail } from 'class-validator';

export class ProfileDto {
	@IsNotEmpty()
	firstName: string;

  @IsNotEmpty()
	lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

}
