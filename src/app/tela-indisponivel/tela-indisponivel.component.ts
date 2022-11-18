import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tela-indisponivel',
    templateUrl: './tela-indisponivel.component.html',
    styleUrls: ['./tela-indisponivel.component.scss']
})
export class TelaIndisponivelComponent implements OnInit {

    constructor(private location: Location) { }

    ngOnInit(): void {
    }

    handleGoBack(): void {
        this.location.back();
    }

}
