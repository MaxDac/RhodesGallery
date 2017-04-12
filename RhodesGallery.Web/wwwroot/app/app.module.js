"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
// Routing
var app_routing_1 = require("./app.routing");
// Components
var carousel_component_1 = require("./components/carousel.component");
var navbar_component_1 = require("./components/navbar.component");
var copyright_component_1 = require("./components/copyright.component");
// Services
var category_service_1 = require("./services/category.service");
var poem_service_1 = require("./services/poem.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.appRootRouters
        ],
        declarations: [
            app_component_1.AppComponent,
            carousel_component_1.default,
            navbar_component_1.default,
            copyright_component_1.default
        ],
        providers: [
            category_service_1.default,
            poem_service_1.default
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map