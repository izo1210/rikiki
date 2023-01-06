import { Component, Input, OnInit } from '@angular/core';
import { ScoreBoard } from './score-board';
import { ScoreBoardRow } from './score-board-row';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.sass']
})
export class ScoreBoardComponent implements OnInit {
  @Input() model: ScoreBoard=ScoreBoard.empty;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  get displayedColumns(): string[]
  {
    const newDisplayedColumns: string[]=["player"];
    this.model.rounds.forEach(round=>newDisplayedColumns.push("round"+round.index));
    newDisplayedColumns.push("spacer");
    return newDisplayedColumns;
  }

  columnSelected(columnIndex: number): boolean
  {
    return (columnIndex===0);
  }

  rowSelected(row: ScoreBoardRow): boolean
  {
    return row.playerCell.selected;
  }

  cellSelected(row: ScoreBoardRow, columnIndex: number): boolean
  {
    return this.rowSelected(row) && this.columnSelected(columnIndex);
  }

  getRound(columnIndex: number)
  {
    return this.model.rounds[columnIndex];
  }

}

