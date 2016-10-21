import { Component } from '@angular/core'
import { User } from './user'
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { ResponseEntity } from './response-entity'
import 'rxjs/add/operator/map';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})

export class AppComponent {
    title = "Test";

    showRegisterUI: boolean;

    private url = 'http://localhost:9090/login';

    constructor(private http: Http) { }


    login(): void {
        let params = new URLSearchParams();
        params.set("name", "wuhaojie");
        params.set("password", "123456");

        this.http.post(this.url, params)
            .map(res => res.json())
            .subscribe((response) => {
                console.log('login: ' + response.msg);
                let user = response.data;
                console.log('login: ' + user.text);
            })
    }

    handleError(error: any): Promise<any> {
        console.error('network error', error);
        return Promise.reject(error.message || error);
    }


}