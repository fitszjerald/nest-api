import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private ProductRepository: Repository<Product>,
  ) {}
  getAll(): Promise<Product[]> {
    return this.ProductRepository.find({ relations: ['categories'] });
  }

  async create(data: CreateProductDto): Promise<Product> {
    const newProduct = await this.ProductRepository.create(data);
    return this.ProductRepository.save(newProduct);
  }
}
