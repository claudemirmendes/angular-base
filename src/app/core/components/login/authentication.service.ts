import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private LOGIN_URL = 'http://localhost:8080/users/login';

    currentUser: User;

    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string): Observable<User> {
        sessionStorage.setItem('token', btoa(username + ':' + password));

        return this.httpClient.get<boolean>(this.LOGIN_URL).pipe(
            map((user: User) => {
                if (user) {
                    this.currentUser = user;

                    console.log(this.currentUser);
                    return this.currentUser;
                }
            })
        );
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

}
