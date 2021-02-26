import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Anuncio} from '../anuncio/anuncio';
import {AnuncioService} from '../anuncio/anuncio.service';
import {Injectable} from '@angular/core';

// O resolver foi usado para corrigir um bug na exibição da mensagem: "Não existem anúncios publicados".
@Injectable({providedIn: 'root'})
export class AnuncioListResolver implements Resolve<Observable<Anuncio[]>> {
  constructor(private  service: AnuncioService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    return this.service.listar();
  }

}
