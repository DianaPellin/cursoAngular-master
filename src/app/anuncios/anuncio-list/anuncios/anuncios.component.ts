import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Anuncio} from '../../anuncio/anuncio';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})

export class AnunciosComponent implements OnInit, OnChanges{
  @Input() anuncios: Anuncio[];
  rows: any[];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rows = this.groupColumns(this.anuncios);
  }

  groupColumns(anuncios: Anuncio[]): any[] {
    const newRows = [];
    for( let i = 0; i < anuncios.length; i = i + 4) {
       newRows.push(anuncios.slice(i, i + 4));
    }
    return newRows;
  }
}
