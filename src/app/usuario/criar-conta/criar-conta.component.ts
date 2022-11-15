import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoadingBarService } from '@ngx-loading-bar/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';
import iContextDadosUsuario from 'src/utils/interfaces/contextDadosUsuario';
import iUsuario from 'src/utils/interfaces/usuario';
import converterSrcImagemParaBase64 from 'src/utils/outros/converterSrcImagemParaBase64';
import gerarImagemPerfilRandom from 'src/utils/outros/gerarImagemPerfilRandom';
import horarioBrasilia from 'src/utils/outros/horarioBrasilia';
import padronizarNomeCompletoUsuario from 'src/utils/outros/padronizarNomeCompletoUsuario';
import validarDadosCriarConta from 'src/utils/outros/validarDadosCriarConta';
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

    isAuth: boolean | undefined;
    imagemPerfilRandomInicialBase6?: string;
    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);

        if (this.isAuth) {
            this.router.navigate([CONSTS_TELAS.ERRO]);
        }

        // Gerar uma imagem pro novo usuário;
        converterSrcImagemParaBase64(gerarImagemPerfilRandom())
            .then((base64: any) => {
                // console.log(base64);
                this.imagemPerfilRandomInicialBase6 = base64;
            });
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
        this.loadingBar.start();

        const isTrocouSenha = true;
        let mensagemErroValidarDados = validarDadosCriarConta(this.nomeCompleto, this.email, this.nomeUsuario, this.senha, this.confirmarSenha, this.inputNomeCompleto, this.inputEmail, this.inputUsuario, this.inputSenha, isTrocouSenha);
        if (mensagemErroValidarDados) {
            this.toastr.error(mensagemErroValidarDados, '');
            this.loadingBar.complete();
            return false;
        }

        // Atribuir o nome formatado para a variavel nome, novamente;
        this.nomeCompleto = padronizarNomeCompletoUsuario(this.nomeCompleto ?? '');

        // Criar conta;
        const dto = {
            nomeCompleto: this.nomeCompleto,
            email: this.email,
            nomeUsuarioSistema: this.nomeUsuario,
            senha: this.senha,
            usuarioTipoId: 2, // Usuário comum;
            dataCriacao: horarioBrasilia().format('YYYY-MM-DD HH:mm:ss'),
            foto: this.imagemPerfilRandomInicialBase6,
            isAtivo: true,
            isPremium: false,
            IsVerificado: false
        } as unknown as iUsuario;

        const resposta = await this.autenticarService.postCriarConta(dto) as unknown as iUsuario;
        if (!resposta || resposta?.erro) {
            this.senha = '';
            this.inputUsuario?.nativeElement.focus();
            this.toastr.error(resposta?.mensagemErro ?? 'Parece que ocorreu um erro interno. Tente novamente mais tarde', '');
            this.loadingBar.complete();
            return false;
        }

        this.router.navigate([CONSTS_TELAS.INDEX]).then(() => {
            resposta.cep = '';
            Auth.set(resposta as unknown as iContextDadosUsuario);
            this.usuarioContext._behaviorIsAuth.next(true);

            if (resposta.isEmailVerificacaoContaEnviado) {
                this.toastr.success('Um e-mail de verificação de conta foi enviado para você 👽', '');
            }

            this.loadingBar.complete();
        });
    }

}
