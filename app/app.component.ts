import { Component } from '@angular/core'
import { User } from './user'
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { ResponseEntity } from './response-entity'
import 'rxjs/add/operator/map';
import { Input } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})

export class AppComponent {
    title = "Test";

    @Input()
    inputName: string;

    @Input()
    inputPassword: string;

    showRegisterUI: boolean;

    showLoginSuccessDialog: boolean;


    private url = 'http://localhost:9090/login';

    constructor(private http: Http) { }


    login(): void {
        if (!this.inputName || !this.inputPassword) {
            alert("请输入用户名和密码！");
            return;
        }

        let params = new URLSearchParams();
        params.set("name", this.inputName);
        params.set("password", this.inputPassword);

        this.http.post(this.url, params)
            .map(res => res.json())
            .subscribe((response: ResponseEntity) => {
                console.log('login: ' + response.msg);
                if (response.code == 1) {
                    let user = response.data;
                    console.log('login: ' + user.text);
                    this.showLoginSuccessDialog = true;
                }
            })
    }

    register(): void {

    }


    handleError(error: any): Promise<any> {
        console.error('network error', error);
        return Promise.reject(error.message || error);
    }

    showDialog(b: boolean): void {
        this.showLoginSuccessDialog = b;
    }

}