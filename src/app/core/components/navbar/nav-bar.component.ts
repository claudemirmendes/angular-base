import { Component, OnInit } from '@angular/core';
import { User } from '../login/user';
import { AuthenticationService } from '../login/authentication.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

    constructor(private authenticationService: AuthenticationService) { }

    isAuthenticated(): boolean {
        return this.authenticationService.isAuthenticated();
    }

    get user(): User {
        return this.authenticationService.currentUser;
    }
}
