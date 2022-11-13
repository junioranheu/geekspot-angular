import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import iUsuario from 'src/utils/interfaces/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    getUsuario(id: number): Observable<iUsuario> | null {
        let usuario;
        const url = `https://geekspotapi.azurewebsites.net/api/Usuarios/${id}`;
        console.log(url);

        this.http.get(url).subscribe(
            data => [console.log(data), usuario = data]
        );

        console.log(usuario);

        if (usuario) {
            return of(usuario as iUsuario);
        }

        return null;
    }

}
