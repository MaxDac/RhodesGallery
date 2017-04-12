import { Component } from '@angular/core';

import BiographyService from '../services/biography.service';

@Component({
    selector: 'biography',
    templateUrl: './biography.component.html'
})
export default class BiographyComponent {
    biography: string;

    constructor(private proxy: BiographyService) {
        this.biography = proxy.getBiography();
    }
}