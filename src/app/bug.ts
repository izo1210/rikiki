/*
class BadParent {
	get value(): string { return ""; }	
	set value(newValue: string|null) {}
}

class BadChild extends BadParent {
	override set value(newValue: string|null) {}
}

class GoodParent {
	get value(): string|null { return ""; }	
	set value(newValue: string|null) {}
}

class GoodChild extends GoodParent {
	override set value(newValue: string|null) {}
}
*/
/*
Property 'value' in type 'BadChild' is not assignable to the same property in base type 'BadParent'.
  Type 'string | null' is not assignable to type 'string'.
    Type 'null' is not assignable to type 'string'.ts(2416)
*/