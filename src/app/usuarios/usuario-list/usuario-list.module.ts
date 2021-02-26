import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {UsuarioListComponent} from './usuario-list.component';
import {UsuariosModule} from './usuarios/usuarios.module';

@NgModule({
  declarations: [ UsuarioListComponent],
  exports: [ UsuarioListComponent ],
  imports: [CommonModule, UsuariosModule, RouterModule]
})
 export class UsuarioListModule {}
