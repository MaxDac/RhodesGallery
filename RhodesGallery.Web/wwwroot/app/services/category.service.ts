import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BaseService } from '../base/base.service';

import Category from '../models/category';

@Injectable()
export default class CategoryService extends BaseService<Category> {
    getItems(): Category[] {
        return categories;
    }

    getItemById(id: number): Category {
        return categories.find(c => c.id === id);
    }
}

const categories: Category[] = [
    { id: 1, name: 'Primi componimenti' },
    { id: 2, name: 'Età adulta' },
    { id: 3, name: 'Pitu linda' },
    { id: 4, name: 'Pitu hermosa' }
];