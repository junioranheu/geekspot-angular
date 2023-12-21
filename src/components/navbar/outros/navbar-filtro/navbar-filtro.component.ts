import { Component, OnInit } from '@angular/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';

@Component({
    selector: 'app-navbar-filtro',
    templateUrl: './navbar-filtro.component.html',
    styleUrls: ['./navbar-filtro.component.scss']
})
export class NavbarFiltroComponent implements OnInit {

    urlLupa = CONSTS_TELAS.INDISPONIVEL;

    constructor() { }

    ngOnInit(): void {
    }

}