import { Player } from "./player";

export class Game {
    static readonly empty=new Game();

    players: Player[]=[];

    constructor(source?: any)
    {
        if(!source) return;
        for(let playerSource of source.players || [])
        {
            this.players.push(new Player(playerSource));
        }
    }

}
