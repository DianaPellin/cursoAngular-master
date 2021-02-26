import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioComponent} from './anuncio.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AnuncioComponent],
  imports: [
    CommonModule,
    HttpClientModule // Serve para a conexão com a api, feita somente por um serviço,
                     // foi colocado dessa forma, pois é utlizado em anuncio.service.ts
  ],
  exports: [ AnuncioComponent ]
})
export class AnuncioModule{

}
