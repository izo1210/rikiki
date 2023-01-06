import { BehaviorSubject } from "rxjs";

export class LocalStorageWrapper<T> {
    readonly subject$=new BehaviorSubject<T|null>(this.load());

    constructor(
        public key: string,
        public getIfAbsentFunction: Function,
        public convertToTypeFunction?: Function, 
        public setNullOnParseError: boolean=false
    )
    {
        this.subject$.subscribe(newValue=>this.save());
    }

    getValue(): T
    {
        const newValue: T|null=this.subject$.value;
        if(newValue==null)
        {
            const defaultValue: T=this.getIfAbsentFunction();
            return defaultValue; 
        }
        else
        {
            return newValue;
        }
    }

    setValue(newValue: T|null)
    {
        this.subject$.next(newValue);
    }

    valueChanged(): void
    {
        this.subject$.next(this.subject$.value);
    }

    private load(): T
    {
        const str=localStorage.getItem(this.key);
        let newValue: any=null;
        if(str)
        {
            try
            {
                newValue=JSON.parse(str);
            }
            catch(err)
            {
                if(newValue==null && this.setNullOnParseError===false)
                {
                    throw(err);
                }
            }
            if(newValue!=null && this.convertToTypeFunction instanceof Function)
            {
                newValue=this.convertToTypeFunction(newValue);
            }        
        }
        return newValue;
    }

    private save(): void
    {
        if(this.subject$.value==null)
        {
            localStorage.removeItem(this.key);
        }
        else
        {
            const str=JSON.stringify(this.subject$.value);
            localStorage.setItem(this.key, str);
        }
    }
}
