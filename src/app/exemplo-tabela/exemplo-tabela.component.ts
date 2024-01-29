import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import CONSTS_ITENS from 'src/utils/consts/data/constItens';
import iItem from 'src/utils/interfaces/item';
import { GenericService } from 'src/utils/services/generic.service';

interface iTesteFilter {
    id: number;
    item: string;
}

@Component({
    selector: 'app-exemplo-tabela',
    templateUrl: './exemplo-tabela.component.html',
    styleUrls: ['./exemplo-tabela.component.scss']
})
export class ExemploTabelaComponent implements OnInit {

    constructor(private itemService: GenericService<iItem>) { }

    displayedColumns: { backendName: string, displayName: string }[] = [
        { backendName: 'nome', displayName: 'Nome' },
        { backendName: 'descricao', displayName: 'Descrição' },
        { backendName: 'tamanho', displayName: 'Tamanho' },
        { backendName: 'marca', displayName: 'Marca' },
        { backendName: 'condicao', displayName: 'Condição' }
    ];

    backendColumnNames: string[] = this.displayedColumns.map(x => x.backendName);
    dataSource = new MatTableDataSource<iItem>();

    async ngOnInit(): Promise<void> {
        const [dados, status] = await this.itemService.listar(CONSTS_ITENS.API_URL_LISTA_ITENS_GROUP_BY_USUARIO) as [iItem[], number];
        // console.log(dados);

        if (status === 200) {
            const merged = dados.flatMap(x => x) as iItem[];
            this.dataSource = new MatTableDataSource(merged);
        }
    }

    listaTesteFilter = [
        { id: 1, item: 'TESTE #1' },
        { id: 2, item: 'TESTE #2' },
        { id: 3, item: 'TESTE #3' },
        { id: 4, item: 'TESTE #4' }
    ] as iTesteFilter[];

    formTesteFilter?: number[];

    handleSelectAllTeste() {
        this.formTesteFilter = [];

        this.listaTesteFilter.forEach((x: iTesteFilter) => {
            this.formTesteFilter?.push(x.id);
        });
    }

    handleClearAllTeste() {
        this.formTesteFilter = [];
    }

}