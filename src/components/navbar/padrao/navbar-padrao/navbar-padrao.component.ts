import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-navbar-padrao',
    templateUrl: './navbar-padrao.component.html',
    styleUrls: ['./navbar-padrao.component.scss']
})
export class NavbarPadraoComponent implements OnInit {

    urlIndex = CONSTS_TELAS.INDEX;
    urlEntrar = CONSTS_TELAS.ENTRAR;
    urlAjuda = CONSTS_TELAS.AJUDA;

    constructor(private usuarioContext: UsuarioContext, private router: Router) { }

    isAuth: boolean = false;
    ngOnInit(): void {
        this.isAuth = this.usuarioContext.isAuth;
    }

    handleDeslogar(): void {
        this.router.navigate([CONSTS_TELAS.INDEX]).then(() => {
            this.isAuth = false;
            Auth.delete();
        });
    }

}
