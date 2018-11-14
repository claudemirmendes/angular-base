import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHeaderInterceptor } from './interceptors/app-header.interceptor';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/error-404.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component,
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'user/login', component: LoginComponent },
            { path: '**', component: Error404Component }
        ])
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AppHeaderInterceptor, multi: true }
    ], exports: [
        NavBarComponent,
        Error404Component
    ]
})
export class CoreModule { }
