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
var CategoryService = (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryService.prototype.getItems = function () {
        return categories;
    };
    CategoryService.prototype.getItemById = function (id) {
        return categories.find(function (c) { return c.id === id; });
    };
    return CategoryService;
}(base_service_1.BaseService));
CategoryService = __decorate([
    core_1.Injectable()
], CategoryService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoryService;
var categories = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id: 4, name: 'Fourth' }
];
//# sourceMappingURL=category.service.js.map