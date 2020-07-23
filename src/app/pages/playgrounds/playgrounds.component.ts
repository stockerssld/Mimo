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

  newPlayground=[
    {
      title:'Javascrip program',
      language:["js","html5",],
      description:"An empty JavaScript file ideal for practicing the basics of coding."
    },
    {
      title:'Simple web site',
      language:[
        "js","html5", "css"
      ],
      description:"An empty website containing HTML, CSS & JavaScript files."
    },
    {
      title:'python program',
      language:["python"],
      description:"An empty Python file ideal for practicing the basics of coding."
    }
  ]
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
