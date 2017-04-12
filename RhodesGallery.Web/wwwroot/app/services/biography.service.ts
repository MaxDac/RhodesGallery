import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export default class BiographyService {
    constructor(private proxy: HttpModule) {}

    getBiography(): string {
        return "This is the biography of the ciutaglione.";
    }
}