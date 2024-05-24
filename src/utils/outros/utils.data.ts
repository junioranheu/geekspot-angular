import { handleArredondarNumero } from './handleArredondarNumero';

export function handleFormatarData_yyyy_MM_dd(data: Date): string {
    const ano = data.getFullYear();
    const mes = handlePadZero(data.getMonth() + 1);
    const dia = handlePadZero(data.getDate());

    return `${ano}-${mes}-${dia}`;
}

export function handlePadZero(x: number): string {
    return x < 10 ? `0${x}` : `${x}`;
}

export function handleObterDataMax<T>(dataArray: T[], propertyName: string | keyof T): T | null {
    if (dataArray.length === 0) {
        return null;
    }

    let maxDate: Date | null = null;
    let maxItem: T | null = null;

    dataArray.forEach(item => {
        const currentDate = new Date((item as any)[propertyName]);

        if (!maxDate || currentDate > maxDate) {
            maxDate = currentDate;
            maxItem = item;
        }
    });

    // console.log(maxItem);
    return maxItem;
}

export function handleObterMesAtual(): number {
    return new Date().getMonth() + 1;
}

export function handleObterAnoAtual(): number {
    return new Date().getFullYear();
}

export function handleObterDiaMaxEmMes(ano: number | null, mes: number | null): number {
    if (!ano || !mes) {
        return 0;
    }

    const mesNormalizado = Math.min(12, Math.max(1, mes));
    const nextMonthFirstDay = new Date(ano, mesNormalizado, 1);
    const lastDay = new Date(nextMonthFirstDay.getTime() - 1);

    return lastDay.getDate();
}

export interface iDiaMesAno {
    dia: number | null;
    mes: number | null;
    ano: number | null
}

export function handleObterDD_MM_YYYY(dateString: string | undefined): iDiaMesAno {
    const result = { dia: null as number | null, mes: null as number | null, ano: null as number | null };

    if (!dateString) {
        return result;
    }

    const dateParts = dateString.split('/');

    if (dateParts.length === 3) {
        result.dia = parseInt(dateParts[0], 10) || null;
        result.mes = parseInt(dateParts[1], 10) || null;
        result.ano = parseInt(dateParts[2], 10) || null;
    }

    return result;
}

// 25/03/1997 00:00:00;
export function handleFormatarData(data: Date): string {
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(data));
}

export function handleFormatarDataAlt(dateString: string | undefined): Date {
    if (!dateString) {
        return new Date(0);
    }

    const [day, month, year] = dateString.split('/').map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return new Date(0);
    }

    const jsMonth = month - 1;
    const convertedDate = new Date(year, jsMonth, day);

    if (isNaN(convertedDate.getTime())) {
        return new Date(0);
    }

    return convertedDate;
}

// 25/03/1997;
export function handleFormatarDataSemHora(data: Date | undefined): string {
    if (!data) {
        return '';
    }

    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(data));
}

// 25/03;
export function handleFormatarDataSemHora_e_SemAno(data: Date | undefined): string {
    if (!data) {
        return '';
    }

    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(new Date(data));
}


// 25/03/1997 00:00:00 para 25/03/1997;
export function handleFormatarDataSemHora_Str(dateString: string | undefined): string {
    if (!dateString) {
        return '';
    }

    const [day, month, year] = dateString.split(/[\/\s:]+/);
    const date = new Date(`${year}-${month}-${day}T00:00:00`);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

    // @ts-ignore;
    return date.toLocaleDateString('pt-BR', options);
}

export function handleObterDataAmanha(): Date {
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    return nextDay;
}

// Converter dateString para o formato: 2024-02-05;
export function handleFormatarDataISO(dateString: string): string {
    const parts = dateString.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

export function handleCriarData(hora: string | number | null | undefined, dia: string | number | null | undefined, mes: string | number | null | undefined, ano: string | number | null | undefined): Date | null {
    const hourNum = parseInt(hora?.toString() ?? '', 10);
    const dayNum = parseInt(dia?.toString() ?? '', 10);
    const monthNum = parseInt(mes?.toString() ?? '', 10);
    const yearNum = parseInt(ano?.toString() ?? '', 10);

    if (
        isNaN(hourNum) || isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum) ||
        hourNum < 0 || hourNum > 23 ||
        dayNum < 1 || dayNum > 31 ||
        monthNum < 1 || monthNum > 12 ||
        yearNum < 1950 || yearNum > 2100
    ) {
        console.error('Variáveis inválidas para criar data');
        return null;
    }

    const ultimoDiaDoMes = new Date(yearNum, monthNum, 0).getDate();
    // console.log(dayNum, ultimoDiaDoMes);

    if (dayNum > ultimoDiaDoMes) {
        console.error('O dia é inválido');
        return null;
    }

    const dateObject = new Date(yearNum, monthNum - 1, dayNum, hourNum, 0, 0, 0);

    if (isNaN(dateObject.getTime())) {
        console.error('Data inválida');
        return null;
    }

    // console.log(hourNum, dayNum, monthNum, yearNum, dateObject);
    return dateObject;
}

export function handleIsDataValida(data: Date | null | undefined): boolean {
    if (!data) {
        return false;
    }

    return !isNaN(data.getTime());
}

export function handleAdicionarUmDiaDaDataStr(dataStr: string) {
    return handleAdicionarOuSubtrairUmDiaDaDataStrSetup(dataStr, true);
}

export function handleSubtrairUmDiaDaDataStr(dataStr: string) {
    return handleAdicionarOuSubtrairUmDiaDaDataStrSetup(dataStr, false);
}

function handleAdicionarOuSubtrairUmDiaDaDataStrSetup(dataStr: string, isAdicionar: boolean): string {
    const [diaStr, mesStr, anoStr] = dataStr.split('/').map(Number);
    const data = new Date(anoStr, mesStr - 1, diaStr);
    const umDiaEmMilissegundos = 86400000;
    const dataJar = isAdicionar ? new Date(data.getTime() + umDiaEmMilissegundos) : new Date(data.getTime() - umDiaEmMilissegundos);

    const dia = dataJar.getDate();
    const mes = dataJar.getMonth() + 1;
    const ano = dataJar.getFullYear();

    // Garantindo que o dia e o mês tenham dois dígitos;
    const diaFormatado = handlePadZero(dia);
    const mesFormatado = handlePadZero(mes);
    const output = `${diaFormatado}/${mesFormatado}/${ano}`;

    return output;
}

export function handleArredondarNumeroOuFormatarData(valor: number | Date) {
    if (typeof valor === 'number') {
        return handleArredondarNumero(valor as number, 2);
    }

    // console.log(valor, typeof valor);
    return handleFormatarDataSemHora(valor as Date);
}

export function handleArredondarNumeroOuFormatarDataSemAno(valor: number | Date) {
    if (typeof valor === 'number') {
        return handleArredondarNumero(valor as number, 2);
    }

    // console.log(valor, typeof valor);
    return handleFormatarDataSemHora_e_SemAno(valor as Date);
}