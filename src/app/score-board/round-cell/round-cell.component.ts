import { Component, Input, OnInit } from '@angular/core';
import { PlayerRound } from '../../model/player-round';

@Component({
  selector: 'app-round-cell',
  templateUrl: './round-cell.component.html',
  styleUrls: ['./round-cell.component.sass']
})
export class RoundCellComponent implements OnInit {
  @Input() model: PlayerRound=PlayerRound.empty;
  @Input() selected: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  get expectedSelected(): boolean
  {
    return this.selected && this.model.expectedSelected;
  }

  get actualSelected(): boolean
  {
    return this.selected && this.model.actualSelected;
  }

}
