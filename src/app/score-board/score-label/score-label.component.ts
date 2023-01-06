import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-label',
  templateUrl: './score-label.component.html',
  styleUrls: ['./score-label.component.sass']
})
export class ScoreLabelComponent implements OnInit {
  @Input() score: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
