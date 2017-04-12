import { Component } from '@angular/core';

import BookService from '../services/book.service';
import Book from '../models/book';

@Component({
    selector: 'books',
    templateUrl: './books.component.html'
})
export default class BooksComponent {
    books: Book[];

    constructor(private proxy: BookService) {
        this.books = proxy.getItems();
    }
}