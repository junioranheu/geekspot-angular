import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-svg-ajuda',
    templateUrl: './svg-ajuda.component.html',
    styleUrls: ['./svg-ajuda.component.scss']
})
export class SvgAjudaComponent implements OnInit {

    @Input() url?: string;

    constructor(private router: Router) { }

    goToPage(url?: string): void | boolean {
        if (!url) {
            return false;
        }

        this.router.navigate([`${url}`]);
    }

    ngOnInit(): void {
    }

}
