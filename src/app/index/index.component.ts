import { Component, OnInit } from '@angular/core';
import { UsuarioContext } from 'src/utils/context/usuarioContext';
import iItem from 'src/utils/interfaces/item';
import { ItemService } from 'src/utils/services/item.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    constructor(private usuarioContext: UsuarioContext, private itemService: ItemService) { }

    isAuth: boolean | undefined;
    listaItens: Promise<iItem[] | null> | undefined;
    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);

        this.listaItens = this.itemService.getListaItensGroupByUsuario();
    }

}
