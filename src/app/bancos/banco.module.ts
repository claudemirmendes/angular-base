import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BancoListComponent } from './banco-list.component';

import { SharedModule } from '../shared/shared.module';
import { BancoService } from './banco.service';

@NgModule({
    declarations: [
        BancoListComponent
    ], imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: BancoListComponent }
        ])
    ], providers: [
        BancoService
    ]
})
export class BancoModule { }
