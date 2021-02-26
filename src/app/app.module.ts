import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VmessageModule} from './vmessage/vmessage.module';
import {NavbarModule} from './navbar/navbar.module';
import {AnunciosModule} from './anuncios/anuncios.module';
import {MainModule} from './main/main.module';
import {UsuarioFormModule} from './usuarios/usuario-form/usuario-form.module';
import {UsuarioModule} from './usuarios/usuario/usuario.module';
import {UsuariosModule} from './usuarios/usuario-list/usuarios/usuarios.module';
import {UsuarioListModule} from './usuarios/usuario-list/usuario-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    UsuariosModule,
    VmessageModule,
    NavbarModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
