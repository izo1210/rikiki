export class Safe {
    static get<T>(array: Array<T>, index: any, defaultSupplier: Function): T
    {
        if(array==null) return defaultSupplier();
        if(index<0) return defaultSupplier();
        if(index>=array.length) return defaultSupplier();
        try
        {
            return array[index];
        }
        catch(err)
        {
            console.log(err);
            return defaultSupplier();
        }
    }
}
