import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingBarService } from '@ngx-loading-bar/core';
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

    constructor(
        private usuarioContext: UsuarioContext,
        private router: Router,
        private loadingBar: LoadingBarService
    ) { }

    isAuth: boolean | undefined;
    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
    }

    handleDeslogar(): void {
        this.loadingBar.start();
        this.router.navigate([CONSTS_TELAS.INDEX]).then(() => {
            this.usuarioContext._behaviorIsAuth.next(false);
            Auth.delete();
            this.loadingBar.complete();
        });
    }

}
