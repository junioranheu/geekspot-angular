import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import CONSTS_TELAS from 'src/utils/consts/outros/telas';
import { IndexComponent } from './index/index.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';

const routes: Routes = [
  { path: CONSTS_TELAS.INDEX, component: IndexComponent },
  { path: CONSTS_TELAS.ENTRAR, component: EntrarComponent },
  { path: CONSTS_TELAS.AJUDA, component: EntrarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
