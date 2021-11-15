import { Writer, Reader } from "protobufjs/minimal";
import { PurchaseOrder } from "../../../stateset/purchaseorder/v1beta1/tx";
export declare const protobufPackage = "stateset.purchaseorder.v1beta1";
/** GenesisState defines the genesis state used by agreement module */
export interface GenesisState {
    purchaseorders: PurchaseOrder[];
    purchaseOrderCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
