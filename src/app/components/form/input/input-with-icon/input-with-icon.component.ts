import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.sass']
})
export class InputWithIconComponent implements OnInit {

  @Input() DataInput

  value: string = ''

  @Output() DataOutput = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {}

  setValue(input){
    this.DataOutput.emit(input.srcElement.value)
  }
}
