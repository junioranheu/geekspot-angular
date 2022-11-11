import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarFiltroComponent } from '../components/navbar/outros/navbar-filtro/navbar-filtro.component';
import { NavbarSmallComponent } from '../components/navbar/outros/navbar-small/navbar-small.component';
import { NavbarPadraoComponent } from '../components/navbar/padrao/navbar-padrao/navbar-padrao.component';
import { SvgLogoComponent } from '../components/svg/svg-logo/svg-logo.component';
import { SvgSetaUmComponent } from '../components/svg/svg-seta-um/svg-seta-um.component';
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
    NavbarSmallComponent,
    SvgLogoComponent,
    SvgSetaUmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
