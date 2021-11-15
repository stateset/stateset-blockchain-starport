import { Reader, Writer } from "protobufjs/minimal";
import { Invoice } from "../../../stateset/invoice/v1beta1/tx";
import { PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "stateset.invoice.v1beta1";
/** QueryInvoiceRequest is the Query/Invoice request type. */
export interface QueryInvoicesRequest {
}
export interface QueryInvoicesResponse {
    invoices: Invoice[];
    pagination: PageResponse | undefined;
}
export interface QueryInvoiceRequest {
    /** invoice_id is the unique ID of invoice to query. */
    invoiceId: string;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryInvoiceResponse {
    invoice: Invoice | undefined;
}
export declare const QueryInvoicesRequest: {
    encode(_: QueryInvoicesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryInvoicesRequest;
    fromJSON(_: any): QueryInvoicesRequest;
    toJSON(_: QueryInvoicesRequest): unknown;
    fromPartial(_: DeepPartial<QueryInvoicesRequest>): QueryInvoicesRequest;
};
export declare const QueryInvoicesResponse: {
    encode(message: QueryInvoicesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryInvoicesResponse;
    fromJSON(object: any): QueryInvoicesResponse;
    toJSON(message: QueryInvoicesResponse): unknown;
    fromPartial(object: DeepPartial<QueryInvoicesResponse>): QueryInvoicesResponse;
};
export declare const QueryInvoiceRequest: {
    encode(message: QueryInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryInvoiceRequest;
    fromJSON(object: any): QueryInvoiceRequest;
    toJSON(message: QueryInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<QueryInvoiceRequest>): QueryInvoiceRequest;
};
export declare const QueryInvoiceResponse: {
    encode(message: QueryInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryInvoiceResponse;
    fromJSON(object: any): QueryInvoiceResponse;
    toJSON(message: QueryInvoiceResponse): unknown;
    fromPartial(object: DeepPartial<QueryInvoiceResponse>): QueryInvoiceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Invoices returns purchase order details based on purchase order. */
    Invoices(request: QueryInvoicesRequest): Promise<QueryInvoicesResponse>;
    /** Queries a day by id. */
    Invoice(request: QueryInvoiceRequest): Promise<QueryInvoiceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Invoices(request: QueryInvoicesRequest): Promise<QueryInvoicesResponse>;
    Invoice(request: QueryInvoiceRequest): Promise<QueryInvoiceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
