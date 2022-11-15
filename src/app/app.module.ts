import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingBarModule } from '@ngx-loading-bar/core'; // https://www.npmjs.com/package/@ngx-loading-bar/core
import { DragScrollModule } from 'ngx-drag-scroll'; // https://www.npmjs.com/package/ngx-drag-scroll
import { ToastrModule } from 'ngx-toastr'; // https://www.npmjs.com/package/ngx-toastr

import { UsuarioContext } from 'src/utils/context/usuarioContext';

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
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        LoadingBarModule,
        DragScrollModule
    ],
    providers: [UsuarioContext], // https://stackoverflow.com/questions/36158848/how-can-i-declare-a-global-variable-in-angular-2-typescript
    bootstrap: [AppComponent]
})
export class AppModule { }
