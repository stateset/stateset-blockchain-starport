import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.invoice.v1beta1";
/** State is an enum which refers to state of an ourchase order */
export declare enum State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    request = 1,
    paid = 2,
    canceled = 3,
    factored = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
export interface Invoice {
    creator: string;
    invoiceId: string;
    invoiceNumber: string;
    invoiceName: string;
    billingReason: string;
    amountDue: string;
    amountPaid: string;
    amountRemaining: string;
    subtotal: string;
    total: string;
    party: string;
    counterparty: string;
    factor: string;
    dueDate: string;
    periodStartDate: string;
    periodEndDate: string;
}
/** MsgCreateInvoiceRequest is the Msg/CreateInvoice request type. */
export interface MsgCreateInvoiceRequest {
    /** sender is the address of the sender of the transaction. */
    creator: string;
    invoiceId: string;
    invoiceNumber: string;
    invoiceName: string;
    billingReason: string;
    amountDue: string;
    amountPaid: string;
    amountRemaining: string;
    subtotal: string;
    total: string;
    party: string;
    counterparty: string;
    factor: string;
    dueDate: string;
    periodStartDate: string;
    periodEndDate: string;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgCreateInvoiceResponse {
}
/** MsgCreateInvoiceRequest is the Msg/CreateInvoice request type. */
export interface MsgUpdateInvoiceRequest {
    creator: string;
    invoiceId: string;
    invoiceNumber: string;
    invoiceName: string;
    billingReason: string;
    amountDue: string;
    amountPaid: string;
    amountRemaining: string;
    subtotal: string;
    total: string;
    party: string;
    counterparty: string;
    factor: string;
    dueDate: string;
    periodStartDate: string;
    periodEndDate: string;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgUpdateInvoiceResponse {
}
/** MsgActivateInvoiceRequest is the Msg/ActivateInvoice request type. */
export interface MsgCancelInvoiceRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    invoiceId: string;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgCancelInvoiceResponse {
}
/** MsgActivateInvoiceRequest is the Msg/ActivateInvoice request type. */
export interface MsgDeleteInvoiceRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    invoiceId: string;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgDeleteInvoiceResponse {
}
/** MsgActivateInvoiceRequest is the Msg/ActivateInvoice request type. */
export interface MsgCompleteInvoiceRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    invoiceId: string;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgCompleteInvoiceResponse {
}
export interface MsgFactorInvoiceRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    invoiceId: string;
}
export interface MsgFactorInvoiceResponse {
}
export declare const Invoice: {
    encode(message: Invoice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Invoice;
    fromJSON(object: any): Invoice;
    toJSON(message: Invoice): unknown;
    fromPartial(object: DeepPartial<Invoice>): Invoice;
};
export declare const MsgCreateInvoiceRequest: {
    encode(message: MsgCreateInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInvoiceRequest;
    fromJSON(object: any): MsgCreateInvoiceRequest;
    toJSON(message: MsgCreateInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateInvoiceRequest>): MsgCreateInvoiceRequest;
};
export declare const MsgCreateInvoiceResponse: {
    encode(_: MsgCreateInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInvoiceResponse;
    fromJSON(_: any): MsgCreateInvoiceResponse;
    toJSON(_: MsgCreateInvoiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateInvoiceResponse>): MsgCreateInvoiceResponse;
};
export declare const MsgUpdateInvoiceRequest: {
    encode(message: MsgUpdateInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInvoiceRequest;
    fromJSON(object: any): MsgUpdateInvoiceRequest;
    toJSON(message: MsgUpdateInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInvoiceRequest>): MsgUpdateInvoiceRequest;
};
export declare const MsgUpdateInvoiceResponse: {
    encode(_: MsgUpdateInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInvoiceResponse;
    fromJSON(_: any): MsgUpdateInvoiceResponse;
    toJSON(_: MsgUpdateInvoiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateInvoiceResponse>): MsgUpdateInvoiceResponse;
};
export declare const MsgCancelInvoiceRequest: {
    encode(message: MsgCancelInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelInvoiceRequest;
    fromJSON(object: any): MsgCancelInvoiceRequest;
    toJSON(message: MsgCancelInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<MsgCancelInvoiceRequest>): MsgCancelInvoiceRequest;
};
export declare const MsgCancelInvoiceResponse: {
    encode(_: MsgCancelInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelInvoiceResponse;
    fromJSON(_: any): MsgCancelInvoiceResponse;
    toJSON(_: MsgCancelInvoiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelInvoiceResponse>): MsgCancelInvoiceResponse;
};
export declare const MsgDeleteInvoiceRequest: {
    encode(message: MsgDeleteInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInvoiceRequest;
    fromJSON(object: any): MsgDeleteInvoiceRequest;
    toJSON(message: MsgDeleteInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<MsgDeleteInvoiceRequest>): MsgDeleteInvoiceRequest;
};
export declare const MsgDeleteInvoiceResponse: {
    encode(_: MsgDeleteInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInvoiceResponse;
    fromJSON(_: any): MsgDeleteInvoiceResponse;
    toJSON(_: MsgDeleteInvoiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteInvoiceResponse>): MsgDeleteInvoiceResponse;
};
export declare const MsgCompleteInvoiceRequest: {
    encode(message: MsgCompleteInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCompleteInvoiceRequest;
    fromJSON(object: any): MsgCompleteInvoiceRequest;
    toJSON(message: MsgCompleteInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<MsgCompleteInvoiceRequest>): MsgCompleteInvoiceRequest;
};
export declare const MsgCompleteInvoiceResponse: {
    encode(_: MsgCompleteInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCompleteInvoiceResponse;
    fromJSON(_: any): MsgCompleteInvoiceResponse;
    toJSON(_: MsgCompleteInvoiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgCompleteInvoiceResponse>): MsgCompleteInvoiceResponse;
};
export declare const MsgFactorInvoiceRequest: {
    encode(message: MsgFactorInvoiceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFactorInvoiceRequest;
    fromJSON(object: any): MsgFactorInvoiceRequest;
    toJSON(message: MsgFactorInvoiceRequest): unknown;
    fromPartial(object: DeepPartial<MsgFactorInvoiceRequest>): MsgFactorInvoiceRequest;
};
export declare const MsgFactorInvoiceResponse: {
    encode(_: MsgFactorInvoiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFactorInvoiceResponse;
    fromJSON(_: any): MsgFactorInvoiceResponse;
    toJSON(_: MsgFactorInvoiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgFactorInvoiceResponse>): MsgFactorInvoiceResponse;
};
/** Msg is the stateset.invoice.v1beta1 Msg service */
export interface Msg {
    /** Create defines a method to create a new invoice. */
    Create(request: MsgCreateInvoiceRequest): Promise<MsgCreateInvoiceResponse>;
    /** Update defines a method to update an invoice. */
    Update(request: MsgUpdateInvoiceRequest): Promise<MsgUpdateInvoiceResponse>;
    /** Delete defines a method to create a new invoice. */
    Delete(request: MsgDeleteInvoiceRequest): Promise<MsgDeleteInvoiceResponse>;
    /** Cancel defines a method to cancel an invoice */
    Cancel(request: MsgCancelInvoiceRequest): Promise<MsgCancelInvoiceResponse>;
    /** Complete defines a method to complete an invoice */
    Complete(request: MsgCompleteInvoiceRequest): Promise<MsgCompleteInvoiceResponse>;
    /** Factor defines a method to factor an invoice */
    Factor(request: MsgFactorInvoiceRequest): Promise<MsgFactorInvoiceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: MsgCreateInvoiceRequest): Promise<MsgCreateInvoiceResponse>;
    Update(request: MsgUpdateInvoiceRequest): Promise<MsgUpdateInvoiceResponse>;
    Delete(request: MsgDeleteInvoiceRequest): Promise<MsgDeleteInvoiceResponse>;
    Cancel(request: MsgCancelInvoiceRequest): Promise<MsgCancelInvoiceResponse>;
    Complete(request: MsgCompleteInvoiceRequest): Promise<MsgCompleteInvoiceResponse>;
    Factor(request: MsgFactorInvoiceRequest): Promise<MsgFactorInvoiceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
