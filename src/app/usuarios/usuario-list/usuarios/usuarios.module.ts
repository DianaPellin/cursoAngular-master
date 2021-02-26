import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UsuariosComponent} from './usuarios.component';
import {UsuarioComponent} from '../../usuario/usuario.component';
import {UsuarioModule} from '../../usuario/usuario.module';

@NgModule({
    declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    UsuarioModule
  ],
  exports: [UsuariosComponent]

})
export class UsuariosModule {
}

