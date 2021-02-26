import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Separa-se os imports do angular e os nossos, boa prática.
import {AnuncioComponent} from './anuncios/anuncio/anuncio.component';
import {AnuncioListResolver} from './anuncios/anuncio-list/anuncio-list.resolver';
import {AnuncioFormComponent} from './anuncios/anuncio-form/anuncio-form.component';
import {MainComponent} from './main/main.component';
import {UsuarioComponent} from './usuarios/usuario/usuario.component';
import {UsuarioFormComponent} from './usuarios/usuario-form/usuario-form.component';
import {UsuarioListComponent} from './usuarios/usuario-list/usuario-list.component';

const routes: Routes = [
  {path: 'a/add', component: AnuncioFormComponent},
  {path: 'a/edit/:id', component: AnuncioFormComponent},
  {path: 'u/add', component: UsuarioFormComponent},
  {path: 'u/edit/:id', component: UsuarioFormComponent},
  {path: 'u/list', component: UsuarioListComponent},
  {path: '**', component: MainComponent,
    resolve: {anuncios: AnuncioListResolver}} // Espera os anúncios carregarem antes de exibir mensagem de erro.
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

