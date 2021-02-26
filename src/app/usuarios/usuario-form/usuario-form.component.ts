import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../usuario/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})

export class UsuarioFormComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.minLength(3)],
      email: ['', Validators.minLength(3)],
      senha: ['', Validators.minLength(3)]
    });

    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.usuarioService.findById(id).subscribe(usuario => {
        this.usuario = usuario;
        this.usuarioForm.controls['nome'].setValue(this.usuario.nome);
        this.usuarioForm.controls['email'].setValue(this.usuario.email);
        this.usuarioForm.controls['senha'].setValue(this.usuario.senha);
      });
    }
  }

  salvarUsuario(): void {
    this.usuario.nome = this.usuarioForm.get('nome')?.value;
    this.usuario.email = this.usuarioForm.get('email')?.value;
    this.usuario.senha = this.usuarioForm.get('senha')?.value;
    this.usuarioService.cadastrar(this.usuario).subscribe( () => {
      this.router.navigate(['list/u']);
    });
  }

  excluir(): void {
    this.usuarioService.delete(this.usuario.id).subscribe( () => {
      this.router.navigate(['list/a']);
    });
  }
}
