import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-svg-lupa',
    templateUrl: './svg-lupa.component.html',
    styleUrls: ['./svg-lupa.component.scss']
})
export class SvgLupaComponent implements OnInit {

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
