import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BaseService } from '../base/base.service';

import Poem from '../models/poem';

@Injectable()
export default class PoemService extends BaseService<Poem> {
    getItems(): Poem[] {
        return poems;
    }

    getByCategoryId(categoryId: number): Poem[] {
        return poems.filter(p => p.categoryId === categoryId);
    }

    getItemById(id: number): Poem {
        return poems.find(c => c.id === id);
    }
}

const poems: Poem[] = [
    { id: 1, categoryId: 1, title: "First title", text: "First text" },
    { id: 2, categoryId: 1, title: "First title", text: "First text" },
    { id: 3, categoryId: 1, title: "First title", text: "First text" },
    { id: 4, categoryId: 2, title: "First title", text: "First text" },
    { id: 5, categoryId: 2, title: "First title", text: "First text" },
    { id: 6, categoryId: 3, title: "First title", text: "First text" },
    { id: 7, categoryId: 4, title: "First title", text: "First text" },
    { id: 8, categoryId: 4, title: "First title", text: "First text" },
    { id: 9, categoryId: 4, title: "First title", text: "First text" }
];