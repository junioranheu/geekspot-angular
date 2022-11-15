import { ElementRef } from '@angular/core';

export default function validarCompletoNomeUsuarioSistema
    (
        nomeUsuarioSistema: string | undefined | null,
        refNomeUsuario: ElementRef | undefined | null,
        senha: string | undefined | null,
        confirmarSenha: string | undefined | null,
    ): string {

    if (!nomeUsuarioSistema) {
        refNomeUsuario && refNomeUsuario?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'Parece que você esqueceu de colocar um <b>nome de usuário</b>';
    }

    // Verificação de nome de usuário #2: pelo menos 03 caracteres?;
    if (nomeUsuarioSistema.length > 20 || nomeUsuarioSistema.length < 4) {
        refNomeUsuario && refNomeUsuario?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'O <b>nome de usuário</b> não pode ter não pode ter menos de 4 e nem mais de 10 caracteres, e agora está com ' + nomeUsuarioSistema.length + '!';
    }

    return '';
}