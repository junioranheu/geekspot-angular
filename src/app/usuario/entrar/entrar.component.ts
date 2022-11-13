import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { UsuarioService } from 'src/utils/services/usuario.service';

@Component({
    selector: 'app-entrar',
    templateUrl: './entrar.component.html',
    styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

    constructor(private toastr: ToastrService, private usuarioService: UsuarioService) { }

    urlCriarConta = CONSTS_TELAS.CRIAR_CONTA;
    isExibirDivEmail: boolean = false;

    nomeUsuario?: string = '';
    senha?: string = '';

    handleEntrar(): void | boolean {
        if (!this.nomeUsuario || !this.senha) {
            this.toastr.error('O nome de usuário e/ou e-mail estão vazios!', '');
            return false;
        }

        // https://github.com/junioranheu/geek-spot/blob/main/front-end/pages/usuario/entrar/sessaoEntrar.tsx
        this.usuarioService.getUsuario(1);
    }

    handleExibirDivEmail(): void {
        this.isExibirDivEmail = true;
    }

    ngOnInit(): void {
    }

}
