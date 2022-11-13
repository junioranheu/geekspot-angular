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

    public nomeUsuario?: string = '';
    public senha?: string = '';

    handleEntrar(): void | boolean {
        if (!this.nomeUsuario || !this.senha) {
            this.toastr.error('O nome de usuário e/ou e-mail estão vazios!', '');
            return false;
        }

        alert('aea');
    }

    handleExibirDivEmail(): void {
        this.isExibirDivEmail = true;
    }

    ngOnInit(): void {
    }

}
