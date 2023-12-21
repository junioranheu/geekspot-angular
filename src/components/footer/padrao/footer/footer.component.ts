import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { UsuarioContext } from 'src/utils/context/usuarioContext';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    urlTelaIndisponivel = CONSTS_TELAS.INDISPONIVEL;
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

    handleRedirecionarIconeInstagram() {
        window.open('https://www.instagram.com/junioranheu/', '_blank');
    }

}
