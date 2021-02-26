import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Anuncio} from './anuncio';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AnuncioService {

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Anuncio[]> { // Observable: Irá observar um evento, nesse caso, que ocorre na api.
    return this.http.get<Anuncio[]>(environment.api + '/anuncios');
  }

  // O listar é o método responsável por exibir a lista de anúncios.
  // O GET pega os valores do array.

  cadastrar(anuncio: Anuncio): Observable<void> {
    if (anuncio.id) {
      return this.http.put<void>(environment.api + '/anuncios/' + anuncio.id, anuncio);
    }
    return this.http.post<void>(environment.api + '/anuncios', anuncio);
  }

  // O POST é responsável por "postar" itens no banco de dados.

  findById(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(`${environment.api}/anuncios/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/anuncios/${id}`);
    // O delete retorna void, pois, não é possivel deletar algo que não existe.
  }
}

