import { Injectable } from '@angular/core';

import { Fetch } from '../consts/api/fetch';
import CONST_ITENS from '../consts/data/constItens';
import iItem from '../interfaces/item';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor(private fetch: Fetch) { }

    async getListaItensGroupByUsuario(): Promise<iItem[] | null> {
        const url = CONST_ITENS.API_URL_LISTA_ITENS_GROUP_BY_USUARIO;
        const resposta = await this.fetch.getApi(url) as iItem[];
        // console.log(resposta);

        if (resposta) {
            return resposta;
        }

        return null;
    }

}
