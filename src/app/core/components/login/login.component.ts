import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) { }

    login(formValue): void {
        this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(
            () => this.router.navigate(['/bancos']));
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}
