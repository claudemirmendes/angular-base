import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/components/login/authentication.guard';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot([
            { path: 'bancos', loadChildren: './bancos/banco.module#BancoModule', canLoad: [AuthenticationGuard] },
            { path: '', redirectTo: '/bancos', pathMatch: 'full' }
        ])
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
