import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Fetch {

    constructor(private http: HttpClient) { }

    public async getApi(url: string, isTentarRefreshToken: boolean = true) {
        try {
            const response = await firstValueFrom(this.http.get(url));
            return response;
        } catch (error) {
            return null;
        }
    }

}
