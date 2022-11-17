import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import CONSTS_UPLOAD from 'src/utils/consts/data/constUpload';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import iItem from 'src/utils/interfaces/item';

@Component({
    selector: 'app-modulo-alternativo',
    templateUrl: './modulo-alternativo.component.html',
    styleUrls: ['./modulo-alternativo.component.scss']
})
export class ModuloAlternativoComponent implements OnInit {

    @Input() listaItens: iItem[] | null | undefined | NgIterable<any>;

    constructor(private router: Router) { }

    ngOnInit(): void {

    }
 
    buscarImagem(item: iItem) {
        const urlUpload = CONSTS_UPLOAD.API_URL_GET_ITENS_IMAGENS;
        const imagem = item?.itensImagens?.find((x: any) => x.isAtivo)?.caminhoImagem;

        if (!imagem) {
            return './assets/images/cinza.webp';
        }

        const urlFinal = `${urlUpload}/${imagem}`;

        return urlFinal;
    }

    handleRedirecionar(item: iItem): void {
        this.router.navigate([`${CONSTS_TELAS.ITEM}/${item.itemId}`]);
    }

}
