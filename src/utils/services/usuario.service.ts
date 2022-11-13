import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import iUsuario from 'src/utils/interfaces/usuario';
import { Fetch } from './fetch';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient, private fetch: Fetch) { }

    async getUsuario(id: number): Promise<Observable<iUsuario> | null> {
        const url = `https://geekspotapi.azurewebsites.net/api/Usuarios/${id}`;
        const usuario = await this.fetch.getApi(url) as iUsuario;
        console.log(usuario);

        if (usuario) {
            return of(usuario);
        }

        return null;
    }

}
