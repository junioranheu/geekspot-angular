import { Injectable } from '@angular/core';

import iUsuario from 'src/utils/interfaces/usuario';
import { Fetch } from '../consts/api/fetch';
import CONST_USUARIOS from '../consts/data/constUsuarios';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private fetch: Fetch) { }

    async getUsuario(id: number): Promise<iUsuario | null> {
        const url = `${CONST_USUARIOS.API_URL_GET_BY_ID}/${id}`;
        const usuario = await this.fetch.getApi(url) as iUsuario;
        // console.log(usuario);

        if (usuario) {
            return usuario;
        }

        return null;
    }

}
