import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AnuncioListComponent} from './anuncio-list.component';
import {FilterByTitlePipe} from './filter-by-title.pipe';
import {AnuncioModule} from '../anuncio/anuncio.module';
import {AnunciosComponent} from './anuncios/anuncios.component';


@NgModule({
  declarations: [AnuncioListComponent, FilterByTitlePipe, AnunciosComponent],
  exports: [
    AnuncioListComponent,
    AnunciosComponent
  ],

    imports: [
        CommonModule,
        RouterModule,
        AnuncioModule
    ]
})
export class AnuncioListModule{
}
