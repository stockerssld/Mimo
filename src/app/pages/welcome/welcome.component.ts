import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  counterProgress:number=1
  imagenCount:number=1

  ngOnInit(): void {
  }

  updateProgress($event):void{
    this.counterProgress= $event
    this.imagenCount= $event
  }


  changeProgressView($event):void{
    this.imagenCount= $event
    this.counterProgress= $event

  }
}
