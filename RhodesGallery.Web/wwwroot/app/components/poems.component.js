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
var poem_service_1 = require("../services/poem.service");
var PoemsComponent = (function () {
    function PoemsComponent(proxy, route, router) {
        this.proxy = proxy;
        this.route = route;
        this.router = router;
        var categoryId = parseInt(route.snapshot.params['id']);
        if (categoryId)
            this.poems = proxy.getByCategoryId(categoryId);
    }
    PoemsComponent.prototype.goToPoem = function (poemId) {
        this.router.navigate(['/poem', poemId]);
    };
    return PoemsComponent;
}());
PoemsComponent = __decorate([
    core_1.Component({
        selector: 'poems',
        templateUrl: './poems.component.html'
    }),
    __metadata("design:paramtypes", [poem_service_1.default, router_1.ActivatedRoute, router_1.Router])
], PoemsComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PoemsComponent;
//# sourceMappingURL=poems.component.js.map