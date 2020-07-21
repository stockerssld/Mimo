import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Project } from './../../models/project.mode';
import { Chapter } from './../../models/chapter.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  @Input() card:  Project;

  constructor() {}

  // Chapter: Chapter=
  //   {
  //     number: 2,
  //     title:'we personal, Welcome Home',
  //     progress: '10'
  //   }

  ngOnInit(): void {
    console.log(this.card)
  }
}
