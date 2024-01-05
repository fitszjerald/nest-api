import { IsNotEmpty } from 'class-validator';

export class Product {
  id: number;

  @IsNotEmpty()
  name: string;
}
