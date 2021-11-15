import { Writer, Reader } from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo } from "../../../stateset/wasm/v1beta1/wasm";
export declare const protobufPackage = "stateset.wasm.v1beta1";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    lastCodeId: number;
    lastInstanceId: number;
    codes: Code[];
    contracts: Contract[];
}
/** Model is a struct that holds a KV pair */
export interface Model {
    key: Uint8Array;
    value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeInfo: CodeInfo | undefined;
    codeBytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractInfo: ContractInfo | undefined;
    contractStore: Model[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Model: {
    encode(message: Model, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial(object: DeepPartial<Model>): Model;
};
export declare const Code: {
    encode(message: Code, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial(object: DeepPartial<Code>): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: DeepPartial<Contract>): Contract;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
