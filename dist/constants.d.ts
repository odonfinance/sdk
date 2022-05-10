import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    MAINNET = 1285
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x481E73cf29EB246728cF27c350701400Ba58d395";
export declare const FACTORY_ADDRESS_MAP: {
    1285: string;
};
export declare const INIT_CODE_HASH = "0xa687a71b059f1ef0ba7f10feba69eeb7847d05655ff1a651b21d6845a07a4a15";
export declare const INIT_CODE_HASH_MAP: {
    1285: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
