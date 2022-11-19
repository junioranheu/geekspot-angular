import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

     // Tutorial Navbar: https://consolelog.com.br/modal-animations-angular/
    @Input() titulo?: string | null | undefined;
    @Input() componentChild!: TemplateRef<any> | null;
    @Input() tamanho?: string | null | undefined;
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
