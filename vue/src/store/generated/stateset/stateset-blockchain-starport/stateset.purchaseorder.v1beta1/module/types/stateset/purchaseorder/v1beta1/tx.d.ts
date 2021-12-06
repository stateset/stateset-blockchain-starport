import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.purchaseorder.v1beta1";
/** State is an enum which refers to state of an ourchase order */
export declare enum State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    request = 1,
    completed = 2,
    canceled = 3,
    locked = 4,
    financed = 5,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export interface PurchaseOrder {
    creator: string;
    purchaseorderId: string;
    purchaseorderNumber: string;
    purchaseorderHash: string;
    purchaseorderStatus: string;
    description: string;
    purchaseDate: string;
    deliveryDate: string;
    subtotal: string;
    total: string;
    purchaser: string;
    vendor: string;
    fulfiller: string;
    financer: string;
}
export interface PurchaseOrderFilters {
    owner: string;
    state: string;
}
/** MsgCreatePurchaseOrderRequest is the Msg/CreatePurchaseOrder request type. */
export interface MsgCreatePurchaseOrderRequest {
    /**
     * creator is the address of the account that created the purchase order
     * class.
     */
    creator: string;
    purchaseorderId: string;
    purchaseorderNumber: string;
    purchaseorderName: string;
    purchaseorderStatus: string;
    description: string;
    purchaseDate: string;
    deliveryDate: string;
    subtotal: string;
    total: string;
    purchaser: string;
    vendor: string;
    fulfiller: string;
    financer: string;
}
/** MsgCreatePurchaseOrderResponse is the Msg/CreatePurchaseOrder response type. */
export interface MsgCreatePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId: string;
}
export interface MsgUpdatePurchaseOrderRequest {
    /**
     * creator is the address of the account that created the purchase order
     * class.
     */
    creator: string;
    purchaseorderId: string;
    purchaseorderNumber: string;
    purchaseorderHash: string;
    purchaseorderStatus: string;
    description: string;
    purchaseDate: string;
    deliveryDate: string;
    subtotal: string;
    total: string;
    purchaser: string;
    vendor: string;
    fulfiller: string;
    financer: string;
}
export interface MsgUpdatePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId: string;
}
export interface MsgDeletePurchaseOrderRequest {
    creator: string;
    purchaseorderId: number;
}
export interface MsgDeletePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId: string;
}
/**
 * MsgCompletePurchaseOrderRequest is the Msg/CompletePurchaseOrder request
 * type.
 */
export interface MsgCompletePurchaseOrderRequest {
    /** sender is the address of the sender of the transaction. */
    creator: string;
    purchaseorderId: string;
}
/**
 * MsgCompletePurchaseOrderResponse is the Msg/CompletePurchaseOrderResponse
 * response type.
 */
export interface MsgCompletePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId: string;
}
/** MsgCancelPurchaseOrderRequest is the Msg/CancelPurchaseOrder request type. */
export interface MsgCancelPurchaseOrderRequest {
    /** sender is the address of the sender of the transaction. */
    creator: string;
    purchaseorderId: string;
}
/** MsgCancelPurchaseOrderResponse is the Msg/CancelPurchaseOrder response type. */
export interface MsgCancelPurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId: string;
}
/** MsgLockPurchaseOrder is the Msg/FinancePurchaseOrder request type. */
export interface MsgLockPurchaseOrderRequest {
    /** sender is the address of the sender of the transaction. */
    creator: string;
    purchaseorderId: string;
}
/**
 * MsgFinancePurchaseOrderResponse is the Msg/FinancePurchaseOrder response
 * type.
 */
export interface MsgLockPurchaseOrderResponse {
}
/** MsgFinancePurchaseOrder is the Msg/FinancePurchaseOrder request type. */
export interface MsgFinancePurchaseOrderRequest {
    /** sender is the address of the sender of the transaction. */
    creator: string;
    purchaseorderId: string;
}
/**
 * MsgFinancePurchaseOrderResponse is the Msg/FinancePurchaseOrder response
 * type.
 */
