import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "did";
/** Digital identity credential issued to an stateset DID */
export interface DidCredential {
    credType: string[];
    issuer: string;
    issued: string;
    claim: Claim | undefined;
}
/** The claim section of a credential, indicating if the DID is KYC validated */
export interface Claim {
    id: string;
    KYCValidated: boolean;
}
/** A Stateset DID with public and private keys */
export interface StatesetDid {
    did: string;
    verifyKey: string;
    encryptionPublicKey: string;
    secret: Secret | undefined;
}
/** The private section of an stateset DID */
export interface Secret {
    seed: string;
    signKey: string;
    encryptionPrivateKey: string;
}
export declare const DidCredential: {
    encode(message: DidCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DidCredential;
    fromJSON(object: any): DidCredential;
    toJSON(message: DidCredential): unknown;
    fromPartial(object: DeepPartial<DidCredential>): DidCredential;
};
export declare const Claim: {
    encode(message: Claim, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: DeepPartial<Claim>): Claim;
};
export declare const StatesetDid: {
    encode(message: StatesetDid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): StatesetDid;
    fromJSON(object: any): StatesetDid;
    toJSON(message: StatesetDid): unknown;
    fromPartial(object: DeepPartial<StatesetDid>): StatesetDid;
};
export declare const Secret: {
    encode(message: Secret, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial(object: DeepPartial<Secret>): Secret;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
