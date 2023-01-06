import { Game } from "../model/game";
import { Player } from "../model/player";
import { PlayerRound } from "../model/player-round";
import { GameHandler } from "./game-handler";

export class GameStateHandler extends GameHandler 
{
    static readonly empty=new GameStateHandler();
    
    currentPlayerIndex: number=this.emptyCurrentPlayerIndex();
    currentPlayer: Player=this.emptyCurrentPlayer();
    currentPlayerRound: PlayerRound=this.emptyCurrentPlayerRound();

    constructor()
    {
      super();
      this.updateRoundStateData();
    }

    override setValue(newValue: Game|null)
    {
      super.setValue(newValue);
      this.updateRoundStateData();
    }

    override valueChanged(): void
    {
        super.valueChanged();
        this.updateRoundStateData();
    }

    private updateRoundStateData(): void
    {
        if(this.empty)
        {
            this.currentPlayerIndex=this.emptyCurrentPlayerIndex();
            this.currentPlayer=this.emptyCurrentPlayer();
            this.currentPlayerRound=this.emptyCurrentPlayerRound();
        }
        else
        {            
            this.currentPlayerIndex=this.createCurrentPlayerIndex();
            this.currentPlayer=this.createCurrentPlayer();
            this.currentPlayerRound=this.createCurrentPlayerRound();
        }
    }

    private emptyCurrentPlayerIndex(): number
    {
        return -1;
    }
    
    private createCurrentPlayerIndex(): number
    {
        for(let i=0; i<this.players.length; i++)
        {
            const playerIndex=this.currentRound.getAbsolutePlayerIndex(i);            
            const player=this.getPlayer(playerIndex);
            const playerRound=player.getRound(this.currentRound.index);
            if(playerRound.expectedSelected)
            {
                return playerIndex;
            }
        }
        for(let i=0; i<this.players.length; i++)
        {
            const playerIndex=this.currentRound.getAbsolutePlayerIndex(i);
            const player=this.getPlayer(playerIndex);
            const playerRound=player.getRound(this.currentRound.index);
            if(playerRound.actualSelected)
            {
                return playerIndex;
            }
        }
        return -1;
    }

    private emptyCurrentPlayer(): Player
    {
        return Player.empty;
    }
  
    private createCurrentPlayer(): Player
    {
        return this.getPlayer(this.currentPlayerIndex);
    }

    private emptyCurrentPlayerRound(): PlayerRound
    {
        return PlayerRound.empty;
    }
  
    private createCurrentPlayerRound(): PlayerRound
    {
        return this.currentPlayer.getRound(this.currentRound.index);
    }
  
}
