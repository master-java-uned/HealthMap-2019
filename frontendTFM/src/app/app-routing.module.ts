import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { MenuComponent } from './menu/menu.component'


const routes: Routes = [
   { path: '', component: PaginaLoginComponent },
   { path: 'login', component: PaginaLoginComponent },
   { path: 'menu', component: MenuComponent },
   { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }