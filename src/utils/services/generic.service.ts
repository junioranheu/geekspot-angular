import { Injectable } from '@angular/core';
import { Fetch } from '../consts/api/fetch';
import VERBOS_HTTP from '../consts/outros/verbosHTTP';

@Injectable({
    providedIn: 'root'
})
export class GenericService<T> {

    constructor(private fetch: Fetch) { }

    async obter(url: string): Promise<[T, number]> {
        return await this.fetch.handleRequest(VERBOS_HTTP.GET, url, null) as [T, number];
    }

    async listar(url: string): Promise<[T[], number]> {
        return await this.fetch.handleRequest(VERBOS_HTTP.GET, url, null) as [T[], number];
    }

    async criar(url: string, dto: any): Promise<[T, number]> {
        return await this.fetch.handleRequest(VERBOS_HTTP.POST, url, dto) as [T, number];
    }

    async atualizar(url: string, dto: any): Promise<[number, number]> {
        return await this.fetch.handleRequest(VERBOS_HTTP.PUT, url, dto) as [number, number];
    }

}