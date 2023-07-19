import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent {
  @Input() title!:string;
  @ViewChild('content') content!:ElementRef<HTMLDivElement>;
  active:boolean = false;
  constructor(private renderer:Renderer2){}
  toggleContent(){
    this.active = !this.active;
    if(this.active){
      this.renderer.setStyle(
        this.content.nativeElement,
        'maxHeight',
        this.content.nativeElement.scrollHeight.toString()+'px'
      )
    }
    else{
      this.renderer.setStyle(
        this.content.nativeElement,
        'maxHeight',
        0
      )
    }
  }
}
