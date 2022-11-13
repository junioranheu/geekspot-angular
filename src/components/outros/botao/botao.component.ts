import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-botao',
    templateUrl: './botao.component.html',
    styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

    @Input() texto: string = '';
    @Input() url?: string | null;
    @Input() isNovaAba: boolean = false;
    @Output() handleFuncao: EventEmitter<any> = new EventEmitter(); // Como passar uma função por parâmetro "Input" (na verdade é Output): https://stackoverflow.com/a/45690614
    @Input() isEnabled: boolean = true;

    @Input() cor?: string | null;
    @Input() corFonte?: string | null;

    constructor(private router: Router, private toastr: ToastrService) { }

    fnHandleFuncao(): void | boolean {
        const url = this.url;

        if (!url) {
            if (this.handleFuncao) {
                this.handleFuncao.emit();
            }

            return false;
        }

        if (this.isNovaAba && url) {
            this.router.navigate([]).then(result => { window.open(url, '_blank'); });
        } else {
            this.router.navigate([`${url}`]);
        }
    }

    ngOnInit(): void {
    }

}
