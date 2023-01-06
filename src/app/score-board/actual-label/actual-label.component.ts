import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-actual-label',
  templateUrl: './actual-label.component.html',
  styleUrls: ['./actual-label.component.sass']
})
export class ActualLabelComponent implements OnInit, AfterViewInit {
  @ViewChild("out") out!: ElementRef;
  @Input() value: number=-1;
  @Input() selected: boolean=false;

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(!this.selected) return;
    //player-label scrolls, uncomment only if looks bad
    //setTimeout(()=>this.out?.nativeElement?.scrollIntoView({ behavior: "smooth", block: "start" }, 200));
  }

  get text(): string|null
  {
    if(this.value>=0) return this.value.toString();
    if(this.selected) return "Ütés?";
    return null;
  }

}
