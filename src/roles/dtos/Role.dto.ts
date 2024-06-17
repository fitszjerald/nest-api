import { IsNotEmpty, IsEnum } from 'class-validator';
import { Roles } from '../roles.enum';
export class RoleDto {
  @IsNotEmpty()
  name: string;

  @IsEnum(Roles)
  role: Roles;
}
