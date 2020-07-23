import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playgrounds-list',
  templateUrl: './playgrounds-list.component.html',
  styleUrls: ['./playgrounds-list.component.sass']
})
export class PlaygroundsListComponent implements OnInit {
  @Input() playground
  constructor() { }

  ngOnInit(): void {
  }

}
