export class ButtonState {
    disabled: boolean=false;

    constructor(public readonly value: number)
    {
    }

    get text(): string
    {
        return this.value.toString();
    }

    get accesskey(): string
    {
        if(this.value<0) return "";
        if(this.value>9) return "";
        return this.text;
    }
}
