import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[];


  @Input() filter: string;
  constructor(private serviceUsuario: UsuarioService) {} // Injeção do serviço, feita sempre que eu precisar utilizar o service.

  ngOnInit(): void {           // Pega os dados da api e salva no variavel.
   this.serviceUsuario.listar().subscribe(usuarios => {
     this.usuarios = usuarios;
   });
  }

}
