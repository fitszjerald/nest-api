import { Injectable } from '@nestjs/common';
import products from './product.json';
import { Product } from './dtos/Product.dto';

@Injectable()
export class ProductsService {
  getAll(): Product[] {
    return products;
  }
}
