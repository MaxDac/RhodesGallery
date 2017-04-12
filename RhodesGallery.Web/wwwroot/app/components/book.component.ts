import { Component, Input } from '@angular/core';

import Book from '../models/book';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export default class BookComponent {
    @Input() book: Book;

    constructor() {}

    goToAmazonPage() {
        var win = window.open(this.book.bookUrl, '_blank');
        win.focus();
    }
}