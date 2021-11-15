import { Reader, Writer } from "protobufjs/minimal";
import { AgreementFilters, Agreement } from "../../../stateset/agreement/v1beta1/tx";
import { PageRequest } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "stateset.agreement.v1beta1";
/**
 * =============================== Agreements
 * QueryAgreementRequest is the Query/Agreement request type.
 */
export interface QueryAgreementsRequest {
    filters: AgreementFilters | undefined;
    pagination: PageRequest | undefined;
}
export interface QueryAgreementsResponse {
    agreements: Agreement[];
    pagination: PageRequest | undefined;
}
export interface QueryAgreementRequest {
    /** agreement_id is the unique ID of agreement to query. */
    agreementId: string;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryAgreementResponse {
    agreement: Agreement | undefined;
}
export declare const QueryAgreementsRequest: {
    encode(message: QueryAgreementsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAgreementsRequest;
    fromJSON(object: any): QueryAgreementsRequest;
    toJSON(message: QueryAgreementsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAgreementsRequest>): QueryAgreementsRequest;
};
export declare const QueryAgreementsResponse: {
    encode(message: QueryAgreementsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAgreementsResponse;
    fromJSON(object: any): QueryAgreementsResponse;
    toJSON(message: QueryAgreementsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAgreementsResponse>): QueryAgreementsResponse;
};
export declare const QueryAgreementRequest: {
    encode(message: QueryAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAgreementRequest;
    fromJSON(object: any): QueryAgreementRequest;
    toJSON(message: QueryAgreementRequest): unknown;
    fromPartial(object: DeepPartial<QueryAgreementRequest>): QueryAgreementRequest;
};
export declare const QueryAgreementResponse: {
    encode(message: QueryAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAgreementResponse;
    fromJSON(object: any): QueryAgreementResponse;
    toJSON(message: QueryAgreementResponse): unknown;
    fromPartial(object: DeepPartial<QueryAgreementResponse>): QueryAgreementResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Agreements returns agreeement details based on agreement. */
    Agreements(request: QueryAgreementsRequest): Promise<QueryAgreementsResponse>;
    /** Agreement returns agreeement details based on agreement. */
    Agreement(request: QueryAgreementRequest): Promise<QueryAgreementResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Agreements(request: QueryAgreementsRequest): Promise<QueryAgreementsResponse>;
    Agreement(request: QueryAgreementRequest): Promise<QueryAgreementResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
