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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var base_service_1 = require("../base/base.service");
var BookService = (function (_super) {
    __extends(BookService, _super);
    function BookService(proxy) {
        var _this = _super.call(this) || this;
        _this.proxy = proxy;
        return _this;
    }
    BookService.prototype.getItems = function () {
        return books;
    };
    BookService.prototype.getItemById = function (id) {
        return books.find(function (b) { return b.id === id; });
    };
    return BookService;
}(base_service_1.BaseService));
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpModule])
], BookService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookService;
var books = [
    { id: 1, title: 'Riflessi 8', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51ZKo3AchUL.jpg', bookUrl: 'https://www.amazon.it/Riflessi-SERGIO-R-BATTISTI-ARCHER-ebook/dp/B00QYB94II/ref=sr_1_4?ie=UTF8&qid=1492008460&sr=8-4&keywords=massimiliano+d%27acunzo' },
    { id: 2, title: 'Prospettive 11', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51Y9NUVn6RL.jpg', bookUrl: 'https://www.amazon.it/Prospettive-11-VINCENZO-BILLECI-ebook/dp/B00W0LF8T0/ref=sr_1_3?ie=UTF8&qid=1492008460&sr=8-3&keywords=massimiliano+d%27acunzo' },
    { id: 3, title: 'Vibrazioni 16', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/518QfU%2BCNeL.jpg', bookUrl: 'https://www.amazon.it/Vibrazioni-16-FRANCESCO-CAL%C3%92-ebook/dp/B00XLZ3CO2/ref=sr_1_1?ie=UTF8&qid=1492008460&sr=8-1&keywords=massimiliano+d%27acunzo' },
    { id: 4, title: 'Approdi 15 - Il Buio del Crepuscolo', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51y0ylozHtL._SY346_.jpg', bookUrl: 'https://www.amazon.it/Approdi-15-Buio-del-Crepuscolo-ebook/dp/B019A5S3BI/ref=sr_1_2?ie=UTF8&qid=1492008460&sr=8-2&keywords=massimiliano+d%27acunzo' },
];
//# sourceMappingURL=book.service.js.map