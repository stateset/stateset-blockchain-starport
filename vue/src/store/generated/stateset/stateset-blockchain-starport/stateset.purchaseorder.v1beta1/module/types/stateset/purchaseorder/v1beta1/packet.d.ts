import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.purchaseorder.v1beta1";
/** IbcPurchaseOrderPacketData defines a struct for the packet payload */
export interface IbcPurchaseOrderPacketData {
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
export declare const IbcPurchaseOrderPacketData: {
    encode(message: IbcPurchaseOrderPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcPurchaseOrderPacketData;
    fromJSON(object: any): IbcPurchaseOrderPacketData;
    toJSON(message: IbcPurchaseOrderPacketData): unknown;
    fromPartial(object: DeepPartial<IbcPurchaseOrderPacketData>): IbcPurchaseOrderPacketData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
