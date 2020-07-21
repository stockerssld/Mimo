import { Component, OnInit, Input } from '@angular/core';
import { Chapter } from './../../models/chapter.model';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.sass']
})
export class CircleProgressComponent implements OnInit {
  @Input() chapter: Chapter

  constructor() { }

  ngOnInit(): void {
    console.log(this.chapter)
  }

}
