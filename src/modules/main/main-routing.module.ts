import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from 'src/app/erro/erro.component';
import { GraficosComponent } from 'src/app/graficos/graficos.component';
import { IndexComponent } from 'src/app/index/index.component';
import { ItemComponent } from 'src/app/item/item.component';
import { TelaIndisponivelComponent } from 'src/app/tela-indisponivel/tela-indisponivel.component';
import { CriarContaComponent } from 'src/app/usuario/criar-conta/criar-conta.component';
import { EntrarComponent } from 'src/app/usuario/entrar/entrar.component';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';

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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }