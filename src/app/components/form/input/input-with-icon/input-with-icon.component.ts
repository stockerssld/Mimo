import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.sass']
})
export class InputWithIconComponent implements OnInit {

  @Input() DataInput
  constructor() { }

  ngOnInit(): void {
    console.log(this.DataInput.placeholder)
  }

}
