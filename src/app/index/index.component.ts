import { Component, NgIterable, OnInit } from '@angular/core';
import CONST_ITENS from 'src/utils/consts/data/constItens';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';
import iItem from 'src/utils/interfaces/item';
import { GenericService } from 'src/utils/services/generic.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    constructor(private usuarioContext: UsuarioContext, private itemService: GenericService<iItem>) { }

    isAuth: boolean | undefined;
    nomeUsuarioLogado?: string;
    listaItens: iItem[] | null | undefined | NgIterable<any>;

    async ngOnInit(): Promise<void> {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
        this.nomeUsuarioLogado = (this.isAuth ? Auth.get()?.nomeUsuarioSistema! : '');

        const [dados, status] = await this.itemService.listar(CONST_ITENS.API_URL_LISTA_ITENS_GROUP_BY_USUARIO) as [iItem[], number];
        this.listaItens = dados;
        // console.log(this.listaItens);
    }

}