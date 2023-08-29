import env from 'src/utils/outros/env';

const base = env().api;

const CONSTS_UPLOADS = {
    API_URL_GET_ITENS_IMAGENS: `${base}/Upload/itens/imagem`,
    API_URL_GET_USUARIOS_IMAGENS: `${base}/Upload/perfil/imagem`,
    API_URL_GET_USUARIOS_LOJINHAS_CAPAS: `${base}/Upload/usuarios/lojinha/imagem`
};

export default CONSTS_UPLOADS;