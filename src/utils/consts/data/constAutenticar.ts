import env from 'src/utils/outros/env';

const base = env().api;
const controller = 'api/Autenticar';

const CONSTS_AUTENTICAR = {
    API_URL_POST_LOGIN: `${base}/${controller}/login`,
    API_URL_POST_REGISTRAR: `${base}/${controller}/registrar`,
    API_URL_POST_REFRESH_TOKEN: `${base}/${controller}/refreshToken`
};

export default CONSTS_AUTENTICAR;