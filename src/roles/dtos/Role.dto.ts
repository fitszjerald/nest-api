import { IsNotEmpty, IsEnum } from 'class-validator';
import { RoleEnum } from '../roles.enum';
export class RoleDto {
  @IsNotEmpty()
  name: string;

  @IsEnum(RoleEnum)
  role: RoleEnum;
}
