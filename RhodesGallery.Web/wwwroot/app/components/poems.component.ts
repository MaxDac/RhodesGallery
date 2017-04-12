import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import PoemService from '../services/poem.service';
import Poem from '../models/poem';

@Component({
    selector: 'poems',
    templateUrl: './poems.component.html'
})
export default class PoemsComponent {
    poems: Poem[];

    constructor(private proxy: PoemService, private route: ActivatedRoute, private router: Router) {
        let categoryId = parseInt(route.snapshot.params['id']);
        if (categoryId)
            this.poems = proxy.getByCategoryId(categoryId);
    }

    goToPoem(poemId: number) {
        this.router.navigate(['/poem', poemId]);
    }
}