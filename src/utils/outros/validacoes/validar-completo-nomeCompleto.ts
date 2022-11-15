import { ElementRef } from '@angular/core';

export default function validarCompletoNomeCompleto
    (
        nomeCompleto: string | undefined | null,
        inputNomeCompleto: ElementRef | undefined | null,
        senha: string | undefined | null,
        confirmarSenha: string | undefined | null,
    ): string {

    // Verificação do nome #1: nome preenchido?;
    if (!nomeCompleto) {
        inputNomeCompleto && inputNomeCompleto?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'Parece que você esqueceu de colocar o seu <b>nome</b>';
    }

    // Verificação do nome #2: pelo menos 03 caracteres?;
    if (nomeCompleto.length < 3) {
        inputNomeCompleto && inputNomeCompleto?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return 'Seu <b>nome</b> não pode ter menos de 03 caracteres!';
    }

    // Verificação do nome #3: se existe pelo menos um espaço (dois nomes), false = não;
    var reg = new RegExp('(\\w+)(\\s+)(\\w+)');
    if (reg.test(nomeCompleto) === false) {
        inputNomeCompleto && inputNomeCompleto?.nativeElement.focus();

        if (senha) {
            senha = '';
        }

        if (confirmarSenha) {
            confirmarSenha = '';
        }

        return `<b>${nomeCompleto}</b> é um belo nome, mas cadê seu sobrenome?`;
    }

    return '';
}