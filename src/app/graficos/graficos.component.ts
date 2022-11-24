import { Component, OnInit } from '@angular/core';

import { AgChartOptions } from 'ag-charts-community';
import iItemAgrupadoByItemTipo, { propriedadesIItemAgrupadoByItemTipo } from 'src/utils/interfaces/itemAgrupadoByItemTipo';
import { getAgChartsAngularModuleDataMock, propriedadesAgChartsAngularModuleDataMock } from 'src/utils/mock/agChartsAngularModuleDataMock';
import { ItemService } from 'src/utils/services/item.service';

// Tutorial: https://www.ag-grid.com/angular-charts/gallery/simple-bar/
@Component({
    selector: 'app-graficos',
    templateUrl: './graficos.component.html',
    styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

    dadosChartMockado: AgChartOptions;
    constructor(private itemService: ItemService) {
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
        const listaItens = await this.itemService.getListaItensGroupByItemTipo() as iItemAgrupadoByItemTipo[];
        // console.log(listaItens);

        if (listaItens) {
            this.dadosChartAPI = {
                autoSize: true,
                data: listaItens,
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
                },
            };
        }
    }

}
