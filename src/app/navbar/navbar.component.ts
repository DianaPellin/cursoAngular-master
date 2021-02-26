import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() filterOutput = new EventEmitter<string>(); // O output vai emitir um evento.
  filter = ''; // Não esqueça! É "=", não ":".
  filterSub: any; // Vai ser usado para a pesquisa do usuário.
  constructor() { }

  ngOnInit(): void {
  }

  onKey($event: KeyboardEvent): void {
    this.filter = ($event.target as HTMLInputElement).value;
    this.filterOutput.emit(this.filter); // O .emit vai pegar o valor que está guardado em this.filter e emití-lo na tela.
  }
}
