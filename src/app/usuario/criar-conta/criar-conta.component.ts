import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoadingBarService } from '@ngx-loading-bar/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';
import iContextDadosUsuario from 'src/utils/interfaces/contextDadosUsuario';
import iUsuario from 'src/utils/interfaces/usuario';
import { AutenticarService } from 'src/utils/services/autenticar.service';

@Component({
    selector: 'app-criar-conta',
    templateUrl: './criar-conta.component.html',
    styleUrls: ['../entrar/entrar.component.scss']
})
export class CriarContaComponent implements OnInit {

    constructor(
        private toastr: ToastrService,
        private autenticarService: AutenticarService,
        private router: Router,
        private usuarioContext: UsuarioContext,
        private loadingBar: LoadingBarService
    ) { }

    ngOnInit(): void {
    }

    urlEntrar = CONSTS_TELAS.ENTRAR;
    isExibirDivEmail: boolean = false;

    nomeCompleto?: string = '';
    email?: string = '';
    nomeUsuario?: string = '';
    senha?: string = '';
    confirmarSenha?: string = '';

    handleExibirDivEmail(): void {
        this.isExibirDivEmail = true;
    }

    @ViewChild('inputNomeCompleto', { static: false }) inputNomeCompleto: ElementRef | undefined;
    @ViewChild('inputEmail', { static: false }) inputEmail: ElementRef | undefined;
    @ViewChild('inputUsuario', { static: false }) inputUsuario: ElementRef | undefined;
    @ViewChild('inputSenha', { static: false }) inputSenha: ElementRef | undefined;
    @ViewChild('inputConfirmarSenha', { static: false }) inputConfirmarSenha: ElementRef | undefined;
    async handleCriarConta(): Promise<boolean | void> {
        if (!this.nomeUsuario || !this.senha) {
            this.senha = '';
            this.inputUsuario?.nativeElement.focus();
            this.toastr.error('O nome de usuário e/ou e-mail estão vazios!', '');
            return false;
        }

        this.loadingBar.start();

        const resposta = await this.autenticarService.postLogin(this.nomeUsuario, this.senha) as unknown as iUsuario;
        if (!resposta || resposta?.erro) {
            this.senha = '';
            this.inputUsuario?.nativeElement.focus();
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

}
