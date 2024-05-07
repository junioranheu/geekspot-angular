import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import CONST_ITENS from 'src/utils/consts/data/constItens';
import iItemAgrupadoByItemTipo, { propriedadesIItemAgrupadoByItemTipo } from 'src/utils/interfaces/itemAgrupadoByItemTipo';
import { getAgChartsAngularModuleDataMock, propriedadesAgChartsAngularModuleDataMock } from 'src/utils/mock/agChartsAngularModuleDataMock';
import { GenericService } from 'src/utils/services/generic.service';

// Tutorial: https://www.ag-grid.com/angular-charts/gallery/simple-bar/
@Component({
    selector: 'app-graficos',
    templateUrl: './graficos.component.html',
    styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

    dadosChartMockado: AgChartOptions;

    constructor(private itemService: GenericService<iItemAgrupadoByItemTipo>) {
        this.dadosChartMockado = {
            autoSize: true,
            data: getAgChartsAngularModuleDataMock(),
            theme: {
                overrides: {
                    bar: {
                        series: {
                            strokeWidth: 0,
                            fill: 'rgba(154, 107, 255, 1)'
                        },
                    },
                },
            },
            title: {
                text: 'Gráfico com dados mockados',
                fontSize: 20,
            },
            subtitle: {
                text: 'Isso é apenas um teste de implementação de charts com Angular',
            },
            series: [
                {
                    type: 'bar',
                    xKey: propriedadesAgChartsAngularModuleDataMock.tipo,
                    yKey: propriedadesAgChartsAngularModuleDataMock.ganhos,
                },
            ],
            axes: [
                {
                    type: 'category',
                    position: 'left',
                },
                {
                    type: 'number',
                    position: 'bottom',
                    title: {
                        enabled: true,
                        text: '$/semana',
                    },
                },
            ],
            legend: {
                enabled: true,
            },
        };
    }

    dadosChartAPI: AgChartOptions | undefined;

    async ngOnInit(): Promise<void> {
        const [dados, status] = await this.itemService.listar(CONST_ITENS.API_URL_LISTA_ITENS_GROUP_BY_ITEM_TIPO) as [iItemAgrupadoByItemTipo[], number];
        // console.log(dados);

        if (dados) {
            this.dadosChartAPI = {
                autoSize: true,
                data: dados,
                theme: {
                    overrides: {
                        bar: {
                            series: {
                                strokeWidth: 0,
                                fill: 'rgba(154, 107, 255, 1)',
                            },
                        },
                    },
                },
                title: {
                    text: 'Gráfico com dados da API',
                    fontSize: 20,
                },
                subtitle: {
                    text: 'Isso é apenas um teste de implementação de charts com Angular',
                },
                series: [
                    {
                        type: 'bar',
                        xKey: propriedadesIItemAgrupadoByItemTipo.xItemTipo,
                        yKey: propriedadesIItemAgrupadoByItemTipo.xQuantidade,
                    },
                ],
                axes: [
                    {
                        type: 'category',
                        position: 'left',
                    },
                    {
                        type: 'number',
                        position: 'bottom',
                        title: {
                            enabled: true,
                            text: 'Quantidade de itens',
                        },
                    },
                ],
                legend: {
                    enabled: true,
                    position: 'top',
                    item: {
                        label: {
                            color: 'rgba(154, 107, 255, 1)',
                            fontWeight: '600',
                        },
                    },
                },
            };
        }
    }

}