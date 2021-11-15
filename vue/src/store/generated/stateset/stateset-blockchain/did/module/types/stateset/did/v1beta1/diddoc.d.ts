import { DidCredential } from "../../../stateset/did/v1beta1/did";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "did";
/** BaseDidDoc defines a base DID document type. It implements the DidDoc interface. */
export interface BaseDidDoc {
    did: string;
    pubKey: string;
    credentials: DidCredential[];
}
export declare const BaseDidDoc: {
    encode(message: BaseDidDoc, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BaseDidDoc;
    fromJSON(object: any): BaseDidDoc;
    toJSON(message: BaseDidDoc): unknown;
    fromPartial(object: DeepPartial<BaseDidDoc>): BaseDidDoc;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
