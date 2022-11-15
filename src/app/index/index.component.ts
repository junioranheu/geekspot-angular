import { Component, NgIterable, OnInit } from '@angular/core';
import iItem from 'src/utils/interfaces/item';
import { ItemService } from 'src/utils/services/item.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    constructor(private itemService: ItemService) { }

    listaItens: iItem[] | null | undefined | NgIterable<any>;
    async ngOnInit(): Promise<void> {
        this.listaItens = await this.itemService.getListaItensGroupByUsuario();
        // console.log(this.listaItens);
    }

}
