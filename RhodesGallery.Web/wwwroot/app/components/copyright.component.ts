import { Component } from '@angular/core';

import Category from '../models/category';

@Component({
    selector: 'home-copyright',
    templateUrl: './copyright.component.html',
    styleUrls: ['./copyright.component.css']
})
export default class CopyrightComponent {
    categories: Category[];
}