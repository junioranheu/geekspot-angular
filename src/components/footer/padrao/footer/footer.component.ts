import { Component, OnInit } from '@angular/core';
import { UsuarioContext } from 'src/utils/context/usuarioContext';

import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    dataAtual = new Date();
    faGithub = faGithub;
    faInstagram = faInstagram;

    constructor(private usuarioContext: UsuarioContext) { }

    isAuth: boolean | undefined;
    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
    }

    handleRedirecionarIconeGitHub() {
        window.open('https://github.com/junioranheu', '_blank');
    }

    handleRedirecionarIconeInstagram(){
        window.open('https://www.instagram.com/junioranheu/', '_blank');
    }

}
