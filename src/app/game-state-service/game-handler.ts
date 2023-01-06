import { BehaviorSubject } from "rxjs";
import { LocalStorageWrapper } from "src/app/util/local-storage-wrapper/local-storage-wrapper";
import { Safe } from "src/app/util/safe/safe";
import { Game } from "../model/game";
import { Player } from "../model/player";
import { Undo } from "../util/undo/undo";
import { Round } from "./round";

export class GameHandler extends LocalStorageWrapper<Game> {
    empty: boolean=this.emptyEmpty();
    players: Player[]=this.emptyPlayers();
    maxCardsInHand: number=this.emptyMaxCardsInHand();
    rounds: Round[]=this.emptyRounds();
    currentRound: Round=this.emptyCurrentRound();
    finished: boolean=this.emptyFinished();

    constructor()
    {
      super(
        "rikiki",
        ()=>Game.empty,
        (object: any)=>new Game(object),
      );
      this.updateGameData();
    }

    override setValue(newValue: Game|null)
    {
      super.setValue(newValue);
      this.updateGameData();
    }

    override valueChanged(): void
    {
        super.valueChanged();
        this.updateGameData(); //TODO not necessary?
    }

    private updateGameData(): void
    {
      this.players=this.createPlayers();
      this.empty=this.createEmpty();
      if(this.empty)
      {
        this.maxCardsInHand=this.emptyMaxCardsInHand();
        this.rounds=this.emptyRounds();
        this.currentRound=this.emptyCurrentRound();
        this.finished=this.emptyFinished();
      }
      else
      {
        this.maxCardsInHand=this.createMaxCardsInHand();
        this.rounds=this.createRounds();
        this.currentRound=this.createCurrentRound();
        this.finished=this.createFinished();
      }
    }

    private createPlayers(): Player[]
    {
      return this.getValue().players;
    }

    private emptyPlayers(): Player[]
    {
      return [];
    }

    private createEmpty(): boolean
    {
      return this.players.length===0;
    }

    private emptyEmpty(): boolean
    {
      return true;
    }

    private createMaxCardsInHand(): number
    {
        const newMaxCardsInHand: number=Math.trunc(52/this.players.length);
        if(newMaxCardsInHand<1) return 1;
        if(newMaxCardsInHand>10) return 10;
        return newMaxCardsInHand;
    }

    private emptyMaxCardsInHand(): number
    {
      return 0;
    }

    private createRounds(): Round[]
    {
      const roundsLength=(this.maxCardsInHand-1)*2+this.players.length;
      const newRounds: Round[]=[];
      for(let roundIndex=0; roundIndex<roundsLength; roundIndex++)
      {
        newRounds.push(new Round(roundIndex, this.maxCardsInHand, this.players));
      }
      return newRounds;
    }

    private emptyRounds(): Round[]
    {
      return [];
    }

    private createCurrentRound(): Round
    {
      let newCurrentRound=this.getRound(this.getLastRoundIndex());

      if(newCurrentRound.finished)
      {
        if(newCurrentRound.index<this.rounds.length-1)
        {
          newCurrentRound=this.nextRound(newCurrentRound.index);
        }
      }

      if(newCurrentRound.index>=0)
      {
        newCurrentRound.updateRoundData();
      }

      return newCurrentRound;
    }

    private emptyCurrentRound(): Round
    {
      return Round.empty;
    }

    private createFinished(): boolean
    {
      if(this.currentRound.index<this.rounds.length-1) return false;
      return this.currentRound.finished;
    }

    private emptyFinished(): boolean
    {
      return true;
    }

    private nextRound(currentRoundIndex: number): Round
    {
      const nextRound=this.getRound(currentRoundIndex+1);
      this.players.forEach(player=>player.addRound());
      return nextRound;
    }

    private getLastRoundIndex(): number
    {
      const firstPlayer=this.getPlayer(0);
      const lastRoundIndex=firstPlayer.rounds.length-1;
      return lastRoundIndex;
    }

    getPlayer(playerIndex: number): Player
    {
      return Safe.get(this.players, playerIndex, ()=>Player.empty);
    }

    getRound(roundIndex: number): Round
    {
      return Safe.get(this.rounds, roundIndex, ()=>Round.empty);
    }

}
