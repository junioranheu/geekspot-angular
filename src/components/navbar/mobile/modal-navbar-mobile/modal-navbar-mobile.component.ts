import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-modal-navbar-mobile',
    templateUrl: './modal-navbar-mobile.component.html',
    styleUrls: ['./modal-navbar-mobile.component.scss']
})
export class ModalNavbarMobileComponent implements OnInit {

    @Output() handleModal: EventEmitter<any> = new EventEmitter();

    urlEntrar = CONSTS_TELAS.ENTRAR;
    urlCriarConta = CONSTS_TELAS.CRIAR_CONTA;

    constructor(
        private usuarioContext: UsuarioContext,
        private router: Router,
        private loadingBar: LoadingBarService
    ) { }

    isAuth: boolean | undefined;
    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
    }

    fnHandleModal() {
        if (this.handleModal) {
            this.handleModal.emit();
        }
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
