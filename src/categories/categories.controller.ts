import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';

interface Category {
  id: number;
  name: string;
}

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  
  @Get()
  getAll(): Category[] {
    return this.categoryService.getAll();
  }
}
