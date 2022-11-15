import { Component, NgIterable, OnInit } from '@angular/core';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';
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
    nomeUsuarioLogado?: string;
    listaItens: iItem[] | null | undefined | NgIterable<any>;
    async ngOnInit(): Promise<void> {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
        this.nomeUsuarioLogado = (this.isAuth ? Auth.get()?.nomeUsuarioSistema : '');

        this.listaItens = await this.itemService.getListaItensGroupByUsuario();
        // console.log(this.listaItens);
    }

}
