import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { interceptorProvider } from './interceptors/rejilla-interceptor.service';
import { MostrarRejillaComponent } from './mostrar-rejilla/mostrar-rejilla.component';
import { ConstructosComponent } from './constructos/constructos.component';
import { PuntuarRejillaComponent } from './puntuar-rejilla/puntuar-rejilla.component';
import { UserComponent } from './user/user.component';
import { ElementosComponent } from './elementos/elementos.component';
import { User2Component } from './user2/user2.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      MenuComponent,
      AdminComponent,
      UserComponent,
      MostrarRejillaComponent,
      ConstructosComponent,
      PuntuarRejillaComponent,
      ElementosComponent,
      User2Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [interceptorProvider],
   bootstrap: [AppComponent]
})
export class AppModule { }
