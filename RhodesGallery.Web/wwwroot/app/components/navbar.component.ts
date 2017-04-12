import { Component } from '@angular/core';
import { Router } from '@angular/router';

enum State {
    Home,
    Categories,
    Biography,
    Books
}

@Component({
    selector: 'home-navbar',
    templateUrl: './navbar.component.html'
})
export default class NavbarComponent {
    state: State;

    constructor(private router: Router) {
        this.state = State.Home;
    }

    goToHome() {
        this.state = State.Home;
        this.router.navigate(['/']);
    }

    goToCategories() {
        this.state = State.Categories;
        this.router.navigate(['/categories']);
    }

    goToBiography() {
        this.state = State.Biography;
        this.router.navigate(['/biography']);
    }

    goToBooks() {
        this.state = State.Books;
        this.router.navigate(['/books']);
    }

    get isInHome(): boolean {
        return this.state === State.Home;
    }

    get isInCategories(): boolean {
        return this.state === State.Categories;
    }

    get isInBiography(): boolean {
        return this.state === State.Biography;
    }

    get isInBooks(): boolean {
        return this.state === State.Books;
    }
}