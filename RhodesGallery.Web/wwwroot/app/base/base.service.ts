import { HttpModule } from '@angular/http';

export abstract class BaseService<T> {
    abstract getItems(): T[];
    abstract getItemById(id: number): T;
}