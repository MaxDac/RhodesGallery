import { Component } from '@angular/core';
import { Router } from '@angular/router';

import CategoryService from '../services/category.service';
import Category from '../models/category';

@Component({
    selector: 'categories',
    templateUrl: './categories.component.html'
})
export default class CategoriesComponent {
    categories: Category[];

    constructor(private proxy: CategoryService, private router: Router) {
        this.categories = proxy.getItems();
    }

    presentPoems(categoryId: number) {
        this.router.navigate(['/poems', categoryId]);
    }
}