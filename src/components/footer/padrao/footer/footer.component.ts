import { Component, OnInit } from '@angular/core';
import { UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    dataAtual = new Date();

    constructor(private usuarioContext: UsuarioContext) { }

    isAuth: boolean | undefined;
    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
    }

}
