import { Component, OnInit } from '@angular/core'
import { User } from './user'
import { UserService } from './user.service'
import { Router } from '@angular/router';


@Component({
    selector: 'zone',
    templateUrl: 'zone.component.html',
    moduleId: module.id
})

export class ZoneComponent implements OnInit {

    user: User;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.user = this.userService.getUser();
    }

    logout(): void {
        this.user = null;
        this.userService.setUser(null);
        this.router.navigate(['/']);
    }

}