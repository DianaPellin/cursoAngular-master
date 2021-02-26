import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Anuncio} from '../anuncio/anuncio';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.scss']
})
export class AnuncioListComponent implements OnInit {
  anuncios: Anuncio[];

  @Input() filter: string;
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.anuncios = this.activatedRouter.snapshot.data['anuncios'];
  }

}
