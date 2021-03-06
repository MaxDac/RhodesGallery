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
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(builder) {
        this.builder = builder;
        this.loginForm = builder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        if (username === 'pitu' && password === 'linda') {
            window.alert('Pitu linda');
        }
        else {
            window.alert("Wrong password");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], LoginComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginComponent;
//# sourceMappingURL=login.component.js.map