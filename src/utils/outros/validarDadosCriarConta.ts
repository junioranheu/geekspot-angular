import { ElementRef } from '@angular/core';
import validarCompletoEmail from './validacoes/validar-completo-email';
import validarCompletoNomeCompleto from './validacoes/validar-completo-nomeCompleto';
import validarCompletoNomeUsuarioSistema from './validacoes/validar-completo-nomeUsuarioSistema';
import validarCompletoSenha from './validacoes/validar-completo-senha';

export default function validarDadosCriarConta
    (
        nomeCompleto: string | undefined | null,
        email: string | undefined | null,
        nomeUsuario: string | undefined | null,
        senha: string | undefined | null,
        confirmarSenha: string | undefined | null,
        inputNomeCompleto: ElementRef | undefined | null,
        inputEmail: ElementRef | undefined | null,
        inputUsuario: ElementRef | undefined | null,
        inputSenha: ElementRef | undefined | null,
        isTrocouSenha: boolean
    ): string {

    // Nome completo;
    const mensagemErroNomeCompleto = validarCompletoNomeCompleto(nomeCompleto, inputNomeCompleto, senha, confirmarSenha) as string;
    if (mensagemErroNomeCompleto) {
        return mensagemErroNomeCompleto;
    }

    // E-mail;
    const mensagemErroEmail = validarCompletoEmail(email, inputEmail, senha, confirmarSenha) as string;
    if (mensagemErroEmail) {
        return mensagemErroEmail;
    }

    // Nome de usuário do sistema;
    const mensagemErroNomeUsuarioSistema = validarCompletoNomeUsuarioSistema(nomeUsuario, inputUsuario, senha, confirmarSenha) as string;
    if (mensagemErroNomeUsuarioSistema) {
        return mensagemErroNomeUsuarioSistema;
    }

    // Se a chamada vem da tela de criar nova conta, verifique a senha também;
    if (isTrocouSenha) {
        const mensagemErroSenha = validarCompletoSenha(false, senha, confirmarSenha, inputSenha) as string;

        if (mensagemErroSenha) {
            return mensagemErroSenha;
        }
    }

    return '';
}