import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-entrar',
    templateUrl: './entrar.component.html',
    styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

    constructor(private toastr: ToastrService) { }

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

    ngOnInit(): void {
    }

}
