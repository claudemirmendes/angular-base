import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Banco } from './banco';

@Injectable()
export class BancoService {

    private ENDPOINT_BANCOS = 'http://localhost:8080/saneamento/bancos';

    constructor(private http: HttpClient) { }

    findAll(): Observable<Banco[]> {
        return this.http.get<Banco[]>(this.ENDPOINT_BANCOS);
    }
}
