import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../model/game';
import { GameState } from './game-state';
import { GameStateHandler } from './game-state-handler';
import { Player } from '../model/player';
import { Undo } from '../util/undo/undo';

@Injectable({
  providedIn: 'root'
})
export class GameStateService extends GameStateHandler {
  readonly gameState$: BehaviorSubject<GameState|null>=new BehaviorSubject<GameState|null>(null);
  readonly undoHandler=new Undo<Game|null>(()=>null, undoneGame=>this.undo(undoneGame));
  readonly redoHandler=new Undo<Game|null>(()=>null, redoneGame=>this.redo(redoneGame));

  constructor(
    private router: Router
  ) 
  {
    super();
    this.updateGameState();
  }

  override setValue(newValue: Game|null)
  {
    super.setValue(newValue);
    this.updateGameState();
  }

  override valueChanged(): void
  {
    super.valueChanged();
    this.updateGameState();
  }

  setNumber(n: number): void
  {
    if(this.gameState$.value==null) return;
    if(this.gameState$.value.numberButtons.isDisabled(n)) return;
    if(n<0) return;
    if(n>this.maxCardsInHand) return;

    this.redoHandler.clear();
    this.undoHandler.push(new Game(this.getValue()));
    this.currentPlayerRound.setNumber(n);
    this.valueChanged();
  }

  private undo(undoneGame: Game|null): void
  {
    if(undoneGame==null) return;
    this.redoHandler.push(new Game(this.getValue()));
    this.setValue(undoneGame);
  }

  private redo(redoneGame: Game|null): void
  {
    if(redoneGame==null) return;
    this.undoHandler.push(new Game(this.getValue()));
    this.setValue(redoneGame);
  }

  private updateGameState(): void
  {
    this.gameState$.next(new GameState(this));
  }

  navigateToNew(): void
  {
    this.router.navigate(["/new-game"]);
  }

  navigateToPlay(): void
  {
    this.router.navigate(["/play-game"]);
  }

  createNewGame(): void
  {
    this.navigateToNew();
  }

  startNewGame(players: Player[], confirmed: boolean): void
  {
    if(!confirmed) return;
    this.undoHandler.clear();
    this.setValue(new Game({players}));
    this.navigateToPlay();
  }



}
