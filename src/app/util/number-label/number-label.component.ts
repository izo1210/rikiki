import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-label',
  templateUrl: './number-label.component.html',
  styleUrls: ['./number-label.component.sass']
})
export class NumberLabelComponent implements OnInit {
  @Input() value?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() add: number=0;
  @Input() prefix: string="";
  @Input() postfix: string="";
  @Input() selected: boolean=false;
  @Input() emptyText: string="";

  constructor() { }

  ngOnInit(): void {
  }

  get text(): string
  {
    if(this.value==null) return this.emptyText;
    if(this.min!=null && this.value<this.min) return this.emptyText;
    if(this.max!=null && this.value>this.max) return this.emptyText;
    return this.prefix+(this.value+this.add)+this.postfix;
  }

}
