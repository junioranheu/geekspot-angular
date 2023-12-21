import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subscription } from 'rxjs';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-navbar-padrao',
    templateUrl: './navbar-padrao.component.html',
    styleUrls: ['./navbar-padrao.component.scss']
})
export class NavbarPadraoComponent implements OnInit, OnDestroy {

    urlIndex = CONSTS_TELAS.INDEX;
    urlEntrar = CONSTS_TELAS.ENTRAR;
    urlTelaIndisponivel = CONSTS_TELAS.INDISPONIVEL;
    urlGraficos = CONSTS_TELAS.GRAFICOS;

    constructor(
        private usuarioContext: UsuarioContext,
        private router: Router,
        private loadingBar: LoadingBarService
    ) { }

    isAuth: boolean | undefined;
    private isAuthSubscription: Subscription | undefined;

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

    ngOnDestroy(): void {
        if (this.isAuthSubscription) {
            this.isAuthSubscription.unsubscribe();
        }
    }

}