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
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = "Test";
        this.url = 'http://localhost:9090/login';
    }
    AppComponent.prototype.login = function () {
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
                console.log('login: ' + user.text);
                _this.showLoginSuccessDialog = true;
            }
        });
    };
    AppComponent.prototype.register = function () {
    };
    AppComponent.prototype.handleError = function (error) {
        console.error('network error', error);
        return Promise.reject(error.message || error);
    };
    AppComponent.prototype.showDialog = function (b) {
        this.showLoginSuccessDialog = b;
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "inputName", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "inputPassword", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map