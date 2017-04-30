"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var base_service_1 = require("../base/base.service");
var PoemService = (function (_super) {
    __extends(PoemService, _super);
    function PoemService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoemService.prototype.getItems = function () {
        return poems;
    };
    PoemService.prototype.getByCategoryId = function (categoryId) {
        return poems.filter(function (p) { return p.categoryId === categoryId; });
    };
    PoemService.prototype.getItemById = function (id) {
        return poems.find(function (c) { return c.id === id; });
    };
    return PoemService;
}(base_service_1.BaseService));
PoemService = __decorate([
    core_1.Injectable()
], PoemService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PoemService;
var poems = [
    { id: 1, categoryId: 1, title: "First title", text: "First text" },
    { id: 2, categoryId: 1, title: "First title", text: "First text" },
    { id: 3, categoryId: 1, title: "First title", text: "First text" },
    { id: 4, categoryId: 2, title: "First title", text: "First text" },
    { id: 5, categoryId: 2, title: "First title", text: "First text" },
    { id: 6, categoryId: 3, title: "First title", text: "First text" },
    { id: 7, categoryId: 4, title: "First title", text: "First text" },
    { id: 8, categoryId: 4, title: "First title", text: "First text" },
    { id: 9, categoryId: 4, title: "First title", text: "First text" }
];
//# sourceMappingURL=poem.service.js.map