import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{LoginComponent} from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import{interceptorProvider} from './interceptors/rejilla-interceptor.service';
import { MostrarRejillaComponent } from './mostrar-rejilla/mostrar-rejilla.component';
import { ConstructosComponent } from './constructos/constructos.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdminComponent,
    UserComponent,
    MostrarRejillaComponent,
    ConstructosComponent
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
