import { Round } from "../../game-state-service/round";
import { GameStateHandler } from "../../game-state-service/game-state-handler";
import { PlayerCell } from "../player-cell/player-cell";
import { ScoreBoardRow } from "./score-board-row";

export class ScoreBoard {
    static readonly empty=new ScoreBoard();

    currentRoundIndex: number=-1;
    rounds: Round[]=[];
    rows: ScoreBoardRow[]=[];

    constructor(gameService?: GameStateHandler)
    {
        if(gameService==null || gameService.empty) return;

        this.currentRoundIndex=this.createCurrentRoundIndex(gameService);
        this.rounds=this.createRounds(gameService);
        this.rows=this.createRows(gameService);
    
    }

    private createCurrentRoundIndex(gameService: GameStateHandler): number
    {
        return gameService.currentRound.index;
    }

    private createRounds(gameService: GameStateHandler): Round[]
    {
        const newRounds: Round[]=[];
        for(let roundIndex=gameService.currentRound.index; roundIndex>=0; roundIndex--)
        {
            newRounds.push(gameService.rounds[roundIndex]);
        }
        return newRounds;    
    }

    private createRows(gameService: GameStateHandler): ScoreBoardRow[]
    {
        const newScoreBoardRows: ScoreBoardRow[]=[];
        for(let playerIndex=0; playerIndex<gameService.players.length; playerIndex++)
        {
            newScoreBoardRows.push(this.createScoreBoardRow(playerIndex, gameService));
        }
        this.setRanks(newScoreBoardRows);
        return newScoreBoardRows;
    }

    private createScoreBoardRow(playerIndex: number, gameService: GameStateHandler): ScoreBoardRow
    {
        const player=gameService.getPlayer(playerIndex);
        const playerModel=new PlayerCell();
        playerModel.name=player.name;
        playerModel.index=playerIndex;
        playerModel.selected=(playerIndex===gameService.currentPlayerIndex);
        playerModel.first=(playerIndex===gameService.currentRound.firstPlayerIndex);
        playerModel.last=(playerIndex===gameService.currentRound.lastPlayerIndex);
        playerModel.score=player.score;
        return new ScoreBoardRow(player, playerModel);
    }

    private setRanks(scoreBoardRows: ScoreBoardRow[])
    {
        const scores: number[]=[];
        for(let index=0; index<scoreBoardRows.length; index++)
        {
            scores.push(scoreBoardRows[index].playerCell.score);
        }

        for(let rank=1; rank<=scoreBoardRows.length; rank++)
        {
            let maxScore: number=Math.max(...scores);
            if(maxScore===Number.NEGATIVE_INFINITY) break;
            for(let index=0; index<scoreBoardRows.length; index++)
            {
                if(scoreBoardRows[index].playerCell.score===maxScore)
                {
                    scoreBoardRows[index].playerCell.rank=rank;
                    scores[index]=Number.NEGATIVE_INFINITY;
                }
            }
        }
    }

}
