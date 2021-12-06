import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "did";
/** QueryDidDocRequest is the request type for the Query/DidDoc RPC method. */
export interface QueryDidDocRequest {
    did: string;
}
/** QueryDidDocResponse is the response type for the Query/DidDoc RPC method. */
export interface QueryDidDocResponse {
    diddoc: Any | undefined;
}
/** QueryAllDidsRequest is the request type for the Query/AllDids RPC method. */
export interface QueryAllDidsRequest {
}
/** QueryAllDidsResponse is the response type for the Query/AllDids RPC method. */
export interface QueryAllDidsResponse {
    dids: string[];
}
/** QueryAllDidDocsRequest is the request type for the Query/AllDidDocs RPC method. */
export interface QueryAllDidDocsRequest {
}
/** QueryAllDidDocsResponse is the response type for the Query/AllDidDocs RPC method. */
export interface QueryAllDidDocsResponse {
    diddocs: Any[];
}
/** QueryAddressFromDidRequest is the request type for the Query/AddressFromDid RPC method. */
export interface QueryAddressFromDidRequest {
    did: string;
}
/** QueryAddressFromDidResponse is the response type for the Query/AddressFromDid RPC method. */
export interface QueryAddressFromDidResponse {
    address: string;
}
/** QueryAddressFromBase58EncodedPubkeyRequest is the request type for the Query/AddressFromBase58EncodedPubkey RPC method. */
export interface QueryAddressFromBase58EncodedPubkeyRequest {
    pubKey: string;
}
/** QueryAddressFromBase58EncodedPubkeyResponse is the response type for the Query/AddressFromBase58EncodedPubkey RPC method. */
export interface QueryAddressFromBase58EncodedPubkeyResponse {
    address: string;
}
export declare const QueryDidDocRequest: {
    encode(message: QueryDidDocRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidDocRequest;
    fromJSON(object: any): QueryDidDocRequest;
    toJSON(message: QueryDidDocRequest): unknown;
    fromPartial(object: DeepPartial<QueryDidDocRequest>): QueryDidDocRequest;
};
export declare const QueryDidDocResponse: {
    encode(message: QueryDidDocResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidDocResponse;
    fromJSON(object: any): QueryDidDocResponse;
    toJSON(message: QueryDidDocResponse): unknown;
    fromPartial(object: DeepPartial<QueryDidDocResponse>): QueryDidDocResponse;
};
export declare const QueryAllDidsRequest: {
    encode(_: QueryAllDidsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDidsRequest;
    fromJSON(_: any): QueryAllDidsRequest;
    toJSON(_: QueryAllDidsRequest): unknown;
    fromPartial(_: DeepPartial<QueryAllDidsRequest>): QueryAllDidsRequest;
};
export declare const QueryAllDidsResponse: {
    encode(message: QueryAllDidsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDidsResponse;
    fromJSON(object: any): QueryAllDidsResponse;
    toJSON(message: QueryAllDidsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDidsResponse>): QueryAllDidsResponse;
};
export declare const QueryAllDidDocsRequest: {
    encode(_: QueryAllDidDocsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDidDocsRequest;
    fromJSON(_: any): QueryAllDidDocsRequest;
    toJSON(_: QueryAllDidDocsRequest): unknown;
    fromPartial(_: DeepPartial<QueryAllDidDocsRequest>): QueryAllDidDocsRequest;
};
export declare const QueryAllDidDocsResponse: {
    encode(message: QueryAllDidDocsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDidDocsResponse;
    fromJSON(object: any): QueryAllDidDocsResponse;
    toJSON(message: QueryAllDidDocsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDidDocsResponse>): QueryAllDidDocsResponse;
};
export declare const QueryAddressFromDidRequest: {
    encode(message: QueryAddressFromDidRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAddressFromDidRequest;
    fromJSON(object: any): QueryAddressFromDidRequest;
    toJSON(message: QueryAddressFromDidRequest): unknown;
    fromPartial(object: DeepPartial<QueryAddressFromDidRequest>): QueryAddressFromDidRequest;
};
export declare const QueryAddressFromDidResponse: {
    encode(message: QueryAddressFromDidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAddressFromDidResponse;
    fromJSON(object: any): QueryAddressFromDidResponse;
    toJSON(message: QueryAddressFromDidResponse): unknown;
    fromPartial(object: DeepPartial<QueryAddressFromDidResponse>): QueryAddressFromDidResponse;
};
export declare const QueryAddressFromBase58EncodedPubkeyRequest: {
    encode(message: QueryAddressFromBase58EncodedPubkeyRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAddressFromBase58EncodedPubkeyRequest;
    fromJSON(object: any): QueryAddressFromBase58EncodedPubkeyRequest;
    toJSON(message: QueryAddressFromBase58EncodedPubkeyRequest): unknown;
    fromPartial(object: DeepPartial<QueryAddressFromBase58EncodedPubkeyRequest>): QueryAddressFromBase58EncodedPubkeyRequest;
};
export declare const QueryAddressFromBase58EncodedPubkeyResponse: {
    encode(message: QueryAddressFromBase58EncodedPubkeyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAddressFromBase58EncodedPubkeyResponse;
    fromJSON(object: any): QueryAddressFromBase58EncodedPubkeyResponse;
    toJSON(message: QueryAddressFromBase58EncodedPubkeyResponse): unknown;
    fromPartial(object: DeepPartial<QueryAddressFromBase58EncodedPubkeyResponse>): QueryAddressFromBase58EncodedPubkeyResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** DidDoc queries info of a specific DID's DidDoc. */
    DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse>;
    /** AllDids returns a list of all existing DIDs. */
    AllDids(request: QueryAllDidsRequest): Promise<QueryAllDidsResponse>;
    /** AllDidDocs returns a list of all existing DidDocs (i.e. all DIDs along with their DidDoc info). */
    AllDidDocs(request: QueryAllDidDocsRequest): Promise<QueryAllDidDocsResponse>;
    /** AddressFromDid retrieves the cosmos address associated to an stateset DID. */
    AddressFromDid(request: QueryAddressFromDidRequest): Promise<QueryAddressFromDidResponse>;
    /** AddressFromBase58EncodedPubkey retrieves the cosmos address associated to an stateset DID's pubkey. */
    AddressFromBase58EncodedPubkey(request: QueryAddressFromBase58EncodedPubkeyRequest): Promise<QueryAddressFromBase58EncodedPubkeyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse>;
    AllDids(request: QueryAllDidsRequest): Promise<QueryAllDidsResponse>;
    AllDidDocs(request: QueryAllDidDocsRequest): Promise<QueryAllDidDocsResponse>;
    AddressFromDid(request: QueryAddressFromDidRequest): Promise<QueryAddressFromDidResponse>;
    AddressFromBase58EncodedPubkey(request: QueryAddressFromBase58EncodedPubkeyRequest): Promise<QueryAddressFromBase58EncodedPubkeyResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
