import { Component, OnInit } from '@angular/core';
import { UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    constructor(private usuarioContext: UsuarioContext) { }

    isAuth: boolean = false;
    ngOnInit(): void {
        this.isAuth = this.usuarioContext.isAuth;
    }

}
