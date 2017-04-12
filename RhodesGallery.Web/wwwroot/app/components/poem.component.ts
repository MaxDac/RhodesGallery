import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Poem from '../models/poem';
import PoemService from '../services/poem.service';

@Component({
    selector: 'poem',
    templateUrl: './poem.component.html',
    styleUrls: ['./poem.component.css']
})
export default class PoemComponent {
    poem: Poem;

    constructor(private proxy: PoemService, private router: ActivatedRoute) {
        let poemId = parseInt(router.snapshot.params['id']);
        if (poemId)
            this.poem = proxy.getItemById(poemId);
    }
}