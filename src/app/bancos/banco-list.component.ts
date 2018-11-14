import { Component, OnInit } from '@angular/core';
import { Banco } from './banco';
import { BancoService } from './banco.service';

@Component({
    templateUrl: './banco-list.component.html'
})
export class BancoListComponent implements OnInit {

    bancos: Banco[] = [];

    constructor(private bancoService: BancoService) { }

    ngOnInit(): void {
        this.bancoService.findAll().subscribe(
            (bancos: Banco[]) => this.bancos = bancos
        );
    }
}
