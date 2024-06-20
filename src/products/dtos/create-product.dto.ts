import { ArrayNotEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { Category } from 'src/typeorm/entities/Category';

export class CreateProductDto {
  @ArrayNotEmpty()
  categoryIds: number[];

  @IsOptional()
  categories: Category[];

  @IsNotEmpty()
  name: string;
}
