import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import iUsuario from 'src/utils/interfaces/usuario';
import { AutenticarService } from 'src/utils/services/autenticar.service';
import { UsuarioService } from 'src/utils/services/usuario.service';

@Component({
    selector: 'app-entrar',
    templateUrl: './entrar.component.html',
    styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

    constructor(private toastr: ToastrService, private autenticarService: AutenticarService, private usuarioService: UsuarioService) { }

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

        const aea = await this.usuarioService.getUsuario(1) as unknown as iUsuario;
        console.log(aea);

        const resposta = await this.autenticarService.postLogin(this.nomeUsuario, this.senha) as unknown as iUsuario;
        console.log(resposta);
        // if (!resposta || resposta?.erro) {
        //     setModalAvisoLoginDescricao((resposta?.mensagemErro ? `Parece que ${resposta?.mensagemErro.toLowerCase()}. Tente novamente mais tarde` : 'Algo deu errado! Provavelmente o usuário e/ou a senha estão errados'));
        //     setIsModalAvisoLoginOpen(true);
        //     instrucaoErro('', false);
        //     return false;
        // }
    }

    ngOnInit(): void {
    }

}
