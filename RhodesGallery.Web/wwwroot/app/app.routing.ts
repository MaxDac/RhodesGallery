import { Routes, RouterModule } from '@angular/router';

import CarouselComponent from './components/carousel.component';
import CategoriesComponent from './components/categories.component';
import PoemsComponent from './components/poems.component';
import PoemComponent from './components/poem.component';
import BiographyComponent from './components/biography.component';
import BooksComponent from './components/books.component';

const routes: Routes = [
    { path: '', component: CarouselComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'poems/:id', component: PoemsComponent },
    { path: 'poem/:id', component: PoemComponent },
    { path: 'biography', component: BiographyComponent },
    { path: 'books', component: BooksComponent },
    // Admin module invoked lazily
    { path: 'admin', loadChildren: 'app/secured-components/secured.module' }
];

export const appRootRouters = RouterModule.forRoot(routes);