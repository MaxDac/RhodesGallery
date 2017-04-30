"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var State;
(function (State) {
    State[State["Home"] = 0] = "Home";
    State[State["Categories"] = 1] = "Categories";
    State[State["Biography"] = 2] = "Biography";
    State[State["Books"] = 3] = "Books";
})(State || (State = {}));
var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.state = State.Home;
    }
    NavbarComponent.prototype.goToHome = function () {
        this.state = State.Home;
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.goToCategories = function () {
        this.state = State.Categories;
        this.router.navigate(['/categories']);
    };
    NavbarComponent.prototype.goToBiography = function () {
        this.state = State.Biography;
        this.router.navigate(['/biography']);
    };
    NavbarComponent.prototype.goToBooks = function () {
        this.state = State.Books;
        this.router.navigate(['/books']);
    };
    Object.defineProperty(NavbarComponent.prototype, "isInHome", {
        get: function () {
            return this.state === State.Home;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "isInCategories", {
        get: function () {
            return this.state === State.Categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "isInBiography", {
        get: function () {
            return this.state === State.Biography;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "isInBooks", {
        get: function () {
            return this.state === State.Books;
        },
        enumerable: true,
        configurable: true
    });
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'home-navbar',
        templateUrl: './navbar.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], NavbarComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map