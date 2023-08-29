import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { ErroComponent } from './erro/erro.component';
import { GraficosComponent } from './graficos/graficos.component';
import { IndexComponent } from './index/index.component';
import { ItemComponent } from './item/item.component';
import { TelaIndisponivelComponent } from './tela-indisponivel/tela-indisponivel.component';
import { CriarContaComponent } from './usuario/criar-conta/criar-conta.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';

const tituloPadrao = '— GeekSpot em Angular';

const routes: Routes = [
    { path: CONSTS_TELAS.INDEX, component: IndexComponent, title: `Início ${tituloPadrao}` },
    { path: CONSTS_TELAS.ENTRAR, component: EntrarComponent, title: `Entrar ${tituloPadrao}` },
    { path: CONSTS_TELAS.CRIAR_CONTA, component: CriarContaComponent, title: `Criar conta ${tituloPadrao}` },
    { path: CONSTS_TELAS.ERRO, component: ErroComponent, title: `Ops ${tituloPadrao}` },
    { path: CONSTS_TELAS.INDISPONIVEL, component: TelaIndisponivelComponent, title: `Ops ${tituloPadrao}` },
    { path: CONSTS_TELAS.GRAFICOS, component: GraficosComponent, title: `Gráficos ${tituloPadrao}` },

    // URL com ID dinâmico: https://angular.io/tutorial/toh-pt5#delete-hero-details-from-heroescomponent
    { path: `${CONSTS_TELAS.ITEM}/:id`, component: ItemComponent },

    // Default;
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }