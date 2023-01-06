import { Component, Input, OnInit } from '@angular/core';
import { PlayerCell } from './player-cell';

@Component({
  selector: 'app-player-cell',
  templateUrl: './player-cell.component.html',
  styleUrls: ['./player-cell.component.sass']
})
export class PlayerCellComponent implements OnInit {
  @Input() model: PlayerCell=PlayerCell.empty;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
