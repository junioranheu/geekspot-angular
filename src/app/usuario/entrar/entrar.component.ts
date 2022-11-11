import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-entrar',
    templateUrl: './entrar.component.html',
    styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

    nomeUsuario?: string = '';
    senha?: string = '';

    handleEntrar(){
        alert('aea');
    }

    constructor() { }

    ngOnInit(): void {
    }

}
