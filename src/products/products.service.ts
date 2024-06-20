import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { Category } from '../typeorm/entities/Category';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
  ) {}
  getAll(): Promise<Product[]> {
    return this.ProductRepository.find({ relations: ['categories'] });
  }

  async create(data: CreateProductDto): Promise<Product> {
    data.categories = await this.CategoryRepository.findBy({
      id: In(data.categoryIds),
    });
    const newProduct = await this.ProductRepository.create(data);
    return this.ProductRepository.save(newProduct);
  }

  async getById(id: number): Promise<Product> {
    return this.ProductRepository.findOne({
      where: { id },
      relations: ['categories'],
    });
  }
}
