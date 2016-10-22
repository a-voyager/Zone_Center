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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var LoginComponent = (function () {
    function LoginComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.title = "Test";
        this.url = 'http://localhost:9090/login';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.inputName || !this.inputPassword) {
            alert("请输入用户名和密码！");
            return;
        }
        var params = new http_1.URLSearchParams();
        params.set("name", this.inputName);
        params.set("password", this.inputPassword);
        this.http.post(this.url, params)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log('login: ' + response.msg);
            if (response.code == 1) {
                var user = response.data;
                _this.userService.setUser(user);
                console.log('login: ' + user.text);
                _this.showLoginSuccessDialog = true;
            }
            else {
                alert("登录失败！用户名或密码错误");
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.handleError = function (error) {
        console.error('network error', error);
        return Promise.reject(error.message || error);
    };
    LoginComponent.prototype.showDialog = function (b) {
        this.showLoginSuccessDialog = b;
    };
    LoginComponent.prototype.toZone = function () {
        this.router.navigate(['/zone']);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "inputName", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "inputPassword", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'login.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map