import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import CONSTS_ITENS from 'src/utils/consts/data/constItens';
import iItem from 'src/utils/interfaces/item';
import { GenericService } from 'src/utils/services/generic.service';

@Component({
    selector: 'app-exemplo-tabela',
    templateUrl: './exemplo-tabela.component.html',
    styleUrls: ['./exemplo-tabela.component.scss']
})
export class ExemploTabelaComponent implements OnInit {

    constructor(private itemService: GenericService<iItem>) { }

    displayedColumns: { backendName: string, displayName: string }[] = [
        { backendName: 'reservatorioPrincipalCota', displayName: 'Reservatório Principal - Cota' },
        { backendName: 'reservatorioPrincipalArea', displayName: 'Reservatório Principal - Área' },
        { backendName: 'reservatorioPrincipalVolume', displayName: 'Reservatório Principal - Volume' },
        { backendName: 'reservatorioIntermediarioCota', displayName: 'Reservatório Intermediário - Cota' },
        { backendName: 'reservatorioIntermediarioArea', displayName: 'Reservatório Intermediário - Área' },
        { backendName: 'reservatorioIntermediarioVolume', displayName: 'Reservatório Intermediário - Volume' },
        { backendName: 'cheBeloMonteCota', displayName: 'Che Belo Monte - Cota' },
        { backendName: 'cheBeloMonteArea', displayName: 'Che Belo Monte - Área' },
        { backendName: 'cheBeloMonteVolume', displayName: 'Che Belo Monte - Volume' }
    ];

    backendColumnNames: string[] = this.displayedColumns.map(x => x.backendName);
    dataSource: Promise<iItem[] | null> | unknown;

    async ngOnInit(): Promise<void> {
        const [dados, status] = await this.itemService.listar(CONSTS_ITENS.API_URL_LISTA_ITENS_GROUP_BY_USUARIO) as [iItem[], number];

        if (status === 200) {
            this.dataSource = new MatTableDataSource(dados);
        }
    }

    obterDisplayName(displayedColumns: { backendName: string, displayName: string }[], backendName: string): string {
        const column = displayedColumns.find(x => x.backendName === backendName);
        return column ? column.displayName : backendName;
    }

}