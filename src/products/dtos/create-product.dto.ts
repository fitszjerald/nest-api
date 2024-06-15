import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  id: number;

  @IsNotEmpty()
  name: string;
}
