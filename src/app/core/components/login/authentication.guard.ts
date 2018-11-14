import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canLoad(route: Route) {
        return this.checkAuth();
    }

    checkAuth() {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/user/login']);
            return false;
        }

    }
}
