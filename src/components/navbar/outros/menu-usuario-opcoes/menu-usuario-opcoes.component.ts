import { Component, Input, OnInit } from '@angular/core';
import { UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-menu-usuario-opcoes',
    templateUrl: './menu-usuario-opcoes.component.html',
    styleUrls: ['./menu-usuario-opcoes.component.scss']
})
export class MenuUsuarioOpcoesComponent implements OnInit {

    @Input() isMeuPerfilBotao: boolean = false;
    @Input() urlPerfil : string = '';

    constructor(private usuarioContext: UsuarioContext) { }

    isAuth: boolean | undefined;
    async ngOnInit(): Promise<void> {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
    }

}
