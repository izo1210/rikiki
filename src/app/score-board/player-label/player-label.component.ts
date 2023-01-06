import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-player-label',
  templateUrl: './player-label.component.html',
  styleUrls: ['./player-label.component.sass']
})
export class PlayerLabelComponent implements OnInit, AfterViewInit {
  @ViewChild("out") out!: ElementRef;
  @Input() name: string="";
  @Input() index: number=-1;
  @Input() selected: boolean=false;
  @Input() first: boolean=false;
  @Input() last: boolean=false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(!this.selected) return;
    setTimeout(()=>this.out?.nativeElement?.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
  }

  get backgroundColor(): string
  {
    if(!this.selected) return "";
    const hue: number=(this.index*105)%360;
    return "hsl("+hue+", 80%, 30%)";
  }

  get text(): string
  {
    let text=this.name;
    if(this.first) text=text+" kezd";
    if(this.last) text=text+" oszt";
    return text;
  }

}
