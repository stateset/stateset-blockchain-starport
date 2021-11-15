import { Reader, Writer } from "protobufjs/minimal";
import { DidCredential } from "../../../stateset/did/v1beta1/did";
export declare const protobufPackage = "did";
/** MsgAddDid defines a message for adding a DID. */
export interface MsgAddDid {
    did: string;
    pubKey: string;
}
/** MsgAddDidResponse defines the Msg/AddDid response type. */
export interface MsgAddDidResponse {
}
/** MsgAddCredential defines a message for adding a credential to the signer's DID. */
export interface MsgAddCredential {
    didCredential: DidCredential | undefined;
}
/** MsgAddCredentialResponse defines the Msg/AddCredential response type. */
export interface MsgAddCredentialResponse {
}
export declare const MsgAddDid: {
    encode(message: MsgAddDid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddDid;
    fromJSON(object: any): MsgAddDid;
    toJSON(message: MsgAddDid): unknown;
    fromPartial(object: DeepPartial<MsgAddDid>): MsgAddDid;
};
export declare const MsgAddDidResponse: {
    encode(_: MsgAddDidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddDidResponse;
    fromJSON(_: any): MsgAddDidResponse;
    toJSON(_: MsgAddDidResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddDidResponse>): MsgAddDidResponse;
};
export declare const MsgAddCredential: {
    encode(message: MsgAddCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddCredential;
    fromJSON(object: any): MsgAddCredential;
    toJSON(message: MsgAddCredential): unknown;
    fromPartial(object: DeepPartial<MsgAddCredential>): MsgAddCredential;
};
export declare const MsgAddCredentialResponse: {
    encode(_: MsgAddCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddCredentialResponse;
    fromJSON(_: any): MsgAddCredentialResponse;
    toJSON(_: MsgAddCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddCredentialResponse>): MsgAddCredentialResponse;
};
/** Msg defines the did Msg service. */
export interface Msg {
    /** AddDid defines a method for adding a DID. */
    AddDid(request: MsgAddDid): Promise<MsgAddDidResponse>;
    /** AddCredential defines a method for adding a credential to the signer's DID. */
    AddCredential(request: MsgAddCredential): Promise<MsgAddCredentialResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AddDid(request: MsgAddDid): Promise<MsgAddDidResponse>;
    AddCredential(request: MsgAddCredential): Promise<MsgAddCredentialResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
