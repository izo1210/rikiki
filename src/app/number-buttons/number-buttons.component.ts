import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberButtons } from './number-buttons';

@Component({
  selector: 'app-number-buttons',
  templateUrl: './number-buttons.component.html',
  styleUrls: ['./number-buttons.component.sass']
})
export class NumberButtonsComponent implements OnInit {
  @Input() model: NumberButtons=NumberButtons.empty;
  @Output() select: EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: number)
  {
    this.select.emit(value);
  }

}
