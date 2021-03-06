import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "stateset.wasm.v1beta1";
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCode {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCode {
    /** CodeID is the migration target code id */
    codeId: number;
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponse {
}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is an sender address */
    sender: string;
    /** Admin is an optional admin address who can migrate the contract */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** InitMsg json encoded message to be passed to the contract on instantiation */
    initMsg: Uint8Array;
    /** InitCoins that are transferred to the contract on execution */
    initCoins: Coin[];
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponse {
    /** ContractAddress is the bech32 address of the new contract instance. */
    contractAddress: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** ExecuteMsg json encoded message to be passed to the contract */
    executeMsg: Uint8Array;
    /** Coins that are transferred to the contract on execution */
    coins: Coin[];
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContract {
    /** Admin is the current contract admin */
    admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** NewCodeID references the new WASM code */
    newCodeId: number;
    /** MigrateMsg is json encoded message to be passed to the contract on migration */
    migrateMsg: Uint8Array;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdmin {
    /** Admin is the current contract admin */
    admin: string;
    /** NewAdmin is the new contract admin */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponse {
}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdmin {
    /** Admin is the current contract admin */
    admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponse {
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
};
export declare const MsgMigrateCode: {
    encode(message: MsgMigrateCode, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMigrateCode;
    fromJSON(object: any): MsgMigrateCode;
    toJSON(message: MsgMigrateCode): unknown;
    fromPartial(object: DeepPartial<MsgMigrateCode>): MsgMigrateCode;
};
export declare const MsgMigrateCodeResponse: {
    encode(_: MsgMigrateCodeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMigrateCodeResponse;
    fromJSON(_: any): MsgMigrateCodeResponse;
    toJSON(_: MsgMigrateCodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgMigrateCodeResponse>): MsgMigrateCodeResponse;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract;
};
export declare const MsgInstantiateContractResponse: {
    encode(message: MsgInstantiateContractResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromJSON(object: any): MsgInstantiateContractResponse;
    toJSON(message: MsgInstantiateContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
};
export declare const MsgMigrateContract: {
    encode(message: MsgMigrateContract, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract;
};
export declare const MsgMigrateContractResponse: {
    encode(message: MsgMigrateContractResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromJSON(object: any): MsgMigrateContractResponse;
    toJSON(message: MsgMigrateContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
};
export declare const MsgUpdateContractAdmin: {
    encode(message: MsgUpdateContractAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateContractAdmin;
    fromJSON(object: any): MsgUpdateContractAdmin;
    toJSON(message: MsgUpdateContractAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateContractAdmin>): MsgUpdateContractAdmin;
};
export declare const MsgUpdateContractAdminResponse: {
    encode(_: MsgUpdateContractAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateContractAdminResponse;
    fromJSON(_: any): MsgUpdateContractAdminResponse;
    toJSON(_: MsgUpdateContractAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateContractAdminResponse>): MsgUpdateContractAdminResponse;
};
export declare const MsgClearContractAdmin: {
    encode(message: MsgClearContractAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClearContractAdmin;
    fromJSON(object: any): MsgClearContractAdmin;
    toJSON(message: MsgClearContractAdmin): unknown;
    fromPartial(object: DeepPartial<MsgClearContractAdmin>): MsgClearContractAdmin;
};
export declare const MsgClearContractAdminResponse: {
    encode(_: MsgClearContractAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClearContractAdminResponse;
    fromJSON(_: any): MsgClearContractAdminResponse;
    toJSON(_: MsgClearContractAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgClearContractAdminResponse>): MsgClearContractAdminResponse;
};
/** Msg defines the oracle Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** MigrateCode to submit new version Wasm code to the system */
    MigrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse>;
    /** Instantiate creates a new smart contract instance for the given code id. */
    InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /** Execute submits the given message data to a smart contract */
    ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    /** UpdateContractAdmin sets a new admin for a smart contract */
    UpdateContractAdmin(request: MsgUpdateContractAdmin): Promise<MsgUpdateContractAdminResponse>;
    /** ClearContractAdmin remove admin flag from a smart contract */
    ClearContractAdmin(request: MsgClearContractAdmin): Promise<MsgClearContractAdminResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    MigrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse>;
    InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    UpdateContractAdmin(request: MsgUpdateContractAdmin): Promise<MsgUpdateContractAdminResponse>;
    ClearContractAdmin(request: MsgClearContractAdmin): Promise<MsgClearContractAdminResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
