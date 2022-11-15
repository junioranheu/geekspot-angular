import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoadingBarService } from '@ngx-loading-bar/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';
import iContextDadosUsuario from 'src/utils/interfaces/contextDadosUsuario';
import iUsuario from 'src/utils/interfaces/usuario';
import { AutenticarService } from 'src/utils/services/autenticar.service';

@Component({
    selector: 'app-entrar',
    templateUrl: './entrar.component.html',
    styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

    constructor(
        private toastr: ToastrService,
        private autenticarService: AutenticarService,
        private router: Router,
        private usuarioContext: UsuarioContext,
        private loadingBar: LoadingBarService
    ) { }

    urlCriarConta = CONSTS_TELAS.CRIAR_CONTA;
    isExibirDivEmail: boolean = false;

    nomeUsuario?: string = '';
    senha?: string = '';

    handleExibirDivEmail(): void {
        this.isExibirDivEmail = true;
    }

    async handleEntrar(): Promise<boolean | void> {
        if (!this.nomeUsuario || !this.senha) {
            this.toastr.error('O nome de usuário e/ou e-mail estão vazios!', '');
            return false;
        }

        this.loadingBar.start();

        const resposta = await this.autenticarService.postLogin(this.nomeUsuario, this.senha) as unknown as iUsuario;
        if (!resposta || resposta?.erro) {
            this.toastr.error(resposta?.mensagemErro ?? 'Algo deu errado! Provavelmente o usuário e/ou a senha estão errados', '');
            this.loadingBar.complete();
            return false;
        }

        this.router.navigate([CONSTS_TELAS.INDEX]).then(() => {
            resposta.cep = resposta?.usuariosInformacoes?.cep ?? '';
            Auth.set(resposta as unknown as iContextDadosUsuario);
            this.usuarioContext._behaviorIsAuth.next(true);
            this.loadingBar.complete();
        });
    }

    ngOnInit(): void {
    }

}
