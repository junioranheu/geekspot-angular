import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Auth, UsuarioContext } from 'src/utils/context/usuarioContext';
import { environment } from 'src/utils/environments/environment';
import iContextDadosUsuario from 'src/utils/interfaces/contextDadosUsuario';
import desabilitarTodosElementos from 'src/utils/outros/desabilitarTodosElementos';
import CONSTS_AUTENTICAR from '../../consts/data/constAutenticar';
import horarioBrasilia from '../../outros/horarioBrasilia';
import CONSTS_TELAS from '../outros/telas';
import VERBOS_HTTP from '../outros/verbosHTTP';

@Injectable({
    providedIn: 'root'
})
export class Fetch implements OnInit {

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
        private loadingBar: LoadingBarService,
        private router: Router,
        private usuarioContext: UsuarioContext
    ) { }

    isAuth: boolean | undefined;

    ngOnInit(): void {
        this.usuarioContext.isAuthObservable.subscribe(ia => this.isAuth = ia);
    }

    public async handleRequest(verboHTTP: string, url: string, body: string | any | null, isTentarRefreshToken: boolean = true): Promise<[any, number]> {
        this.loadingBar.start();

        const token = Auth?.get()?.token ?? '';
        let respostaJson: any, status: number = 200;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');

        try {
            if (verboHTTP === VERBOS_HTTP.GET) {
                respostaJson = await firstValueFrom(this.http.get(url, { headers }));
            } else if (verboHTTP === VERBOS_HTTP.POST) {
                respostaJson = await firstValueFrom(this.http.post(url, JSON.stringify(body), { headers }));
            } else if (verboHTTP === VERBOS_HTTP.PUT) {
                respostaJson = await firstValueFrom(this.http.put(url, JSON.stringify(body), { headers }));
            } else if (verboHTTP === VERBOS_HTTP.DELETE) {
                respostaJson = await firstValueFrom(this.http.delete(url, { headers }));
            }

            try {
                // console.log('respostaJson.code', respostaJson.code, url);

                if (respostaJson.code) {
                    status = respostaJson.code;
                }
            } catch (erro: any) { }
        } catch (erro: any) {
            // console.log('erro', erro);
            return this.handleCatch(erro, url, body, token, verboHTTP, isTentarRefreshToken);
        }

        this.loadingBar.complete();

        // console.log(':)', respostaJson, status);
        return [respostaJson, status];
    }

    private async handleCatch(erro: any, url: string, body: string, token: string, verboHTTP: string, isTentarRefreshToken: boolean): Promise<[any, number]> {
        this.loadingBar.complete();
        let respostaJson = erro.error;
        const status = erro.status;

        const e = {
            url: url,
            body: body,
            token: token,
            erro: erro.message,
            data: horarioBrasilia().format('YYYY-MM-DD HH:mm:ss'),
        };

        console.table(e);

        respostaJson = await this.refreshToken(token, erro.message, verboHTTP, url, body, isTentarRefreshToken);

        return [respostaJson, status];
    }

    private async refreshToken(token: string, erro: any, verboHTTP: string, url: string | null, body: string | null, isTentarRefreshToken: boolean): Promise<any> {
        if (token && erro === 'Unexpected end of JSON input' && isTentarRefreshToken) {
            const urlRefreshToken = CONSTS_AUTENTICAR.API_URL_POST_REFRESH_TOKEN;
            const dto = {
                token: token,
                refreshToken: (Auth?.get()?.refreshToken ?? '')
            };

            // Fazer requisição para o end-point de refresh token
            const respostaRefreshToken = await this.handleRequest(verboHTTP, urlRefreshToken, dto, false) as any;
            if (!respostaRefreshToken || respostaRefreshToken?.erro) {
                console.log(respostaRefreshToken?.mensagemErro ?? 'Houve um erro ao gerar o refresh token');
                this.deslogarUsuarioRefreshTokenInvalido();
                return false;
            }

            // Atualizar dados no local storage;
            const dadosUsuario = {
                token: respostaRefreshToken.token,
                refreshToken: respostaRefreshToken.refreshToken
            } as iContextDadosUsuario;

            Auth.update(dadosUsuario);

            const msgRefreshTokenAtualizado = 'Refresh token atualizado';
            console.log(msgRefreshTokenAtualizado);

            if (!environment.production) {
                this.toastr.success(msgRefreshTokenAtualizado, '');
            }

            // Tentar novamente a chamada para o end-point requisitado, mas agora com o novo token;
            let respostaJson;

            if (url) {
                try {
                    respostaJson = await this.handleRequest(verboHTTP, url, VERBOS_HTTP.GET ? null : body, false);
                } catch (error: any) {
                    this.deslogarUsuarioRefreshTokenInvalido();
                    return false;
                }
            }

            return respostaJson;
        }
    }

    private deslogarUsuarioRefreshTokenInvalido() {
        this.loadingBar.start();
        desabilitarTodosElementos(true);
        this.toastr.info(`A sua sessão expirou!<br/><br/>Renove sua sessão fazendo login novamente no GeekSpot 😎`, '');

        this.router.navigate([CONSTS_TELAS.ERRO]).then(() => {
            Auth.delete();
            this.usuarioContext._behaviorIsAuth.next(false);
            this.loadingBar.complete();
        });
    }

}