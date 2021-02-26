import {Pipe, PipeTransform} from '@angular/core';
import {Anuncio} from '../anuncio/anuncio';

@Pipe({name: 'filterByTitle'})
export class FilterByTitlePipe implements PipeTransform {
  transform(anuncios: Anuncio[], title: string): Anuncio[] {
    if (title){
      title = title.trim().toLowerCase();
      return anuncios.filter((anuncio) =>
        anuncio.titulo.toLowerCase().includes(title));
    }
    return anuncios;
  }
}
