import { ElementRef } from '@angular/core';
import validarSenha from './validar-senha';

export default function validarCompletoSenha
    (
        isValidarSenhaFrontEnd: boolean,
        senha: string | undefined | null,
        confirmarSenha: string | undefined | null,
        refSenha: ElementRef | undefined | null,
    ): string {

    // Verificação de senha #1: senha preenchida?;
    if (!senha) {
        refSenha && refSenha?.nativeElement.focus();

        if (confirmarSenha) {
            confirmarSenha = '';
        }  

        return 'Parece que você esqueceu de colocar sua <b>senha</b>';
    }

    // Verificação da senha #2: realizar uma série de verificações, se alguma retornar falso, aborte;
    if (isValidarSenhaFrontEnd) {
        if (validarSenha(senha, 6) === false) {
            return 'Senha muito fraca. Tente novamente com uma senha mais forte';
        }
    }

    // Checar se os dois campos de senha coincidem;
    if (senha !== confirmarSenha) {
        refSenha && refSenha?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'As <b>senhas</b> não estão idênticas! Tente novamente';
    }

    return '';
}