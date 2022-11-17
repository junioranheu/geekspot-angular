import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import CONSTS_UPLOAD from 'src/utils/consts/data/constUpload';
import iItem from 'src/utils/interfaces/item';
import { ItemService } from 'src/utils/services/item.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    constructor(private route: ActivatedRoute, private itemService: ItemService) { }

    urlAtual = '';
    ngOnInit(): void {
        this.getItem();
    }

    item?: iItem | null | undefined;
    async getItem(): Promise<void> {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        // console.log(id);

        this.item = await this.itemService.getItem(id);
        // console.log(this.item);
    }

    buscarImagem(item?: iItem | null | undefined) {
        if (!item) {
            return './assets/images/cinza.webp';
        }

        const urlUpload = CONSTS_UPLOAD.API_URL_GET_ITENS_IMAGENS;
        const imagem = item?.itensImagens?.find((x: any) => x.isAtivo)?.caminhoImagem;

        if (!imagem) {
            return './assets/images/cinza.webp';
        }

        const urlFinal = `${urlUpload}/${imagem}`;

        return urlFinal;
    }

}
