export class PlayerCell {
    static readonly empty=new PlayerCell();

    name: string="";
    index: number=-1;
    selected: boolean=false;
    first: boolean=false;
    last: boolean=false;
    rank: number=0;
    score: number=0;
}
