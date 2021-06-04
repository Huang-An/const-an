
export declare function addRule(name: string, validate: validate_2): void;

export declare function addRuleByGroup(rules: rules): void;

export declare type executes = Array<{
    type: string;
    message: string;
    validate?: validate_2;
}>;

export declare function removeRule(name: string): void;

declare type rules = Array<{
    name: string;
    validate: validate_2;
}>;

export declare function validate<V>(value: V, executes: executes): Promise<validateResult>;

declare type validate_2 = <V>(value: V) => Promise<boolean>;

export declare type validateResult = {
    valid: boolean;
    message: string;
    error: any;
};

export { }
