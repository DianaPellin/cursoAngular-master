import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioModule} from './usuario/usuario.module';
import {UsuarioFormModule} from './usuario-form/usuario-form.module';
import {UsuarioListModule} from './usuario-list/usuario-list.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioModule,
    UsuarioFormModule,
    UsuarioListModule
  ]
})
 export class UsuariosModule { }
