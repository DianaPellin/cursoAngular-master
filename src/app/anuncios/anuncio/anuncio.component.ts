import {Component, Input, OnInit} from '@angular/core';

import {Anuncio} from './anuncio';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent implements OnInit {

  @Input() anuncio: Anuncio;
  constructor() { }

  ngOnInit(): void {
  }

}
