import { NumberButtons } from "../number-buttons/number-buttons";
import { ScoreBoard } from "../score-board/score-board/score-board";
import { GameStateHandler } from "./game-state-handler";

export class GameState 
{
    readonly numberButtons: NumberButtons=this.createNumberButtons();
    readonly scoreBoard: ScoreBoard=this.createScoreBoard();

    constructor(private readonly gameService: GameStateHandler)
    {
    }

    private createNumberButtons(): NumberButtons
    {
        return new NumberButtons(this.gameService);
    }

    private createScoreBoard(): ScoreBoard
    {
        return new ScoreBoard(this.gameService);
    }

}
