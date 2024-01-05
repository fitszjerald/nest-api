import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

interface Category {
  id: number;
  name: string;
}

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  
  @Get()
  getAll(): Category[] {
    return this.categoryService.getAll();
  }
}
