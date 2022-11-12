import { Component, Input, OnInit } from '@angular/core';
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
    @Input() handleFuncao: any | null;
    @Input() isEnabled: boolean = true;

    constructor(private router: Router, private toastr: ToastrService) { }

    abrirUrl(): any {
        const url = this.url;

        if (!url) {
            if (this.handleFuncao) {
                this.handleFuncao();
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
