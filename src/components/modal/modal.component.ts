import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() titulo?: string | null | undefined;
    @Input() componentChild!: TemplateRef<any> | null;
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
