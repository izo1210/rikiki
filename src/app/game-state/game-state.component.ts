import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberButtons } from '../number-buttons/number-buttons';
import { ScoreBoard } from '../score-board/score-board/score-board';
import { GameStateService } from '../game-state-service/game-state.service';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.sass']
})
export class GameStateComponent implements OnInit, OnDestroy {
  readonly emptyScoreBoard=ScoreBoard.empty;
  readonly emptyNumberButtons=NumberButtons.empty;
  private readonly keyupListener=this.onKeyup.bind(this);

  constructor(
    public gameService: GameStateService,
    ) { }

  ngOnInit(): void {
    document.addEventListener("keyup", this.keyupListener);
  }

  ngOnDestroy(): void {
    document.removeEventListener("keyup", this.keyupListener);
  }

  onKeyup(event: KeyboardEvent): void
  {
    if(event.key>="0" && event.key<="9")
    {
      this.gameService.setNumber(Number.parseInt(event.key));
    }
  }
}
