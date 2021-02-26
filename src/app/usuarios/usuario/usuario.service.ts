import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Usuario} from './usuario';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class UsuarioService {
    constructor(private http: HttpClient) {
    }

    listar(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(environment.api + '/usuario');
    }

  cadastrar(usuario: Usuario): Observable<void> {
      if (usuario.id) {
        return this.http.put<void>(environment.api + '/usuario/' + usuario.id, usuario);
      }
      return this.http.post<void>(environment.api + '/usuario', Usuario);
    }

    findById(id: number): Observable<Usuario> {
      return this.http.get<Usuario>(environment.api + '/usuario/' + id);
  }

    delete(id: number): Observable<void> {
      return this.http.delete<void>(environment.api + '/usuario/' + id);
    }
}
