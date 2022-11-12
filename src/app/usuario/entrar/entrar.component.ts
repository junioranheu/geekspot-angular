import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';

@Component({
    selector: 'app-entrar',
    templateUrl: './entrar.component.html',
    styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

    constructor(private toastr: ToastrService) { }

    urlCriarConta = CONSTS_TELAS.CRIAR_CONTA;
    isExibirDivEmail: boolean = false;

    nomeUsuario?: string = '';
    senha?: string = '';

    handleEntrar(): any {
        if (!this.nomeUsuario) {
            this.toastr.error('Parece que você esqueceu de inserir seu nome de usuário!', '');
            return false;
        }

        alert(this.nomeUsuario);
        alert(this.senha);
        alert('aea');
    }

    handleExibirDivEmail(): void {
        this.isExibirDivEmail = true;
    }

    ngOnInit(): void {
    }

}
