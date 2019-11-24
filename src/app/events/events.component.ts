import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [
    {title: 'Assista Star Wars no cinema',
      description: 'A melhor experiência de cinema sem filas e cartões de crédito',
      image: '../assets/movie1.jpg',
      id: '1'
    }, { title: 'Confira o DJ Alok na balada',
      description: 'O melhor DJ nacional, curta a vontade',
      image: '../assets/party1.png',
      id: '2'
    }, { title: 'Assista ao mais novo musical',
      description: 'Musical mais emocionante segundo pelos críticos.',
      image: '../assets/teather1.png',
      id: '3'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
