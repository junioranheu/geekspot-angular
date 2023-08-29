import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CONST_ITENS from 'src/utils/consts/data/constItens';
import CONSTS_UPLOAD from 'src/utils/consts/data/constUpload';
import iItem from 'src/utils/interfaces/item';
import { GenericService } from 'src/utils/services/generic.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    constructor(private route: ActivatedRoute, private itemService: GenericService<iItem>) { }

    urlAtual = '';
    ngOnInit(): void {
        this.getItem();
    }

    item?: iItem | null | undefined;
    async getItem(): Promise<void> {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        // console.log(id);

        const [dados, status] = await this.itemService.obter(`${CONST_ITENS.API_URL_GET_BY_ID}/${id}`) as [iItem, number];
        this.item = dados;
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