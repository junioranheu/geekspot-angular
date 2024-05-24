export function handleArredondarNumero(num: number, decimals: number): number {
    if (!num) {
        return 0;
    }

    return Number(num.toFixed(decimals));
}

export function handleArredondarNumeroStr(num: number, decimals: number): string {
    if (!num) {
        return '0.00';
    }

    return num.toFixed(decimals);
}