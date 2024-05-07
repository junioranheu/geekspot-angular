import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';
import CONST_ITENS from 'src/utils/consts/data/constItens';
import iItemAgrupadoByItemTipo from 'src/utils/interfaces/itemAgrupadoByItemTipo';
import handleGerarListaNumeroAleatorio from 'src/utils/outros/handleGerarListaNumeroAleatorio';
import { GenericService } from 'src/utils/services/generic.service';

export type iChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
}

export interface iSubItensChart_Mockado {
    tempo: string[];
    realizado: number[];
    previsto: number[];
    programado: number[];
}

export interface iChart_Mockado {
    geracao: iSubItensChart_Mockado;
    nivel: iSubItensChart_Mockado;
    vazao: iSubItensChart_Mockado;
}

export interface iSubItensChart_API {
    tipo: string[];
    quantidade: number[];
}

export interface iChart_API {
    item: iSubItensChart_API;
}

@Component({
    selector: 'app-graficos-apex',
    templateUrl: './graficos-apex.component.html',
    styleUrls: ['./graficos-apex.component.scss']
})
export class GraficosApexComponent implements OnInit {

    chartOptions_mockado = {} as Partial<iChartOptions>;
    chartOptions_api = {} as Partial<iChartOptions>;

    constructor(private itemService: GenericService<iItemAgrupadoByItemTipo>) {
    }

    async ngOnInit(): Promise<void> {
        const dadosMockadosGraficos = this.handleObterDadosMockados();
        const dadosGraficos = await this.handleObterDadosAPI();

        this.chartOptions_mockado = this.handleGerarChart_Mock(dadosMockadosGraficos.geracao, 'Dados mockados');

        if (dadosGraficos) {
            this.chartOptions_api = this.handleGerarChart_API(dadosGraficos.item, 'Dados API');
        }
    }

    private handleObterDadosMockados(): iChart_Mockado {
        const tempos = ['00:00', '00:30', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];

        const chartItem_geracao = {
            tempo: tempos,
            realizado: handleGerarListaNumeroAleatorio(tempos.length),
            previsto: handleGerarListaNumeroAleatorio(tempos.length),
            programado: handleGerarListaNumeroAleatorio(tempos.length)
        } as iSubItensChart_Mockado;

        const chartItem_nivel = {
            tempo: tempos,
            realizado: handleGerarListaNumeroAleatorio(tempos.length),
            previsto: handleGerarListaNumeroAleatorio(tempos.length),
            programado: handleGerarListaNumeroAleatorio(tempos.length)
        } as iSubItensChart_Mockado;

        const chartItem_vazao = {
            tempo: tempos,
            realizado: handleGerarListaNumeroAleatorio(tempos.length),
            previsto: handleGerarListaNumeroAleatorio(tempos.length),
            programado: handleGerarListaNumeroAleatorio(tempos.length)
        } as iSubItensChart_Mockado;

        const mockDadosGraficos = {
            geracao: chartItem_geracao,
            nivel: chartItem_nivel,
            vazao: chartItem_vazao
        } as iChart_Mockado;

        return mockDadosGraficos;
    }

    private async handleObterDadosAPI(): Promise<iChart_API | undefined> {
        const [dados, status] = await this.itemService.listar(CONST_ITENS.API_URL_LISTA_ITENS_GROUP_BY_ITEM_TIPO) as [iItemAgrupadoByItemTipo[], number];
        // console.log(dados);

        if (dados) {
            const itens = [] as string[];
            const precos = [] as number[];

            dados.forEach((dado: iItemAgrupadoByItemTipo) => {
                // console.log(dado);
                itens.push(dado.xItemTipo);
                precos.push(dado.xQuantidade);
            });

            const dadosGraficos = {
                item: {
                    tipo: itens,
                    quantidade: precos
                } as iSubItensChart_API
            } as iChart_API;

            return dadosGraficos;
        }

        return undefined;
    }

    private handleGerarChart_Mock(data: iSubItensChart_Mockado, titulo: string): Partial<iChartOptions> {
        const chart = {
            series: [
                {
                    name: 'Realizado',
                    data: data.realizado
                },
                {
                    name: 'Previsto',
                    data: data.previsto
                },
                {
                    name: 'Programado',
                    data: data.programado
                }
            ],
            chart: {
                height: 350,
                type: 'line',
                events: {
                    mounted: (chart) => {
                        setTimeout(() => {
                            chart.windowResizeHandler();
                        }, 2000);
                    }
                },
            },
            title: {
                text: titulo
            },
            xaxis: {
                categories: data.tempo
            },
        } as Partial<iChartOptions>;

        return chart;
    }

    private handleGerarChart_API(data: iSubItensChart_API, titulo: string): Partial<iChartOptions> {
        const chart = {
            series: [
                {
                    name: 'Quantidade',
                    data: data.quantidade
                }
            ],
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    mounted: (chart) => {
                        setTimeout(() => {
                            chart.windowResizeHandler();
                        }, 2000);
                    }
                },
            },
            title: {
                text: titulo
            },
            xaxis: {
                categories: data.tipo
            },
        } as Partial<iChartOptions>;

        // console.log(data, chart);
        return chart;
    }

}