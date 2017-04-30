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
var book_service_1 = require("../services/book.service");
var BooksComponent = (function () {
    function BooksComponent(proxy) {
        this.proxy = proxy;
        this.books = proxy.getItems();
    }
    return BooksComponent;
}());
BooksComponent = __decorate([
    core_1.Component({
        selector: 'books',
        templateUrl: './books.component.html'
    }),
    __metadata("design:paramtypes", [book_service_1.default])
], BooksComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BooksComponent;
//# sourceMappingURL=books.component.js.map