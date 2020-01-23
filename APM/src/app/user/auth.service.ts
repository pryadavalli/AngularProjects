import { Injectable } from '@angular/core';

import { User } from './user';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: User | null;
    redirectUrl: string;

    constructor() { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(user:User): Observable<User> {
        // Code here would log into a back end service
        // and return user information
        // This is just hard-coded here.
       var temuuser: User =  this.currentUser = {
            userName:user.userName,
            password:user.password,
        };
        
        return of(temuuser);
    }

    logout(): void {
        this.currentUser = null;
    }
}
