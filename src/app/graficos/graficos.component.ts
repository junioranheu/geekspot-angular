import { Component, OnInit } from '@angular/core';

import { AgChartOptions } from 'ag-charts-community';
import { getAgChartsAngularModuleDataMock } from 'src/utils/mock/agChartsAngularModuleDataMock';

// Tutorial: https://www.ag-grid.com/angular-charts/gallery/simple-bar/
@Component({
    selector: 'app-graficos',
    templateUrl: './graficos.component.html',
    styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

    opcoesChart: AgChartOptions;
    constructor() {
        this.opcoesChart = {
            autoSize: true,
            data: getAgChartsAngularModuleDataMock(),
            theme: {
                overrides: {
                    bar: {
                        series: {
                            strokeWidth: 0,
                        },
                    },
                },
            },
            title: {
                text: 'Gráfico com dados mockados',
                fontSize: 18,
            },
            subtitle: {
                text: 'Isso é apenas um teste de implementação de charts com Angular',
            },
            series: [
                {
                    type: 'bar',
                    xKey: 'type',
                    yKey: 'earnings',
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

    ngOnInit(): void {
    }

}
