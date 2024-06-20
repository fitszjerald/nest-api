import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/typeorm/entities/Category';
import { Public } from 'src/decorator/public.decorator';
@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @Get()
  @Public()
  getAll(): Promise<Category[]> {
    return this.categoryService.getAll();
  }
}
