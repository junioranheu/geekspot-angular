// Pacotes;
import { NgModule } from '@angular/core';

// Módulos;
import { SharedModule } from 'src/modules/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

// Componentes;
import { AdmAtualizarItemComponent } from 'src/components/item/adm-atualizar-item/adm-atualizar-item.component';
import { ModuloAlternativoComponent } from 'src/components/modulo/modulo-alternativo/modulo-alternativo.component';
import { TabWrapperComponent } from 'src/components/tabs/tab-wrapper/tab-wrapper.component';
import { TabComponent } from 'src/components/tabs/tab/tab.component';

// Telas;
import { ErroComponent } from 'src/app/erro/erro.component';
import { GraficosComponent } from 'src/app/graficos/graficos.component';
import { IndexComponent } from 'src/app/index/index.component';
import { ItemComponent } from 'src/app/item/item.component';
import { TelaIndisponivelComponent } from 'src/app/tela-indisponivel/tela-indisponivel.component';
import { CriarContaComponent } from 'src/app/usuario/criar-conta/criar-conta.component';
import { EntrarComponent } from 'src/app/usuario/entrar/entrar.component';

@NgModule({
    declarations: [
        IndexComponent,
        EntrarComponent,
        ModuloAlternativoComponent,
        CriarContaComponent,
        ErroComponent,
        ItemComponent,
        AdmAtualizarItemComponent,
        TelaIndisponivelComponent,
        GraficosComponent,
        TabComponent,
        TabWrapperComponent
    ],
    imports: [
        SharedModule,
        MainRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class MainModule { }