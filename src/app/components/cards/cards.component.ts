import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  @Input() DataCard:  any;

  constructor() {}

  ngOnInit(): void {

  }
}
