import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.invoice.v1beta1";
/** EventCreateInvoice is an event emitted when an invoice is created. */
export interface EventCreateInvoice {
    /** invoice_id is the unique ID of invoice */
    invoiceId: string;
    /** creator is the creator of the invoice */
    creator: string;
}
/** EventCompleted is an event emitted when an invoice is completed. */
export interface EventCompleted {
    /** agreement_id is the unique ID of invoice */
    invoiceId: string;
    /** creator is the creator of the invoice */
    creator: string;
}
/** EventCancelled is an event emitted when an invoice is cancelled. */
export interface EventCancelled {
    /** agreement_id is the unique ID of invoice */
    invoiceId: string;
    /** creator is the creator of the invoice */
    creator: string;
}
/** EventFactored is an event emitted when an invoice is factored. */
export interface EventFactored {
    /** invoice_id is the unique ID of invoice */
    invoiceId: string;
    /** creator is the creator of the invoice */
    creator: string;
}
export declare const EventCreateInvoice: {
    encode(message: EventCreateInvoice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCreateInvoice;
    fromJSON(object: any): EventCreateInvoice;
    toJSON(message: EventCreateInvoice): unknown;
    fromPartial(object: DeepPartial<EventCreateInvoice>): EventCreateInvoice;
};
export declare const EventCompleted: {
    encode(message: EventCompleted, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCompleted;
    fromJSON(object: any): EventCompleted;
    toJSON(message: EventCompleted): unknown;
    fromPartial(object: DeepPartial<EventCompleted>): EventCompleted;
};
export declare const EventCancelled: {
    encode(message: EventCancelled, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCancelled;
    fromJSON(object: any): EventCancelled;
    toJSON(message: EventCancelled): unknown;
    fromPartial(object: DeepPartial<EventCancelled>): EventCancelled;
};
export declare const EventFactored: {
    encode(message: EventFactored, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventFactored;
    fromJSON(object: any): EventFactored;
    toJSON(message: EventFactored): unknown;
    fromPartial(object: DeepPartial<EventFactored>): EventFactored;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
