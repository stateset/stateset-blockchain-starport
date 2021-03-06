import { Reader, Writer } from "protobufjs/minimal";
import { CodeInfo, ContractInfo, Params } from "../../../stateset/wasm/v1beta1/wasm";
export declare const protobufPackage = "stateset.wasm.v1beta1";
/** QueryCodeInfoRequest is the request type for the QueryyCodeInfo RPC method. */
export interface QueryCodeInfoRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: number;
}
/**
 * QueryCodeInfoResponse is response type for the
 * QueryyCodeInfo RPC method.
 */
export interface QueryCodeInfoResponse {
    codeInfo: CodeInfo | undefined;
}
/** QueryByteCodeRequest is the request type for the QueryyByteCode RPC method. */
export interface QueryByteCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: number;
}
/**
 * QueryByteCodeResponse is response type for the
 * QueryyByteCode RPC method.
 */
export interface QueryByteCodeResponse {
    byteCode: Uint8Array;
}
/** QueryContractInfoRequest is the request type for the Query/ContractInfo RPC method. */
export interface QueryContractInfoRequest {
    contractAddress: string;
}
/**
 * QueryContractInfoResponse is response type for the
 * Query/ContractInfo RPC method.
 */
export interface QueryContractInfoResponse {
    contractInfo: ContractInfo | undefined;
}
/** QueryContractStoreRequest is the request type for the Query/ContractStore RPC method. */
export interface QueryContractStoreRequest {
    contractAddress: string;
    queryMsg: Uint8Array;
}
/**
 * QueryContractStoreResponse is response type for the
 * Query/ContractStore RPC method.
 */
export interface QueryContractStoreResponse {
    queryResult: Uint8Array;
}
/** QueryRawStoreRequest is the request type for the Query/RawStore RPC method. */
export interface QueryRawStoreRequest {
    contractAddress: string;
    key: Uint8Array;
}
/**
 * QueryRawStoreResponse is response type for the
 * Query/RawStore RPC method.
 */
export interface QueryRawStoreResponse {
    /** Data contains the raw store data */
    data: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export declare const QueryCodeInfoRequest: {
    encode(message: QueryCodeInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCodeInfoRequest;
    fromJSON(object: any): QueryCodeInfoRequest;
    toJSON(message: QueryCodeInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryCodeInfoRequest>): QueryCodeInfoRequest;
};
export declare const QueryCodeInfoResponse: {
    encode(message: QueryCodeInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCodeInfoResponse;
    fromJSON(object: any): QueryCodeInfoResponse;
    toJSON(message: QueryCodeInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryCodeInfoResponse>): QueryCodeInfoResponse;
};
export declare const QueryByteCodeRequest: {
    encode(message: QueryByteCodeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryByteCodeRequest;
    fromJSON(object: any): QueryByteCodeRequest;
    toJSON(message: QueryByteCodeRequest): unknown;
    fromPartial(object: DeepPartial<QueryByteCodeRequest>): QueryByteCodeRequest;
};
export declare const QueryByteCodeResponse: {
    encode(message: QueryByteCodeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryByteCodeResponse;
    fromJSON(object: any): QueryByteCodeResponse;
    toJSON(message: QueryByteCodeResponse): unknown;
    fromPartial(object: DeepPartial<QueryByteCodeResponse>): QueryByteCodeResponse;
};
export declare const QueryContractInfoRequest: {
    encode(message: QueryContractInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromJSON(object: any): QueryContractInfoRequest;
    toJSON(message: QueryContractInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse;
};
export declare const QueryContractStoreRequest: {
    encode(message: QueryContractStoreRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryContractStoreRequest;
    fromJSON(object: any): QueryContractStoreRequest;
    toJSON(message: QueryContractStoreRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractStoreRequest>): QueryContractStoreRequest;
};
export declare const QueryContractStoreResponse: {
    encode(message: QueryContractStoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryContractStoreResponse;
    fromJSON(object: any): QueryContractStoreResponse;
    toJSON(message: QueryContractStoreResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractStoreResponse>): QueryContractStoreResponse;
};
export declare const QueryRawStoreRequest: {
    encode(message: QueryRawStoreRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryRawStoreRequest;
    fromJSON(object: any): QueryRawStoreRequest;
    toJSON(message: QueryRawStoreRequest): unknown;
    fromPartial(object: DeepPartial<QueryRawStoreRequest>): QueryRawStoreRequest;
};
export declare const QueryRawStoreResponse: {
    encode(message: QueryRawStoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryRawStoreResponse;
    fromJSON(object: any): QueryRawStoreResponse;
    toJSON(message: QueryRawStoreResponse): unknown;
    fromPartial(object: DeepPartial<QueryRawStoreResponse>): QueryRawStoreResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** CodeInfo returns the stored code info */
    CodeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    /** ByteCode returns the stored byte code */
    ByteCode(request: QueryByteCodeRequest): Promise<QueryByteCodeResponse>;
    /** ContractInfo returns the stored contract info */
    ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    /** ContractStore return smart query result from the contract */
    ContractStore(request: QueryContractStoreRequest): Promise<QueryContractStoreResponse>;
    /** RawStore return single key from the raw store data of a contract */
    RawStore(request: QueryRawStoreRequest): Promise<QueryRawStoreResponse>;
    /** Params queries all parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    CodeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    ByteCode(request: QueryByteCodeRequest): Promise<QueryByteCodeResponse>;
    ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    ContractStore(request: QueryContractStoreRequest): Promise<QueryContractStoreResponse>;
    RawStore(request: QueryRawStoreRequest): Promise<QueryRawStoreResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
