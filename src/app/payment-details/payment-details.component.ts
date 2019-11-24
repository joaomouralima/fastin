import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {
  sub: any
  selectEvent: any;
  id: number;

  url_avatar = '../assets/avatar1.png'

  events = [
    {title: 'Cinemax Star Wars',
      description: 'A melhor experiência de cinema sem filas e cartões de crédito',
      image: '../assets/movie1.jpg',
      id: '1',
      icons: [['fas', 'film'], ['fas', 'female'], ['fas', 'pizza-slice']],
      paymentValue: 'R$80',
      consumed: [{item: 'Pipoca', value: 'R$25'}, {item: 'Ticket', value: 'R$40'},
                  {item: 'Refrigerante', value: 'R$15'}]
    }, { title: 'Confira o DJ Alok na balada',
      description: 'O melhor DJ nacional, curta a vontade',
      image: '../assets/party1.png',
      id: '2',
      icons: [['fas', 'cocktail'], ['fas', 'female']],
      consumed: [{item: 'Entrada', value: 'R$70'}, {item: 'Drink', value: 'R$22'}],
      paymentValue: 'R$92'
    }, { title: 'Assista ao mais novo musical',
      description: 'Musical mais emocionante segundo pelos críticos.',
      image: '../assets/teather1.png',
      id: '3',
      icons: [['fas', 'female']],
      paymentValue: 'R$55',
      consumed: [{item: 'Entrada', value: 'R$55'}]}
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.selectEvent = this.events.find(e => e.id == params['id'])
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
