import { Component, OnInit, Renderer2, OnChanges, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit, OnDestroy, OnChanges {

  // @ViewChild('carousel') carousel : ElementRef

  @Output()onDecrease= new EventEmitter<number>()

  @Input() init : number = null

  private countdownTimeRef: any=null
  public counter :number = 0


  ngOnInit(): void {
    this.startChangeimage()
  }

  startChangeimage():void{
    if (this.init>=0) {
      this.clearTimeout()
      this.counter =this.init
      this.doCountdown()
    }
  }

  doCountdown():void{

    this.countdownTimeRef = setTimeout(() => {
      this.counter =this.counter==5?1:this.counter+1
      this.processCount()
    }, 5000);
  }

  private clearTimeout():void{
      if(this.countdownTimeRef){
        clearTimeout(this.countdownTimeRef)
        this.countdownTimeRef=null
      }
  }

  processCount():void{
    this.clearTimeout()
    this.onDecrease.emit(this.counter)
    if(this.counter==5){
      this.doCountdown( )

    }else{
      this.doCountdown( )
    }
  }
  ngOnDestroy():void{
    this.clearTimeout()
  }
  ngOnChanges(changes):void{
    // console.log(changes.init.currentValue)
    this.startChangeimage()
  }
}
