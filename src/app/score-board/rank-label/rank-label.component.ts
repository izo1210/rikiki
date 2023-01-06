import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-label',
  templateUrl: './rank-label.component.html',
  styleUrls: ['./rank-label.component.sass']
})
export class RankLabelComponent implements OnInit {
  @Input() rank: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
