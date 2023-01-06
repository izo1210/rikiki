import { BehaviorSubject } from "rxjs";

export class Undo<T> 
{
    private items: T[]=[];
    public readonly isEmpty$: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);

    constructor(
        public emptyItemSupplier: ()=>T,
        public undoneItemConsumer?: (item: T)=>void, 
    )
    {
    }

    push(item: T): void
    {
        console.log("done", JSON.stringify(item));
        this.items.push(item);
        if(this.items.length==1) this.isEmpty$.next(false);
    }

    pop(): T
    {
        const item: T=this.items.pop() || this.emptyItemSupplier();
        if(this.isEmpty$.value===false && this.items.length===0) this.isEmpty$.next(true);
        if(this.undoneItemConsumer) this.undoneItemConsumer(item);
        return item;
    }

    clear(): void
    {
        if(this.items.length==0) return;
        this.items=[];
        this.isEmpty$.next(true);
    }

    get isEmpty(): boolean
    {
        return this.isEmpty$.value;
    }
  
}
