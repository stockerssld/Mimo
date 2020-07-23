import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playgrounds',
  templateUrl: './playgrounds.component.html',
  styleUrls: ['./playgrounds.component.sass']
})
export class PlaygroundsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonNewPlayGround={
    text:'NEW PLAYGOUND',
    background:'#3a579d',
    icon:'Plus'
  }

  playgrounds=[
    {
      number:"1",
      icons:[
        "js","html5",
      ],
      title:'Primer curso de angular',
      time:'15 min'
    },
    {
      number:"2",
      icons:[
        "html5",
      ],
      title:'Curso avanzado de HTML 5',
      time:'15 min'
    }
  ]
}
