import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  constructor() { }
  @Output()onDChangeForTimeLine= new EventEmitter<number>()
  @Output()onClickChange = new EventEmitter<void>()


  @Input() progress:number= 0

  ngOnInit(): void {

  }

  changeforProgress(progress): void{
    this.progress=progress
    this.onDChangeForTimeLine.emit(progress)
    this.onClickChange.emit()
  }

}
