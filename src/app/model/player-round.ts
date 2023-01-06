import { log } from "src/app/util/log/log";

export class PlayerRound {
    static readonly empty: PlayerRound=new PlayerRound();
    static readonly FORECAST=0;
    static readonly ACTUAL=1;
    values: number[]=[];

    constructor(source?: any)
    {
        if(!source) return;
        for(let valueSource of source.values || [])
        {
            this.values.push(valueSource);
        }
    }

    setNumber(n: number)
    {
        if(this.expectedSelected)
        {
            this.expected=n;
        }
        else if(this.actualSelected)
        {
            this.actual=n;
        }
    }

    get expectedSelected(): boolean
    {
        return this.values.length==PlayerRound.FORECAST;
    }

    get expectedIsSet(): boolean
    {
        return this.values.length>PlayerRound.FORECAST;
    }

    get expected(): number
    {
        if(!this.expectedIsSet)
        {
            return -1;
        }
        return this.values[PlayerRound.FORECAST];
    }

    set expected(newExpected: number)
    {
        this.values=[newExpected];
    }

    get actualSelected(): boolean
    {
        return this.values.length==PlayerRound.ACTUAL;
    }

    get actualIsSet(): boolean
    {
        return this.values.length>PlayerRound.ACTUAL;
    }

    get actual(): number
    {
        if(!this.actualIsSet)
        {
            return -1;
        }
        return this.values[PlayerRound.ACTUAL];
    }

    set actual(newActual: number)
    {
        if(!this.expectedIsSet)
        {
            this.expected=0;
        }
        if(!this.actualIsSet)
        {
            this.values.push(newActual);
        }
        else
        {
            this.values[PlayerRound.ACTUAL]=newActual;
        }
    }

    get score(): number
    {
        if(!this.finished)
        {
            return 0;
        }
        const newScore=this.equal*10+this.good*2-this.bad*2;
        return newScore;
    }

    get finished(): boolean
    {
        return this.expectedIsSet && this.actualIsSet;
    }

    private get equal(): number
    {
        return (this.expected===this.actual) ? 1 : 0;
    }

    private get good(): number
    {
        if(this.actual>this.expected) return this.expected;
        else return this.actual;
    }

    private get bad(): number
    {
        return Math.abs(this.actual-this.expected);
    }
}
