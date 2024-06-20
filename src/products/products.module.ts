import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from 'src/typeorm/entities/Product';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/entities/Category';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
