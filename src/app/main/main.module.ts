import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from './main.component';
import {AnuncioListModule} from '../anuncios/anuncio-list/anuncio-list.module';
import {NavbarModule} from '../navbar/navbar.module';
import {UsuarioListModule} from '../usuarios/usuario-list/usuario-list.module';

@NgModule({
  declarations: [ MainComponent ],
  imports: [CommonModule,
    AnuncioListModule,
    NavbarModule
  ]
})
  export class MainModule {}
