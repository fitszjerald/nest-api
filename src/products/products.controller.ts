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
import { Product } from './dtos/Product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() productData: Product) {
    console.log(productData);
    return {};
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }
}
