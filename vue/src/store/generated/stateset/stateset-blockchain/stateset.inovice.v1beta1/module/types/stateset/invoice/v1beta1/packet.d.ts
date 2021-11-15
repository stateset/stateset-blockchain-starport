import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.inovice.v1beta1";
/** IbcInvoicePacketData defines a struct for the packet payload */
export interface IbcInvoicePacketData {
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
export declare const IbcInvoicePacketData: {
    encode(message: IbcInvoicePacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcInvoicePacketData;
    fromJSON(object: any): IbcInvoicePacketData;
    toJSON(message: IbcInvoicePacketData): unknown;
    fromPartial(object: DeepPartial<IbcInvoicePacketData>): IbcInvoicePacketData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
