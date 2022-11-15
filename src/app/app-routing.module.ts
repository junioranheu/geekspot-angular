import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { IndexComponent } from './index/index.component';
import { CriarContaComponent } from './usuario/criar-conta/criar-conta.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';

const tituloPadrao = '— GeekSpot em Angular';

const routes: Routes = [
    { path: CONSTS_TELAS.INDEX, component: IndexComponent, title: `Início ${tituloPadrao}` },
    { path: CONSTS_TELAS.ENTRAR, component: EntrarComponent, title: `Entrar ${tituloPadrao}` },
    { path: CONSTS_TELAS.CRIAR_CONTA, component: CriarContaComponent, title: `Criar conta ${tituloPadrao}` },
    { path: CONSTS_TELAS.AJUDA, component: EntrarComponent, title: `Ajuda ${tituloPadrao}` },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
