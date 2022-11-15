import { Component, Input, NgIterable, OnInit } from '@angular/core';
import iItem from 'src/utils/interfaces/item';

@Component({
    selector: 'app-modulo-alternativo',
    templateUrl: './modulo-alternativo.component.html',
    styleUrls: ['./modulo-alternativo.component.scss']
})
export class ModuloAlternativoComponent implements OnInit {

    @Input() listaItens: iItem[] | null | undefined | NgIterable<any>;

    constructor() { }

    ngOnInit(): void {

    }

}
