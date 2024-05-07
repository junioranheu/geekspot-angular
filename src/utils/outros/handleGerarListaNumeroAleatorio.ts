import { handleGerarNumeroAleatorio } from './handleGerarNumeroAleatorio';

export default function handleGerarListaNumeroAleatorio(numItems: number, min: number = 1, max: number = 99999): number[] {
    const list: number[] = [];

    for (let i = 0; i < numItems; i++) {
        list.push(handleGerarNumeroAleatorio(max, min + 1));
    }

    return list;
}