import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import horarioBrasilia from '../outros/horarioBrasilia';

@Injectable({
    providedIn: 'root'
})
export class Fetch {

    constructor(private http: HttpClient) { }

    public async getApi(url: string, isTentarRefreshToken: boolean = true) {
        // const token = Auth?.get()?.token ?? '';
        const token = 'xxx';

        try {
            const response = await firstValueFrom(this.http.get(url));
            return response;
        } catch (erro: any) {
            const e = {
                'url': url,
                'token': token,
                'erro': erro.message,
                'data': horarioBrasilia().format('YYYY-MM-DD HH:mm:ss')
            }

            return null;
        }
    }

}
