import { ElementRef } from '@angular/core';
import validarEmail from './validar-e-mail';

export default function validarCompletoEmail
    (
        email: string | undefined | null,
        refEmail: ElementRef | undefined | null,
        senha: string | undefined | null,
        confirmarSenha: string | undefined | null
    ) :string {

    if (!email) {
        refEmail && refEmail?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'Parece que você esqueceu de colocar o seu <b>e-mail</b>';
    }

    // Verificação de e-mail #2: e-mail válido?;
    if (validarEmail(email) === false) {
        refEmail && refEmail?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'Parece que esse <b>e-mail</b> não é válido...';
    }

    return '';
}