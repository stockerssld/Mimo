import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

// @Directive({
//   selector:'[valueCarrusel]'
// })
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit,AfterViewInit {

  @ViewChild('carousel') carousel : ElementRef
  // constructor(private renderer: Renderer2, private ref:ElementRef) {
    // console.log(ref)
  constructor(){}


  ngOnInit(): void {

  }
  ngAfterViewInit(){
    console.log(this.carousel)
    // console.log(this.carousel.nativeElement.children)


    // setInterval(()=>{

    //   let value1=getComputedStyle(document.querySelector('p.carousel__snapper'),':before').getPropertyValue('content')
    //   let value2 = this.carousel.nativeElement.textContent
    //   console.log(value2, value1)
    // },100)
    // console.log(this.carousel.nativeElement.lastChild)
    // console.log(this.carousel.nativeElement.lastChild.style)
    // console.log(this.carousel.nativeElement.lastElementChild)
    // console.log(this.carousel.nativeElement.lastElementChild.lastElementChild)


  }

}
