import env from 'src/utils/outros/env';

const base = env().api;
const controller = 'api/Usuarios';

const CONSTS_USUARIOS = {
    API_URL_GET_BY_ID: `${base}/${controller}`,
    API_URL_GET_TODOS: `${base}/${controller}/todos`,
    API_URL_PUT_ATUALIZAR: `${base}/${controller}/atualizar`,
    API_URL_PUT_VERIFICAR_CONTA: `${base}/${controller}/verificarConta`,
    API_URL_PUT_ATUALIZAR_DADOS_LOJINHA: `${base}/${controller}/atualizarDadosLojinha`,
    API_URL_PUT_ATUALIZAR_DADOS_PESSOAIS: `${base}/${controller}/atualizarDadosPessoais`,
    API_URL_PUT_ATUALIZAR_DADOS_ENDERECO: `${base}/${controller}/atualizarDadosEndereco`,
    API_URL_PUT_DESATIVAR_CONTA: `${base}/${controller}/desativarConta`,
    API_URL_PUT_ATUALIZAR_SENHA: `${base}/${controller}/atualizarSenha`,
    API_URL_POST_EMAIL_RECUPERAR_SENHA: `${base}/${controller}/emailRecuperarSenha`,
    API_URL_PUT_ATUALIZAR_SENHA_RECUPERAR: `${base}/${controller}/atualizarSenhaRecuperar`,
    API_URL_POST_EMAIL_VERIFICAR_CONTA: `${base}/${controller}/emailVerificarConta`
};

export default CONSTS_USUARIOS;