export interface MsgFinancePurchaseOrderResponse {
}
export declare const PurchaseOrder: {
    encode(message: PurchaseOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PurchaseOrder;
    fromJSON(object: any): PurchaseOrder;
    toJSON(message: PurchaseOrder): unknown;
    fromPartial(object: DeepPartial<PurchaseOrder>): PurchaseOrder;
};
export declare const PurchaseOrderFilters: {
    encode(message: PurchaseOrderFilters, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PurchaseOrderFilters;
    fromJSON(object: any): PurchaseOrderFilters;
    toJSON(message: PurchaseOrderFilters): unknown;
    fromPartial(object: DeepPartial<PurchaseOrderFilters>): PurchaseOrderFilters;
};
export declare const MsgCreatePurchaseOrderRequest: {
    encode(message: MsgCreatePurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePurchaseOrderRequest;
    fromJSON(object: any): MsgCreatePurchaseOrderRequest;
    toJSON(message: MsgCreatePurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreatePurchaseOrderRequest>): MsgCreatePurchaseOrderRequest;
};
export declare const MsgCreatePurchaseOrderResponse: {
    encode(message: MsgCreatePurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePurchaseOrderResponse;
    fromJSON(object: any): MsgCreatePurchaseOrderResponse;
    toJSON(message: MsgCreatePurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePurchaseOrderResponse>): MsgCreatePurchaseOrderResponse;
};
export declare const MsgUpdatePurchaseOrderRequest: {
    encode(message: MsgUpdatePurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePurchaseOrderRequest;
    fromJSON(object: any): MsgUpdatePurchaseOrderRequest;
    toJSON(message: MsgUpdatePurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePurchaseOrderRequest>): MsgUpdatePurchaseOrderRequest;
};
export declare const MsgUpdatePurchaseOrderResponse: {
    encode(message: MsgUpdatePurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePurchaseOrderResponse;
    fromJSON(object: any): MsgUpdatePurchaseOrderResponse;
    toJSON(message: MsgUpdatePurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePurchaseOrderResponse>): MsgUpdatePurchaseOrderResponse;
};
export declare const MsgDeletePurchaseOrderRequest: {
    encode(message: MsgDeletePurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePurchaseOrderRequest;
    fromJSON(object: any): MsgDeletePurchaseOrderRequest;
    toJSON(message: MsgDeletePurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgDeletePurchaseOrderRequest>): MsgDeletePurchaseOrderRequest;
};
export declare const MsgDeletePurchaseOrderResponse: {
    encode(message: MsgDeletePurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePurchaseOrderResponse;
    fromJSON(object: any): MsgDeletePurchaseOrderResponse;
    toJSON(message: MsgDeletePurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgDeletePurchaseOrderResponse>): MsgDeletePurchaseOrderResponse;
};
export declare const MsgCompletePurchaseOrderRequest: {
    encode(message: MsgCompletePurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCompletePurchaseOrderRequest;
    fromJSON(object: any): MsgCompletePurchaseOrderRequest;
    toJSON(message: MsgCompletePurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgCompletePurchaseOrderRequest>): MsgCompletePurchaseOrderRequest;
};
export declare const MsgCompletePurchaseOrderResponse: {
    encode(message: MsgCompletePurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCompletePurchaseOrderResponse;
    fromJSON(object: any): MsgCompletePurchaseOrderResponse;
    toJSON(message: MsgCompletePurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgCompletePurchaseOrderResponse>): MsgCompletePurchaseOrderResponse;
};
export declare const MsgCancelPurchaseOrderRequest: {
    encode(message: MsgCancelPurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelPurchaseOrderRequest;
    fromJSON(object: any): MsgCancelPurchaseOrderRequest;
    toJSON(message: MsgCancelPurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgCancelPurchaseOrderRequest>): MsgCancelPurchaseOrderRequest;
};
export declare const MsgCancelPurchaseOrderResponse: {
    encode(message: MsgCancelPurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelPurchaseOrderResponse;
    fromJSON(object: any): MsgCancelPurchaseOrderResponse;
    toJSON(message: MsgCancelPurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgCancelPurchaseOrderResponse>): MsgCancelPurchaseOrderResponse;
};
export declare const MsgLockPurchaseOrderRequest: {
    encode(message: MsgLockPurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLockPurchaseOrderRequest;
    fromJSON(object: any): MsgLockPurchaseOrderRequest;
    toJSON(message: MsgLockPurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgLockPurchaseOrderRequest>): MsgLockPurchaseOrderRequest;
};
export declare const MsgLockPurchaseOrderResponse: {
    encode(_: MsgLockPurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgLockPurchaseOrderResponse;
    fromJSON(_: any): MsgLockPurchaseOrderResponse;
    toJSON(_: MsgLockPurchaseOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgLockPurchaseOrderResponse>): MsgLockPurchaseOrderResponse;
};
export declare const MsgFinancePurchaseOrderRequest: {
    encode(message: MsgFinancePurchaseOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFinancePurchaseOrderRequest;
    fromJSON(object: any): MsgFinancePurchaseOrderRequest;
    toJSON(message: MsgFinancePurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<MsgFinancePurchaseOrderRequest>): MsgFinancePurchaseOrderRequest;
};
export declare const MsgFinancePurchaseOrderResponse: {
    encode(_: MsgFinancePurchaseOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFinancePurchaseOrderResponse;
    fromJSON(_: any): MsgFinancePurchaseOrderResponse;
    toJSON(_: MsgFinancePurchaseOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgFinancePurchaseOrderResponse>): MsgFinancePurchaseOrderResponse;
};
/** Msg is the stateset.purchaseorder.v1beta1 Msg service */
export interface Msg {
    /** Create defines a method to create a new purchase order. */
    Create(request: MsgCreatePurchaseOrderRequest): Promise<MsgCreatePurchaseOrderResponse>;
    /** Update defines a method to update a purchase order. */
    Update(request: MsgUpdatePurchaseOrderRequest): Promise<MsgUpdatePurchaseOrderResponse>;
    /** Delete defines a method to delete a purchase order. */
    Delete(request: MsgDeletePurchaseOrderRequest): Promise<MsgDeletePurchaseOrderResponse>;
    /** Complete defines a method to complete a purchase order */
    Complete(request: MsgCompletePurchaseOrderRequest): Promise<MsgCompletePurchaseOrderResponse>;
    /** Cancel defines a method to cancel a purchase order */
    Cancel(request: MsgCancelPurchaseOrderRequest): Promise<MsgCancelPurchaseOrderResponse>;
    /** Lock defines a method to lock a purchase order */
    Lock(request: MsgLockPurchaseOrderRequest): Promise<MsgLockPurchaseOrderResponse>;
    /** Finance defines a method to finance a purchase order */
    Finance(request: MsgFinancePurchaseOrderRequest): Promise<MsgFinancePurchaseOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: MsgCreatePurchaseOrderRequest): Promise<MsgCreatePurchaseOrderResponse>;
    Update(request: MsgUpdatePurchaseOrderRequest): Promise<MsgUpdatePurchaseOrderResponse>;
    Delete(request: MsgDeletePurchaseOrderRequest): Promise<MsgDeletePurchaseOrderResponse>;
    Complete(request: MsgCompletePurchaseOrderRequest): Promise<MsgCompletePurchaseOrderResponse>;
    Cancel(request: MsgCancelPurchaseOrderRequest): Promise<MsgCancelPurchaseOrderResponse>;
    Lock(request: MsgLockPurchaseOrderRequest): Promise<MsgLockPurchaseOrderResponse>;
    Finance(request: MsgFinancePurchaseOrderRequest): Promise<MsgFinancePurchaseOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
