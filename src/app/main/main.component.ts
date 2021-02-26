import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  filter: string;
  constructor() { }

  ngOnInit(): void {
  }

  getFilter(event: string): void {  // Eventos são prefixados com "$".
      this.filter = event;
  }
}
