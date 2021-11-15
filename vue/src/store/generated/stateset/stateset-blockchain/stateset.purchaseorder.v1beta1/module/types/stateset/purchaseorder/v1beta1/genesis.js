/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { PurchaseOrder } from "../../../stateset/purchaseorder/v1beta1/tx";
export const protobufPackage = "stateset.purchaseorder.v1beta1";
const baseGenesisState = { purchaseOrderCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.purchaseorders) {
            PurchaseOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.purchaseOrderCount !== 0) {
            writer.uint32(16).uint64(message.purchaseOrderCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.purchaseorders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorders.push(PurchaseOrder.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.purchaseOrderCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.purchaseorders = [];
        if (object.purchaseorders !== undefined && object.purchaseorders !== null) {
            for (const e of object.purchaseorders) {
                message.purchaseorders.push(PurchaseOrder.fromJSON(e));
            }
        }
        if (object.purchaseOrderCount !== undefined &&
            object.purchaseOrderCount !== null) {
            message.purchaseOrderCount = Number(object.purchaseOrderCount);
        }
        else {
            message.purchaseOrderCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.purchaseorders) {
            obj.purchaseorders = message.purchaseorders.map((e) => e ? PurchaseOrder.toJSON(e) : undefined);
        }
        else {
            obj.purchaseorders = [];
        }
        message.purchaseOrderCount !== undefined &&
            (obj.purchaseOrderCount = message.purchaseOrderCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.purchaseorders = [];
        if (object.purchaseorders !== undefined && object.purchaseorders !== null) {
            for (const e of object.purchaseorders) {
                message.purchaseorders.push(PurchaseOrder.fromPartial(e));
            }
        }
        if (object.purchaseOrderCount !== undefined &&
            object.purchaseOrderCount !== null) {
            message.purchaseOrderCount = object.purchaseOrderCount;
        }
        else {
            message.purchaseOrderCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
