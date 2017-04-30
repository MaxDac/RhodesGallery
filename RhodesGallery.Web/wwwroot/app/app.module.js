"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
// Routing
var app_routing_1 = require("./app.routing");
// Services
var category_service_1 = require("./services/category.service");
var poem_service_1 = require("./services/poem.service");
var biography_service_1 = require("./services/biography.service");
var book_service_1 = require("./services/book.service");
// Components
var carousel_component_1 = require("./components/carousel.component");
var navbar_component_1 = require("./components/navbar.component");
var copyright_component_1 = require("./components/copyright.component");
var categories_component_1 = require("./components/categories.component");
var poems_component_1 = require("./components/poems.component");
var poem_component_1 = require("./components/poem.component");
var biography_component_1 = require("./components/biography.component");
var books_component_1 = require("./components/books.component");
var book_component_1 = require("./components/book.component");
var header_component_1 = require("./components/header.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_1.appRootRouters
        ],
        declarations: [
            app_component_1.AppComponent,
            carousel_component_1.default,
            navbar_component_1.default,
            copyright_component_1.default,
            categories_component_1.default,
            poems_component_1.default,
            poem_component_1.default,
            biography_component_1.default,
            books_component_1.default,
            book_component_1.default,
            header_component_1.default
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            category_service_1.default,
            poem_service_1.default,
            biography_service_1.default,
            book_service_1.default
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map