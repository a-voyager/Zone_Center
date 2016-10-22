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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:9090/register';
    }
    RegisterComponent.prototype.dismissAlert = function () {
        this.alertMessage = null;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.dismissAlert();
        if (!this.check())
            return;
        var userName = this.inputName.trim();
        var password = this.inputPassword.trim();
        var age = this.inputAge.trim();
        var text = this.inputText.trim();
        var params = new http_1.URLSearchParams();
        params.set("name", userName);
        params.set("password", password);
        params.set("age", age);
        params.set("text", text);
        this.http.post(this.url, params)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.code == 1) {
                _this.alertMessage = "注册成功! 3秒后返回首页";
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                _this.alertMessage = "注册失败!";
            }
        });
    };
    RegisterComponent.prototype.check = function () {
        if (!(this.inputName && this.inputPassword && this.inputPasswordRe && this.inputAge && this.inputText)) {
            this.alertMessage = "请填写完成所有信息后再提交!";
            return false;
        }
        if (this.inputPassword !== this.inputPasswordRe) {
            this.alertMessage = "两次密码输入不一致!";
            return false;
        }
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterComponent.prototype, "inputName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterComponent.prototype, "inputPassword", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterComponent.prototype, "inputPasswordRe", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterComponent.prototype, "inputAge", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RegisterComponent.prototype, "inputText", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'register.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map