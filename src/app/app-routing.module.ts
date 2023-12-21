import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainModule = () => import('src/modules/main/main.module').then(x => x.MainModule);
// const mobileModule = () => import('./modules/mobile/mobile.module').then(x => x.MobileModule);

const routes: Routes = [
    { path: '', loadChildren: mainModule },
    // { path: 'mobile', loadChildren: mobileModule },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}