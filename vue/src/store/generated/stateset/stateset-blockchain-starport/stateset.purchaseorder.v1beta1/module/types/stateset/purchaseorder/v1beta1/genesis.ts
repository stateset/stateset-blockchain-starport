/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { PurchaseOrder } from "../../../stateset/purchaseorder/v1beta1/tx";

export const protobufPackage = "stateset.purchaseorder.v1beta1";

/** GenesisState defines the genesis state used by agreement module */
export interface GenesisState {
  purchaseorders: PurchaseOrder[];
  purchaseOrderCount: number;
}

const baseGenesisState: object = { purchaseOrderCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.purchaseorders) {
      PurchaseOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.purchaseOrderCount !== 0) {
      writer.uint32(16).uint64(message.purchaseOrderCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.purchaseorders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseorders.push(
            PurchaseOrder.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.purchaseOrderCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.purchaseorders = [];
    if (object.purchaseorders !== undefined && object.purchaseorders !== null) {
      for (const e of object.purchaseorders) {
        message.purchaseorders.push(PurchaseOrder.fromJSON(e));
      }
    }
    if (
      object.purchaseOrderCount !== undefined &&
      object.purchaseOrderCount !== null
    ) {
      message.purchaseOrderCount = Number(object.purchaseOrderCount);
    } else {
      message.purchaseOrderCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.purchaseorders) {
      obj.purchaseorders = message.purchaseorders.map((e) =>
        e ? PurchaseOrder.toJSON(e) : undefined
      );
    } else {
      obj.purchaseorders = [];
    }
    message.purchaseOrderCount !== undefined &&
      (obj.purchaseOrderCount = message.purchaseOrderCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.purchaseorders = [];
    if (object.purchaseorders !== undefined && object.purchaseorders !== null) {
      for (const e of object.purchaseorders) {
        message.purchaseorders.push(PurchaseOrder.fromPartial(e));
      }
    }
    if (
      object.purchaseOrderCount !== undefined &&
      object.purchaseOrderCount !== null
    ) {
      message.purchaseOrderCount = object.purchaseOrderCount;
    } else {
      message.purchaseOrderCount = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
