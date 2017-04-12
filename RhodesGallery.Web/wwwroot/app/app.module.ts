import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Routing
import { appRootRouters } from './app.routing';

// Services
import CategoryService from './services/category.service';
import PoemService from './services/poem.service';
import BiographyService from './services/biography.service';
import BookService from './services/book.service';

// Components
import CarouselComponent from './components/carousel.component';
import NavbarComponent from './components/navbar.component';
import CopyrightComponent from './components/copyright.component';
import CategoryComponent from './components/categories.component';
import PoemsComponent from './components/poems.component';
import PoemComponent from './components/poem.component';
import BiographyComponent from './components/biography.component';
import BooksComponent from './components/books.component';
import BookComponent from './components/book.component';
import HeaderComponent from './components/header.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        appRootRouters
    ],
    declarations: [
        AppComponent,
        CarouselComponent,
        NavbarComponent,
        CopyrightComponent,
        CategoryComponent,
        PoemsComponent,
        PoemComponent,
        BiographyComponent,
        BooksComponent,
        BookComponent,
        HeaderComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CategoryService,
        PoemService,
        BiographyService,
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }