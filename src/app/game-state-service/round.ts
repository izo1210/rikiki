import { Player } from "../model/player";

export class Round {
    static readonly empty=new Round(-1, 0, []);

    cardsInHand: number=this.createCardsInHand();
    firstPlayerIndex: number=this.createFirstPlayerIndex();
    lastPlayerIndex: number=this.createLastPlayerIndex();
    totalExpected: number=this.createTotalExpected();
    totalActual: number=this.createTotalActual();

    constructor(public index: number, private maxCardsInHand: number, private players: Player[])
    {
    }

    private createCardsInHand(): number
    {
        if(this.index<0)
        {
            return 0;
        }
        //max->2
        let i=this.index;
        if(i<this.maxCardsInHand-1)
        {
            return this.maxCardsInHand-i;
        }
        //players.length*1
        i-=this.maxCardsInHand-1;
        if(i<this.players.length)
        {
            return 1;
        }
        //2->max
        i-=this.players.length;
        if(i<this.maxCardsInHand-1)
        {
            return 2+i;
        }
        //finished
        return -1;
    }

    private createFirstPlayerIndex(): number
    {
        if(this.index<0) return -1;
        if(this.players.length===0) return -1;
        if(this.finished) return -1;
        return this.index%this.players.length;
    }
  
    private createLastPlayerIndex(): number
    {
        if(this.firstPlayerIndex<0) return -1;
        return this.getAbsolutePlayerIndex(this.players.length-1);
    }

    private createTotalExpected(): number
    {
        let total: number=0;
        this.players.forEach(player=>total+=this.getPlayerExpected(player));
        return total;
    }

    private createTotalActual(): number
    {
        let total: number=0;
        this.players.forEach(player=>total+=this.getPlayerActual(player));
        return total;
    }

    private getPlayerExpected(player: Player): number
    {
        return Math.max(player.getRound(this.index).expected, 0)   
    }
  
    private getPlayerActual(player: Player): number
    {
        return Math.max(player.getRound(this.index).actual, 0)   
    }

    get finished(): boolean
    {
        let finished=true;
        this.players.forEach(player=>finished=finished && player.hasRound(this.index) && player.getRound(this.index).finished);
        return finished;
    }

    getAbsolutePlayerIndex(relativePlayerIndex: number): number
    {
        if(this.players.length===0) return -1;
        if(!this.firstPlayerIndex || this.firstPlayerIndex<0) return relativePlayerIndex;
        return (this.firstPlayerIndex+relativePlayerIndex)%this.players.length;;
    }

    updateRoundData(): void
    {
        this.totalExpected=this.createTotalExpected();
        this.totalActual=this.createTotalActual();
    }

}
