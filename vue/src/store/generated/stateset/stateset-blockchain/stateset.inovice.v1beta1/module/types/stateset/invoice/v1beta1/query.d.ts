import { Reader, Writer } from "protobufjs/minimal";
import { Invoice } from "../../../stateset/invoice/v1beta1/tx";
import { PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "stateset.invoice.v1beta1";
/** QueryInvoiceRequest is the Query/Invoice request type. */
export interface QueryInvoicesRequest {
}
export interface QueryInvoicesResponse {
    Invoice: Invoice[];
    pagination: PageResponse | undefined;
}
export interface QueryGetInvoiceRequest {
    /** invoice_id is the unique ID of invoice to query. */
    invoiceId: string;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryGetInvoiceResponse {
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
export declare const QueryGetInvoiceRequest: {
    encode(message: QueryGetInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInvoiceRequest;
    fromJSON(object: any): QueryGetInvoiceRequest;
    toJSON(message: QueryGetInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInvoiceRequest>): QueryGetInvoiceRequest;
};
export declare const QueryGetInvoiceResponse: {
    encode(message: QueryGetInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInvoiceResponse;
    fromJSON(object: any): QueryGetInvoiceResponse;
    toJSON(message: QueryGetInvoiceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInvoiceResponse>): QueryGetInvoiceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a day by id. */
    Invoice(request: QueryGetInvoiceRequest): Promise<QueryGetInvoiceResponse>;
    /** Invoices returns purchase order details based on purchase order. */
    Invoices(request: QueryInvoicesRequest): Promise<QueryInvoicesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Invoice(request: QueryGetInvoiceRequest): Promise<QueryGetInvoiceResponse>;
    Invoices(request: QueryInvoicesRequest): Promise<QueryInvoicesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
