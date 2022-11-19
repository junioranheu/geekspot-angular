import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-modal-navbar-mobile',
    templateUrl: './modal-navbar-mobile.component.html',
    styleUrls: ['./modal-navbar-mobile.component.scss']
})
export class ModalNavbarMobileComponent implements OnInit {

    @Output() handleModal: EventEmitter<any> = new EventEmitter(); 

    constructor() { }

    ngOnInit(): void {
    }

    fnHandleModal() {
        if (this.handleModal) {
            this.handleModal.emit();
        }
    }

}
