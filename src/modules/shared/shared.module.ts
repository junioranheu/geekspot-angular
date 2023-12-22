// Pacotes;
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ToastrModule } from 'ngx-toastr';

// Modulos;
import { MaterialModule } from '../material/material.module';

// Svg;
import { SvgAjudaComponent } from 'src/components/svg/svg-ajuda/svg-ajuda.component';
import { SvgHamburguerComponent } from 'src/components/svg/svg-hamburguer/svg-hamburguer.component';
import { SvgLogoComponent } from 'src/components/svg/svg-logo/svg-logo.component';
import { SvgLojaComponent } from 'src/components/svg/svg-loja/svg-loja.component';
import { SvgLupaComponent } from 'src/components/svg/svg-lupa/svg-lupa.component';
import { SvgSetaUmComponent } from 'src/components/svg/svg-seta-um/svg-seta-um.component';

// Componentes;
import { FooterComponent } from 'src/components/footer/padrao/footer/footer.component';
import { ModalComponent } from 'src/components/modal/modal.component';
import { ModalNavbarMobileComponent } from 'src/components/navbar/mobile/modal-navbar-mobile/modal-navbar-mobile.component';
import { NavbarMobileComponent } from 'src/components/navbar/mobile/navbar-mobile/navbar-mobile.component';
import { MenuUsuarioOpcoesComponent } from 'src/components/navbar/outros/menu-usuario-opcoes/menu-usuario-opcoes.component';
import { NavbarFiltroComponent } from 'src/components/navbar/outros/navbar-filtro/navbar-filtro.component';
import { NavbarSmallComponent } from 'src/components/navbar/outros/navbar-small/navbar-small.component';
import { NavbarPadraoComponent } from 'src/components/navbar/padrao/navbar-padrao/navbar-padrao.component';
import { BotaoComponent } from 'src/components/outros/botao/botao.component';

const modules = [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingBarModule,
    AgChartsAngularModule,
    DragScrollModule,
    RouterModule,
    ToastrModule.forRoot({ enableHtml: true, positionClass: 'toast-top-right' })
] as any[];

const components = [
    FooterComponent,
    NavbarSmallComponent,
    SvgSetaUmComponent,
    SvgAjudaComponent,
    SvgLogoComponent,
    SvgLupaComponent,
    SvgHamburguerComponent,
    SvgLojaComponent,
    NavbarMobileComponent,
    NavbarPadraoComponent,
    BotaoComponent,
    NavbarFiltroComponent,
    ModalNavbarMobileComponent,
    ModalComponent,
    MenuUsuarioOpcoesComponent
] as any[];

const services = [] as any[];

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...modules, ...components],
    providers: [...services]
})
export class SharedModule { }