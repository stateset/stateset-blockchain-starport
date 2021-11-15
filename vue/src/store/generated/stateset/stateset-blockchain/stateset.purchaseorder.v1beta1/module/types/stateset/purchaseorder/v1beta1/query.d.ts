import { Reader, Writer } from "protobufjs/minimal";
import { PurchaseOrder } from "../../../stateset/purchaseorder/v1beta1/tx";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "stateset.purchaseorder.v1beta1";
/** QueryPurchaseOrderRequest is the Query/PurchaseOrder request type. */
export interface QueryPurchaseOrderRequest {
    /** purchase_id is the unique ID of purchase order to query. */
    purchaseorderId: string;
}
export interface QueryPurchaseOrderResponse {
    purchaseorder: PurchaseOrder | undefined;
}
export interface QueryPurchaseOrdersRequest {
    pagination: PageRequest | undefined;
}
export interface QueryPurchaseOrdersResponse {
    PurchaseOrder: PurchaseOrder[];
    pagination: PageResponse | undefined;
}
export declare const QueryPurchaseOrderRequest: {
    encode(message: QueryPurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPurchaseOrderRequest;
    fromJSON(object: any): QueryPurchaseOrderRequest;
    toJSON(message: QueryPurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryPurchaseOrderRequest>): QueryPurchaseOrderRequest;
};
export declare const QueryPurchaseOrderResponse: {
    encode(message: QueryPurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPurchaseOrderResponse;
    fromJSON(object: any): QueryPurchaseOrderResponse;
    toJSON(message: QueryPurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryPurchaseOrderResponse>): QueryPurchaseOrderResponse;
};
export declare const QueryPurchaseOrdersRequest: {
    encode(message: QueryPurchaseOrdersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPurchaseOrdersRequest;
    fromJSON(object: any): QueryPurchaseOrdersRequest;
    toJSON(message: QueryPurchaseOrdersRequest): unknown;
    fromPartial(object: DeepPartial<QueryPurchaseOrdersRequest>): QueryPurchaseOrdersRequest;
};
export declare const QueryPurchaseOrdersResponse: {
    encode(message: QueryPurchaseOrdersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPurchaseOrdersResponse;
    fromJSON(object: any): QueryPurchaseOrdersResponse;
    toJSON(message: QueryPurchaseOrdersResponse): unknown;
    fromPartial(object: DeepPartial<QueryPurchaseOrdersResponse>): QueryPurchaseOrdersResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** PurchaseOrders returns purchase order details based on purchase order. */
    PurchaseOrders(request: QueryPurchaseOrdersRequest): Promise<QueryPurchaseOrdersResponse>;
    /** Purchase Order returns purchase order details based on purchase order. */
    PurchaseOrder(request: QueryPurchaseOrderRequest): Promise<QueryPurchaseOrderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    PurchaseOrders(request: QueryPurchaseOrdersRequest): Promise<QueryPurchaseOrdersResponse>;
    PurchaseOrder(request: QueryPurchaseOrderRequest): Promise<QueryPurchaseOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
