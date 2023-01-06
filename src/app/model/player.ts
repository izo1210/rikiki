import { Safe } from "src/app/util/safe/safe";
import { PlayerRound } from "./player-round";

export class Player {
    static readonly empty: Player=new Player();

    name: string="";
    rounds: PlayerRound[]=[];

    constructor(source?: any)
    {
        if(!source) return;
        this.name=source.name;
        for(let playerRoundSource of source.rounds || [])
        {
            this.rounds.push(new PlayerRound(playerRoundSource));
        }
    }

    setNumber(roundIndex: number, n: number)
    {
        this.rounds[roundIndex].setNumber(n);
    }

    addRound(): void
    {
        this.rounds.push(new PlayerRound());
    }

    hasRound(roundIndex: number): boolean
    {
        return roundIndex>=0 && roundIndex<this.rounds.length;
    }

    getRound(roundIndex: number): PlayerRound
    {
        return Safe.get(this.rounds, roundIndex, ()=>PlayerRound.empty);
    }

    get score(): number
    {
        let newScore=0;
        for(let round of this.rounds)
        {
            newScore+=round.score;
        }
        return newScore;
    }

    getRoundState(roundIndex: number): number
    {
        if(this.rounds.length<=roundIndex)
        {
            return 0;
        }
        return this.rounds[roundIndex].values.length;
    }
}
