import { Injectable } from '@nestjs/common';
import categories from './category.json';

interface Category {
  id: number;
  name: string;
}

@Injectable()
export class CategoriesService {
  getAll(): Category[] {
    return categories;
  }
}
