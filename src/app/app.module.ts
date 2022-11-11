import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarFiltroComponent } from '../components/navbar/outros/navbar-filtro/navbar-filtro.component';
import { NavbarSmallComponent } from '../components/navbar/outros/navbar-small/navbar-small.component';
import { NavbarPadraoComponent } from '../components/navbar/padrao/navbar-padrao/navbar-padrao.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EntrarComponent,
    NavbarPadraoComponent,
    NavbarFiltroComponent,
    NavbarSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
