import env from 'src/utils/outros/env';

const base = env().api;
const controller = 'api/Itens';

const CONSTS_ITENS = {
    API_URL_GET_TODOS: `${base}/${controller}/todos`,
    API_URL_GET_BY_ID: `${base}/${controller}`,
    API_URL_POST_ADICIONAR: `${base}/${controller}/adicionar`,
    API_URL_PUT_ATUALIZAR: `${base}/${controller}/atualizar`,
    API_URL_DELETE_DELETAR: `${base}/${controller}/deletar`,
    API_URL_GET_BY_ITEM_TIPO_ID: `${base}/${controller}/byItemTipoId`,
    API_URL_GET_BY_USUARIO_ID: `${base}/${controller}/byUsuarioId`,
    API_URL_LISTA_ITENS_GROUP_BY_USUARIO: `${base}/${controller}/listaItensGroupByUsuario`,
    API_URL_LISTA_ITENS_GROUP_BY_ITEM_TIPO: `${base}/${controller}/listaItensGroupByItemTipo`
};

export default CONSTS_ITENS;