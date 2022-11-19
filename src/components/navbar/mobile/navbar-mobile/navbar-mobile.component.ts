import { Component, OnInit } from '@angular/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';

@Component({
    selector: 'app-navbar-mobile',
    templateUrl: './navbar-mobile.component.html',
    styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

    // Tutorial Navbar: https://consolelog.com.br/modal-animations-angular/
    urlIndex = CONSTS_TELAS.INDEX;

    constructor() { }

    ngOnInit(): void {
    }

    isModalNavbarMobileOpen: boolean = false;
    handleModalNavbarMobile() {
        this.isModalNavbarMobileOpen = !this.isModalNavbarMobileOpen;
    }

}
