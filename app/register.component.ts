import { Component, Input } from '@angular/core'
import { User } from './user'
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http'
import { ResponseEntity } from './response-entity'
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    moduleId: module.id
})

export class RegisterComponent {

    @Input()
    inputName: string;

    @Input()
    inputPassword: string;

    @Input()
    inputPasswordRe: string;

    @Input()
    inputAge: string;

    @Input()
    inputText: string;

    private url = 'http://localhost:9090/register';


    alertMessage: string;

    dismissAlert(): void {
        this.alertMessage = null;
    }


    constructor(private http: Http, private router: Router) { }

    register(): void {
        this.dismissAlert();
        if (!this.check()) return;
        let userName = this.inputName.trim();
        let password = this.inputPassword.trim();
        let age = this.inputAge.trim();
        let text = this.inputText.trim();

        let params = new URLSearchParams();
        params.set("name", userName);
        params.set("password", password);
        params.set("age", age);
        params.set("text", text);

        this.http.post(this.url, params)
            .map(res => res.json())
            .subscribe((data: ResponseEntity) => {
                if (data.code == 1) {
                    this.alertMessage = "注册成功! 3秒后返回首页";
                    setTimeout(() => {
                        this.router.navigate(['/login']);
                    }, 3000);
                } else {
                    this.alertMessage = "注册失败!";
                }
            })


    }


    check(): boolean {
        if (!(this.inputName && this.inputPassword && this.inputPasswordRe && this.inputAge && this.inputText)) {
            this.alertMessage = "请填写完成所有信息后再提交!";
            return false;
        }
        if (this.inputPassword !== this.inputPasswordRe) {
            this.alertMessage = "两次密码输入不一致!";
            return false;
        }
        return true;
    }

}