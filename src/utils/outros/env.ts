import iIsDev from '../interfaces/isDev';

export default function env() {
    // Lista de URLs dos ambientes de front-end. Apenas host!
    const urlFrontDev = 'https://geekspot-angular.vercel.app/';
    const urlFrontQA = 'https://geekspot-angular.vercel.app/';
    const urlFrontProd = 'https://geekspot-angular.vercel.app/';

    // Lista de URLs dos ambientes de back-end;
    const urlBackDev = 'https://geekspotapi.azurewebsites.net';
    const urlBackQA = 'https://geekspotapi.azurewebsites.net';
    const urlBackProd = 'https://geekspotapi.azurewebsites.net';

    const urlAtual = window.location.host;

    let isDev: boolean = true;
    let ambiente: string = 'Localhost';
    let api: string = 'https://geekspotapi.azurewebsites.net' // 'https://localhost:7287'; ;

    if (urlAtual === urlFrontDev) {
        isDev = false;
        ambiente = 'Dev';
        api = urlBackDev;
    } else if (urlAtual === urlFrontQA) {
        isDev = false;
        ambiente = 'QA';
        api = urlBackQA;
    } else if (urlAtual === urlFrontProd) {
        isDev = false;
        ambiente = 'Prod';
        api = urlBackProd;
    }

    const resposta = {
        isDev: isDev,
        ambiente: ambiente,
        api: api
    } as iIsDev;

    // console.log(resposta);

    return resposta;
}