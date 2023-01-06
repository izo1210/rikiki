import { Player } from "../../model/player";
import { PlayerCell } from "../player-cell/player-cell";

export class ScoreBoardRow {
    static readonly empty: ScoreBoardRow=new ScoreBoardRow();

    constructor(
        public readonly player: Player=Player.empty, 
        public readonly playerCell: PlayerCell=PlayerCell.empty,
    )
    {
    }  
}
