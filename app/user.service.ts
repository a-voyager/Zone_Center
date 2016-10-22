import { User } from './user';
import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
    user: User;

    setUser(u: User): void {
        this.user = u;
    }

    getUser(): User {
        return this.user;
    }

}