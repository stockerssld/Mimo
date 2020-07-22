import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-with-icons',
  templateUrl: './button-with-icons.component.html',
  styleUrls: ['./button-with-icons.component.sass']
})
export class ButtonWithIconsComponent implements OnInit {

  @Input() DataButton
  constructor() { }

  ngOnInit(): void {
  }

}
