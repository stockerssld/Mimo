import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.sass']
})
export class OptionCardComponent implements OnInit {

  constructor() { }

  @Input() DataOptionCard
  ngOnInit(): void {
  }

}
