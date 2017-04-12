import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BaseService } from '../base/base.service';
import Book from '../models/book';

@Injectable()
export default class BookService extends BaseService<Book> {
    constructor(protected proxy: HttpModule) {
        super();
    }

    getItems(): Book[] {
        return books;
    }

    getItemById(id: number): Book {
        return books.find(b => b.id === id);
    }
}

const books: Book[] = [
    { id: 1, title: 'Riflessi 8', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51ZKo3AchUL.jpg', bookUrl: 'https://www.amazon.it/Riflessi-SERGIO-R-BATTISTI-ARCHER-ebook/dp/B00QYB94II/ref=sr_1_4?ie=UTF8&qid=1492008460&sr=8-4&keywords=massimiliano+d%27acunzo' },
    { id: 2, title: 'Prospettive 11', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51Y9NUVn6RL.jpg', bookUrl: 'https://www.amazon.it/Prospettive-11-VINCENZO-BILLECI-ebook/dp/B00W0LF8T0/ref=sr_1_3?ie=UTF8&qid=1492008460&sr=8-3&keywords=massimiliano+d%27acunzo' },
    { id: 3, title: 'Vibrazioni 16', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/518QfU%2BCNeL.jpg', bookUrl: 'https://www.amazon.it/Vibrazioni-16-FRANCESCO-CAL%C3%92-ebook/dp/B00XLZ3CO2/ref=sr_1_1?ie=UTF8&qid=1492008460&sr=8-1&keywords=massimiliano+d%27acunzo' },
    { id: 4, title: 'Approdi 15 - Il Buio del Crepuscolo', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51y0ylozHtL._SY346_.jpg', bookUrl: 'https://www.amazon.it/Approdi-15-Buio-del-Crepuscolo-ebook/dp/B019A5S3BI/ref=sr_1_2?ie=UTF8&qid=1492008460&sr=8-2&keywords=massimiliano+d%27acunzo' },
];