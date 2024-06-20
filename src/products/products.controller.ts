import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from '../typeorm/entities/Product';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';
@Public()
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getAll(): Promise<Product[]> {
    const products = this.productService.getAll();
    return products;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() productData: CreateProductDto): Promise<Product> {
    const newProduct = this.productService.create(productData);
    return newProduct;
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productService.getById(id);
  }
}
