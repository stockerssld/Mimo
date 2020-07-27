import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-section-1',
  templateUrl: './welcome-section-1.component.html',
  styleUrls: ['./welcome-section-1.component.sass']
})
export class WelcomeSectionSection1 implements OnInit {

  constructor() { }

  counterProgress:number=1
  imagenCount:number=1

  ngOnInit(): void {
  }
}
