import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnuncioService} from '../anuncio/anuncio.service';
import {Anuncio} from '../anuncio/anuncio';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: 'anuncio-form.component.html',
  styleUrls: ['anuncio-form.component.scss']
  // O component é usado para a injeção de dependências.
})

export class AnuncioFormComponent implements OnInit {
  anuncioForm: FormGroup;
  anuncio: Anuncio = new Anuncio();
  url: string;

  constructor(private formBuilder: FormBuilder,
              private anuncioService: AnuncioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.anuncioForm = this.formBuilder.group({
      url: ['', [Validators.minLength(10), Validators.required]],
      titulo: ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      mensagem: ['', [Validators.minLength(3), Validators.maxLength(300), Validators.required]]
    });

    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.anuncioService.findById(id).subscribe(anuncio => {
        this.anuncio = anuncio;
        this.url = anuncio.urlImagem;
        this.anuncioForm.controls['url'].setValue(this.anuncio.urlImagem);
        this.anuncioForm.controls['titulo'].setValue(this.anuncio.titulo);
        this.anuncioForm.controls['mensagem'].setValue(this.anuncio.mensagem);
      });
    }
  }

  // O OnInit é responsável por fazer as validações dos campos (textareas), definindo um minimo e um máximo
  // de caracteres.


  salvarAnuncio(): void {
    this.anuncio.titulo = this.anuncioForm.get('titulo')?.value;
    this.anuncio.mensagem = this.anuncioForm.get('mensagem')?.value;
    this.anuncio.urlImagem = this.anuncioForm.get('url')?.value;
    this.anuncioService.cadastrar(this.anuncio).subscribe(() => {
      this.router.navigate(['list/a']);
    });
    // O salvar aúncio é uma função responsável por pegar os valores de anuncioForm e, posteriormente
    // implementar o botão.
  }

  excluir(): void{
    this.anuncioService.delete(this.anuncio.id).subscribe(() => {
      this.router.navigate(['list/a']);
    });
  }
}

