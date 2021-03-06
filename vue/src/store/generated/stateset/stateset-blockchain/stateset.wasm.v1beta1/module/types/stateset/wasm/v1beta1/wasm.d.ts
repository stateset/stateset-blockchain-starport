import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.wasm.v1beta1";
/** Params defines the parameters for the wasm module. */
export interface Params {
    maxContractSize: number;
    maxContractGas: number;
    maxContractMsgSize: number;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeID is the sequentially increasing unique identifier */
    codeId: number;
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** Address is the address of the contract */
    address: string;
    /** Creator is the contract creator address */
    creator: string;
    /** Admin is who can execute the contract migration */
    admin: string;
    /** CodeID is the reference to the stored Wasm code */
    codeId: number;
    /** InitMsg is the raw message used when instantiating a contract */
    initMsg: Uint8Array;
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial(object: DeepPartial<CodeInfo>): CodeInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial(object: DeepPartial<ContractInfo>): ContractInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
