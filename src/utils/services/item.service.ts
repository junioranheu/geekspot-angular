import { Injectable } from '@angular/core';

import { Fetch } from '../consts/api/fetch';
import CONST_ITENS from '../consts/data/constItens';
import iItem from '../interfaces/item';
import iItemAgrupadoByItemTipo from '../interfaces/itemAgrupadoByItemTipo';

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

    async getItem(id: number): Promise<iItem | null> {
        const url = `${CONST_ITENS.API_URL_GET_BY_ID}/${id}`;
        const resposta = await this.fetch.getApi(url) as iItem;
        // console.log(resposta);

        if (resposta) {
            return resposta;
        }

        return null;
    }

    async atualizarItem(dto: iItem): Promise<iItem | null> {
        const url = CONST_ITENS.API_URL_PUT_ATUALIZAR;
        const resposta = await this.fetch.putApi(url, dto) as iItem;
        // console.log(resposta);

        if (resposta) {
            return resposta;
        }

        return null;
    }

    async getListaItensGroupByItemTipo(): Promise<any | null> {
        const url = CONST_ITENS.API_URL_LISTA_ITENS_GROUP_BY_ITEM_TIPO;
        const resposta = await this.fetch.getApi(url) as iItemAgrupadoByItemTipo[];
        // console.log(resposta);

        if (resposta) {
            return resposta;
        }

        return null;
    }

}
