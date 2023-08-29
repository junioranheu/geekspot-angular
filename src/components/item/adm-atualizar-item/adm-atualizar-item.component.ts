import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import CONSTS_ITENS from 'src/utils/consts/data/constItens';
import { Auth } from 'src/utils/context/usuarioContext';
import iItem from 'src/utils/interfaces/item';
import { GenericService } from 'src/utils/services/generic.service';

@Component({
    selector: 'app-adm-atualizar-item',
    templateUrl: './adm-atualizar-item.component.html',
    styleUrls: ['./adm-atualizar-item.component.scss']
})
export class AdmAtualizarItemComponent implements OnInit, OnChanges {

    constructor(
        private titleService: Title,
        private toastr: ToastrService,
        private loadingBar: LoadingBarService,
        private itemService: GenericService<iItem>,
    ) { }

    @Input() item?: iItem | null | undefined;
    isAdm = Auth.get()?.usuarioTipoId === 1 ? true : false;

    ngOnInit(): void {
    }

    nome?: string = '';
    descricao?: string = '';
    tamanho?: string = '';
    marca?: string = '';
    condicao?: string = '';
    preco?: number = 0;
    precoDesconto?: number = 0;
    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            this.nome = this.item?.nome ?? '';
            this.descricao = this.item?.descricao ?? '';
            this.tamanho = this.item?.tamanho ?? '';
            this.marca = this.item?.marca ?? '';
            this.condicao = this.item?.condicao ?? '';
            this.preco = this.item?.preco ?? 0;
            this.precoDesconto = this.item?.precoDesconto ?? 0;

            this.titleService.setTitle(`${this.item?.nome ?? ''} — GeekSpot em Angular`);
        }
    }

    @ViewChild('inputNome', { static: false }) inputNome: ElementRef | undefined;
    @ViewChild('inputDescricao', { static: false }) inputDescricao: ElementRef | undefined;
    @ViewChild('inputMarca', { static: false }) inputMarca: ElementRef | undefined;
    @ViewChild('inputCondicao', { static: false }) inputCondicao: ElementRef | undefined;
    @ViewChild('inputPreco', { static: false }) inputPreco: ElementRef | undefined;
    @ViewChild('inputPrecoDesconto', { static: false }) inputPrecoDesconto: ElementRef | undefined;
    async handleAtualizar(): Promise<boolean | void> {
        if (!this.handleVerificacoes()) {
            return false;
        }

        this.loadingBar.start();

        const dto = {
            itemId: this.item?.itemId,
            nome: this.nome,
            descricao: this.descricao,
            tamanho: this.tamanho,
            marca: this.marca,
            condicao: this.condicao,
            preco: this.preco,
            precoDesconto: this.precoDesconto
        } as unknown as iItem;

        const [dados, status] = await this.itemService.atualizar(CONSTS_ITENS.API_URL_PUT_ATUALIZAR, dto) as [any, number];

        if (!dados || dados?.erro) {
            this.toastr.error(dados?.mensagemErro ?? 'Algo deu errado! Houve algum problema internamente', '');
            this.loadingBar.complete();
            return false;
        }

        this.toastr.success('Dados atualizados com sucesso', '');
        this.loadingBar.complete();
    }

    handleVerificacoes() {
        if (!this.nome) {
            this.inputNome?.nativeElement.focus();
            this.toastr.error('O campo <b>nome</b> está vazio!', '');
            return false;
        }

        if (!this.descricao) {
            this.inputDescricao?.nativeElement.focus();
            this.toastr.error('O campo <b>descrição</b> está vazio!', '');
            return false;
        }

        if (!this.marca) {
            this.inputMarca?.nativeElement.focus();
            this.toastr.error('O campo <b>marca</b> está vazio!', '');
            return false;
        }

        if (!this.condicao) {
            this.inputCondicao?.nativeElement.focus();
            this.toastr.error('O campo <b>condição</b> está vazio!', '');
            return false;
        }

        if (!this.preco) {
            this.inputPreco?.nativeElement.focus();
            this.toastr.error('O campo <b>preço</b> está vazio!', '');
            return false;
        }

        if (!this.precoDesconto) {
            this.inputPrecoDesconto?.nativeElement.focus();
            this.toastr.error('O campo <b>desconto</b> está vazio!', '');
            return false;
        }

        return true;
    }

}