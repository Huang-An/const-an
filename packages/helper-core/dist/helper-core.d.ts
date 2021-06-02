
export declare const checkBrowser: () => string;

export declare const checkSystem: () => string;

export declare const getURLParam: (string: string) => string;

export declare const getURLParamByAll: () => {
    [k: string]: string;
};

export declare const getURLParamByMulti: (tokens: Array<string>) => {
    [k: string]: string;
};

export declare const isArray: (value: any) => boolean;

export declare const isBoolean: (value: any) => boolean;

/**
 * 判断是否为 空字符串、空数组、空对象、"Null"、"null"、"Undefined"、"undefined"、null、undefined
 * @param value
 * @returns boolean
 */
export declare const isEmpty: (value: any) => boolean;

export declare const isNull: (value: any) => boolean;

export declare const isNumber: (value: any) => boolean;

export declare const isObject: (value: any) => boolean;

export declare const isString: (value: any) => boolean;

export declare const isUndefined: (value: any) => boolean;

export { }
