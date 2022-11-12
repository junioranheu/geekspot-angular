import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'; // https://www.npmjs.com/package/ngx-toastr

import { NavbarFiltroComponent } from '../components/navbar/outros/navbar-filtro/navbar-filtro.component';
import { NavbarSmallComponent } from '../components/navbar/outros/navbar-small/navbar-small.component';
import { NavbarPadraoComponent } from '../components/navbar/padrao/navbar-padrao/navbar-padrao.component';
import { BotaoComponent } from '../components/outros/botao/botao.component';
import { SvgAjudaComponent } from '../components/svg/svg-ajuda/svg-ajuda.component';
import { SvgLogoComponent } from '../components/svg/svg-logo/svg-logo.component';
import { SvgLupaComponent } from '../components/svg/svg-lupa/svg-lupa.component';
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
        SvgSetaUmComponent,
        SvgLupaComponent,
        SvgAjudaComponent,
        BotaoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
