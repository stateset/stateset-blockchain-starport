/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "stateset.purchaseorder.v1beta1";
/** State is an enum which refers to state of an ourchase order */
export var State;
(function (State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    State[State["invalid"] = 0] = "invalid";
    State[State["request"] = 1] = "request";
    State[State["completed"] = 2] = "completed";
    State[State["canceled"] = 3] = "canceled";
    State[State["locked"] = 4] = "locked";
    State[State["financed"] = 5] = "financed";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));
export function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return State.invalid;
        case 1:
        case "request":
            return State.request;
        case 2:
        case "completed":
            return State.completed;
        case 3:
        case "canceled":
            return State.canceled;
        case 4:
        case "locked":
            return State.locked;
        case 5:
        case "financed":
            return State.financed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
export function stateToJSON(object) {
    switch (object) {
        case State.invalid:
            return "invalid";
        case State.request:
            return "request";
        case State.completed:
            return "completed";
        case State.canceled:
            return "canceled";
        case State.locked:
            return "locked";
        case State.financed:
            return "financed";
        default:
            return "UNKNOWN";
    }
}
const basePurchaseOrder = {
    creator: "",
    purchaseorderId: "",
    purchaseorderNumber: "",
    purchaseorderHash: "",
    purchaseorderStatus: "",
    description: "",
    purchaseDate: "",
    deliveryDate: "",
    subtotal: "",
    total: "",
    purchaser: "",
    vendor: "",
    fulfiller: "",
    financer: "",
};
export const PurchaseOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        if (message.purchaseorderNumber !== "") {
            writer.uint32(26).string(message.purchaseorderNumber);
        }
        if (message.purchaseorderHash !== "") {
            writer.uint32(34).string(message.purchaseorderHash);
        }
        if (message.purchaseorderStatus !== "") {
            writer.uint32(42).string(message.purchaseorderStatus);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.purchaseDate !== "") {
            writer.uint32(58).string(message.purchaseDate);
        }
        if (message.deliveryDate !== "") {
            writer.uint32(66).string(message.deliveryDate);
        }
        if (message.subtotal !== "") {
            writer.uint32(74).string(message.subtotal);
        }
        if (message.total !== "") {
            writer.uint32(82).string(message.total);
        }
        if (message.purchaser !== "") {
            writer.uint32(90).string(message.purchaser);
        }
        if (message.vendor !== "") {
            writer.uint32(98).string(message.vendor);
        }
        if (message.fulfiller !== "") {
            writer.uint32(106).string(message.fulfiller);
        }
        if (message.financer !== "") {
            writer.uint32(114).string(message.financer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePurchaseOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                case 3:
                    message.purchaseorderNumber = reader.string();
                    break;
                case 4:
                    message.purchaseorderHash = reader.string();
                    break;
                case 5:
                    message.purchaseorderStatus = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.purchaseDate = reader.string();
                    break;
                case 8:
                    message.deliveryDate = reader.string();
                    break;
                case 9:
                    message.subtotal = reader.string();
                    break;
                case 10:
                    message.total = reader.string();
                    break;
                case 11:
                    message.purchaser = reader.string();
                    break;
                case 12:
                    message.vendor = reader.string();
                    break;
                case 13:
                    message.fulfiller = reader.string();
                    break;
                case 14:
                    message.financer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePurchaseOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.purchaseorderNumber !== undefined &&
            object.purchaseorderNumber !== null) {
            message.purchaseorderNumber = String(object.purchaseorderNumber);
        }
        else {
            message.purchaseorderNumber = "";
        }
        if (object.purchaseorderHash !== undefined &&
            object.purchaseorderHash !== null) {
            message.purchaseorderHash = String(object.purchaseorderHash);
        }
        else {
            message.purchaseorderHash = "";
        }
        if (object.purchaseorderStatus !== undefined &&
            object.purchaseorderStatus !== null) {
            message.purchaseorderStatus = String(object.purchaseorderStatus);
        }
        else {
            message.purchaseorderStatus = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
            message.purchaseDate = String(object.purchaseDate);
        }
        else {
            message.purchaseDate = "";
        }
        if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
            message.deliveryDate = String(object.deliveryDate);
        }
        else {
            message.deliveryDate = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = String(object.subtotal);
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = String(object.total);
        }
        else {
            message.total = "";
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = String(object.purchaser);
        }
        else {
            message.purchaser = "";
        }
        if (object.vendor !== undefined && object.vendor !== null) {
            message.vendor = String(object.vendor);
        }
        else {
            message.vendor = "";
        }
        if (object.fulfiller !== undefined && object.fulfiller !== null) {
            message.fulfiller = String(object.fulfiller);
        }
        else {
            message.fulfiller = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = String(object.financer);
        }
        else {
            message.financer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.purchaseorderNumber !== undefined &&
            (obj.purchaseorderNumber = message.purchaseorderNumber);
        message.purchaseorderHash !== undefined &&
            (obj.purchaseorderHash = message.purchaseorderHash);
        message.purchaseorderStatus !== undefined &&
            (obj.purchaseorderStatus = message.purchaseorderStatus);
        message.description !== undefined &&
            (obj.description = message.description);
        message.purchaseDate !== undefined &&
            (obj.purchaseDate = message.purchaseDate);
        message.deliveryDate !== undefined &&
            (obj.deliveryDate = message.deliveryDate);
        message.subtotal !== undefined && (obj.subtotal = message.subtotal);
        message.total !== undefined && (obj.total = message.total);
        message.purchaser !== undefined && (obj.purchaser = message.purchaser);
        message.vendor !== undefined && (obj.vendor = message.vendor);
        message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);
        message.financer !== undefined && (obj.financer = message.financer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePurchaseOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.purchaseorderNumber !== undefined &&
            object.purchaseorderNumber !== null) {
            message.purchaseorderNumber = object.purchaseorderNumber;
        }
        else {
            message.purchaseorderNumber = "";
        }
        if (object.purchaseorderHash !== undefined &&
            object.purchaseorderHash !== null) {
            message.purchaseorderHash = object.purchaseorderHash;
        }
        else {
            message.purchaseorderHash = "";
        }
        if (object.purchaseorderStatus !== undefined &&
            object.purchaseorderStatus !== null) {
            message.purchaseorderStatus = object.purchaseorderStatus;
        }
        else {
            message.purchaseorderStatus = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
            message.purchaseDate = object.purchaseDate;
        }
        else {
            message.purchaseDate = "";
        }
        if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
            message.deliveryDate = object.deliveryDate;
        }
        else {
            message.deliveryDate = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = object.subtotal;
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = "";
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = object.purchaser;
        }
        else {
            message.purchaser = "";
        }
        if (object.vendor !== undefined && object.vendor !== null) {
            message.vendor = object.vendor;
        }
        else {
            message.vendor = "";
        }
        if (object.fulfiller !== undefined && object.fulfiller !== null) {
            message.fulfiller = object.fulfiller;
        }
        else {
            message.fulfiller = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = object.financer;
        }
        else {
            message.financer = "";
        }
        return message;
    },
};
const baseMsgCreatePurchaseOrderRequest = {
    creator: "",
    purchaseorderId: "",
    purchaseorderNumber: "",
    purchaseorderHash: "",
    purchaseorderStatus: "",
    description: "",
    purchaseDate: "",
    deliveryDate: "",
    subtotal: "",
    total: "",
    purchaser: "",
    vendor: "",
    fulfiller: "",
    financer: "",
};
export const MsgCreatePurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        if (message.purchaseorderNumber !== "") {
            writer.uint32(26).string(message.purchaseorderNumber);
        }
        if (message.purchaseorderHash !== "") {
            writer.uint32(34).string(message.purchaseorderHash);
        }
        if (message.purchaseorderStatus !== "") {
            writer.uint32(42).string(message.purchaseorderStatus);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.purchaseDate !== "") {
            writer.uint32(58).string(message.purchaseDate);
        }
        if (message.deliveryDate !== "") {
            writer.uint32(66).string(message.deliveryDate);
        }
        if (message.subtotal !== "") {
            writer.uint32(74).string(message.subtotal);
        }
        if (message.total !== "") {
            writer.uint32(82).string(message.total);
        }
        if (message.purchaser !== "") {
            writer.uint32(90).string(message.purchaser);
        }
        if (message.vendor !== "") {
            writer.uint32(98).string(message.vendor);
        }
        if (message.fulfiller !== "") {
            writer.uint32(106).string(message.fulfiller);
        }
        if (message.financer !== "") {
            writer.uint32(114).string(message.financer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreatePurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                case 3:
                    message.purchaseorderNumber = reader.string();
                    break;
                case 4:
                    message.purchaseorderHash = reader.string();
                    break;
                case 5:
                    message.purchaseorderStatus = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.purchaseDate = reader.string();
                    break;
                case 8:
                    message.deliveryDate = reader.string();
                    break;
                case 9:
                    message.subtotal = reader.string();
                    break;
                case 10:
                    message.total = reader.string();
                    break;
                case 11:
                    message.purchaser = reader.string();
                    break;
                case 12:
                    message.vendor = reader.string();
                    break;
                case 13:
                    message.fulfiller = reader.string();
                    break;
                case 14:
                    message.financer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreatePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.purchaseorderNumber !== undefined &&
            object.purchaseorderNumber !== null) {
            message.purchaseorderNumber = String(object.purchaseorderNumber);
        }
        else {
            message.purchaseorderNumber = "";
        }
        if (object.purchaseorderHash !== undefined &&
            object.purchaseorderHash !== null) {
            message.purchaseorderHash = String(object.purchaseorderHash);
        }
        else {
            message.purchaseorderHash = "";
        }
        if (object.purchaseorderStatus !== undefined &&
            object.purchaseorderStatus !== null) {
            message.purchaseorderStatus = String(object.purchaseorderStatus);
        }
        else {
            message.purchaseorderStatus = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
            message.purchaseDate = String(object.purchaseDate);
        }
        else {
            message.purchaseDate = "";
        }
        if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
            message.deliveryDate = String(object.deliveryDate);
        }
        else {
            message.deliveryDate = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = String(object.subtotal);
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = String(object.total);
        }
        else {
            message.total = "";
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = String(object.purchaser);
        }
        else {
            message.purchaser = "";
        }
        if (object.vendor !== undefined && object.vendor !== null) {
            message.vendor = String(object.vendor);
        }
        else {
            message.vendor = "";
        }
        if (object.fulfiller !== undefined && object.fulfiller !== null) {
            message.fulfiller = String(object.fulfiller);
        }
        else {
            message.fulfiller = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = String(object.financer);
        }
        else {
            message.financer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.purchaseorderNumber !== undefined &&
            (obj.purchaseorderNumber = message.purchaseorderNumber);
        message.purchaseorderHash !== undefined &&
            (obj.purchaseorderHash = message.purchaseorderHash);
        message.purchaseorderStatus !== undefined &&
            (obj.purchaseorderStatus = message.purchaseorderStatus);
        message.description !== undefined &&
            (obj.description = message.description);
        message.purchaseDate !== undefined &&
            (obj.purchaseDate = message.purchaseDate);
        message.deliveryDate !== undefined &&
            (obj.deliveryDate = message.deliveryDate);
        message.subtotal !== undefined && (obj.subtotal = message.subtotal);
        message.total !== undefined && (obj.total = message.total);
        message.purchaser !== undefined && (obj.purchaser = message.purchaser);
        message.vendor !== undefined && (obj.vendor = message.vendor);
        message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);
        message.financer !== undefined && (obj.financer = message.financer);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreatePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.purchaseorderNumber !== undefined &&
            object.purchaseorderNumber !== null) {
            message.purchaseorderNumber = object.purchaseorderNumber;
        }
        else {
            message.purchaseorderNumber = "";
        }
        if (object.purchaseorderHash !== undefined &&
            object.purchaseorderHash !== null) {
            message.purchaseorderHash = object.purchaseorderHash;
        }
        else {
            message.purchaseorderHash = "";
        }
        if (object.purchaseorderStatus !== undefined &&
            object.purchaseorderStatus !== null) {
            message.purchaseorderStatus = object.purchaseorderStatus;
        }
        else {
            message.purchaseorderStatus = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
            message.purchaseDate = object.purchaseDate;
        }
        else {
            message.purchaseDate = "";
        }
        if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
            message.deliveryDate = object.deliveryDate;
        }
        else {
            message.deliveryDate = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = object.subtotal;
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = "";
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = object.purchaser;
        }
        else {
            message.purchaser = "";
        }
        if (object.vendor !== undefined && object.vendor !== null) {
            message.vendor = object.vendor;
        }
        else {
            message.vendor = "";
        }
        if (object.fulfiller !== undefined && object.fulfiller !== null) {
            message.fulfiller = object.fulfiller;
        }
        else {
            message.fulfiller = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = object.financer;
        }
        else {
            message.financer = "";
        }
        return message;
    },
};
const baseMsgCreatePurchaseOrderResponse = { purchaseorderId: "" };
export const MsgCreatePurchaseOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreatePurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreatePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreatePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgUpdatePurchaseOrderRequest = {
    creator: "",
    purchaseorderId: "",
    purchaseorderNumber: "",
    purchaseorderHash: "",
    purchaseorderStatus: "",
    description: "",
    purchaseDate: "",
    deliveryDate: "",
    subtotal: "",
    total: "",
    purchaser: "",
    vendor: "",
    fulfiller: "",
    financer: "",
};
export const MsgUpdatePurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        if (message.purchaseorderNumber !== "") {
            writer.uint32(26).string(message.purchaseorderNumber);
        }
        if (message.purchaseorderHash !== "") {
            writer.uint32(34).string(message.purchaseorderHash);
        }
        if (message.purchaseorderStatus !== "") {
            writer.uint32(42).string(message.purchaseorderStatus);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.purchaseDate !== "") {
            writer.uint32(58).string(message.purchaseDate);
        }
        if (message.deliveryDate !== "") {
            writer.uint32(66).string(message.deliveryDate);
        }
        if (message.subtotal !== "") {
            writer.uint32(74).string(message.subtotal);
        }
        if (message.total !== "") {
            writer.uint32(82).string(message.total);
        }
        if (message.purchaser !== "") {
            writer.uint32(90).string(message.purchaser);
        }
        if (message.vendor !== "") {
            writer.uint32(98).string(message.vendor);
        }
        if (message.fulfiller !== "") {
            writer.uint32(106).string(message.fulfiller);
        }
        if (message.financer !== "") {
            writer.uint32(114).string(message.financer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                case 3:
                    message.purchaseorderNumber = reader.string();
                    break;
                case 4:
                    message.purchaseorderHash = reader.string();
                    break;
                case 5:
                    message.purchaseorderStatus = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.purchaseDate = reader.string();
                    break;
                case 8:
                    message.deliveryDate = reader.string();
                    break;
                case 9:
                    message.subtotal = reader.string();
                    break;
                case 10:
                    message.total = reader.string();
                    break;
                case 11:
                    message.purchaser = reader.string();
                    break;
                case 12:
                    message.vendor = reader.string();
                    break;
                case 13:
                    message.fulfiller = reader.string();
                    break;
                case 14:
                    message.financer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgUpdatePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.purchaseorderNumber !== undefined &&
            object.purchaseorderNumber !== null) {
            message.purchaseorderNumber = String(object.purchaseorderNumber);
        }
        else {
            message.purchaseorderNumber = "";
        }
        if (object.purchaseorderHash !== undefined &&
            object.purchaseorderHash !== null) {
            message.purchaseorderHash = String(object.purchaseorderHash);
        }
        else {
            message.purchaseorderHash = "";
        }
        if (object.purchaseorderStatus !== undefined &&
            object.purchaseorderStatus !== null) {
            message.purchaseorderStatus = String(object.purchaseorderStatus);
        }
        else {
            message.purchaseorderStatus = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
            message.purchaseDate = String(object.purchaseDate);
        }
        else {
            message.purchaseDate = "";
        }
        if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
            message.deliveryDate = String(object.deliveryDate);
        }
        else {
            message.deliveryDate = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = String(object.subtotal);
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = String(object.total);
        }
        else {
            message.total = "";
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = String(object.purchaser);
        }
        else {
            message.purchaser = "";
        }
        if (object.vendor !== undefined && object.vendor !== null) {
            message.vendor = String(object.vendor);
        }
        else {
            message.vendor = "";
        }
        if (object.fulfiller !== undefined && object.fulfiller !== null) {
            message.fulfiller = String(object.fulfiller);
        }
        else {
            message.fulfiller = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = String(object.financer);
        }
        else {
            message.financer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.purchaseorderNumber !== undefined &&
            (obj.purchaseorderNumber = message.purchaseorderNumber);
        message.purchaseorderHash !== undefined &&
            (obj.purchaseorderHash = message.purchaseorderHash);
        message.purchaseorderStatus !== undefined &&
            (obj.purchaseorderStatus = message.purchaseorderStatus);
        message.description !== undefined &&
            (obj.description = message.description);
        message.purchaseDate !== undefined &&
            (obj.purchaseDate = message.purchaseDate);
        message.deliveryDate !== undefined &&
            (obj.deliveryDate = message.deliveryDate);
        message.subtotal !== undefined && (obj.subtotal = message.subtotal);
        message.total !== undefined && (obj.total = message.total);
        message.purchaser !== undefined && (obj.purchaser = message.purchaser);
        message.vendor !== undefined && (obj.vendor = message.vendor);
        message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);
        message.financer !== undefined && (obj.financer = message.financer);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdatePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.purchaseorderNumber !== undefined &&
            object.purchaseorderNumber !== null) {
            message.purchaseorderNumber = object.purchaseorderNumber;
        }
        else {
            message.purchaseorderNumber = "";
        }
        if (object.purchaseorderHash !== undefined &&
            object.purchaseorderHash !== null) {
            message.purchaseorderHash = object.purchaseorderHash;
        }
        else {
            message.purchaseorderHash = "";
        }
        if (object.purchaseorderStatus !== undefined &&
            object.purchaseorderStatus !== null) {
            message.purchaseorderStatus = object.purchaseorderStatus;
        }
        else {
            message.purchaseorderStatus = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
            message.purchaseDate = object.purchaseDate;
        }
        else {
            message.purchaseDate = "";
        }
        if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
            message.deliveryDate = object.deliveryDate;
        }
        else {
            message.deliveryDate = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = object.subtotal;
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = "";
        }
        if (object.purchaser !== undefined && object.purchaser !== null) {
            message.purchaser = object.purchaser;
        }
        else {
            message.purchaser = "";
        }
        if (object.vendor !== undefined && object.vendor !== null) {
            message.vendor = object.vendor;
        }
        else {
            message.vendor = "";
        }
        if (object.fulfiller !== undefined && object.fulfiller !== null) {
            message.fulfiller = object.fulfiller;
        }
        else {
            message.fulfiller = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = object.financer;
        }
        else {
            message.financer = "";
        }
        return message;
    },
};
const baseMsgUpdatePurchaseOrderResponse = { purchaseorderId: "" };
export const MsgUpdatePurchaseOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgUpdatePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdatePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgDeletePurchaseOrderRequest = {
    creator: "",
    purchaseorderId: 0,
};
export const MsgDeletePurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== 0) {
            writer.uint32(16).uint64(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgDeletePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = Number(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDeletePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = 0;
        }
        return message;
    },
};
const baseMsgDeletePurchaseOrderResponse = { purchaseorderId: "" };
export const MsgDeletePurchaseOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgDeletePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDeletePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgCompletePurchaseOrderRequest = {
    creator: "",
    purchaseorderId: "",
};
export const MsgCompletePurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCompletePurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCompletePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCompletePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgCompletePurchaseOrderResponse = { purchaseorderId: "" };
export const MsgCompletePurchaseOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCompletePurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCompletePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCompletePurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgCancelPurchaseOrderRequest = {
    creator: "",
    purchaseorderId: "",
};
export const MsgCancelPurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelPurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCancelPurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCancelPurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgCancelPurchaseOrderResponse = { purchaseorderId: "" };
export const MsgCancelPurchaseOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelPurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCancelPurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCancelPurchaseOrderResponse,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgLockPurchaseOrderRequest = {
    creator: "",
    purchaseorderId: "",
};
export const MsgLockPurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgLockPurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgLockPurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgLockPurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgLockPurchaseOrderResponse = {};
export const MsgLockPurchaseOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgLockPurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgLockPurchaseOrderResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgLockPurchaseOrderResponse,
        };
        return message;
    },
};
const baseMsgFinancePurchaseOrderRequest = {
    creator: "",
    purchaseorderId: "",
};
export const MsgFinancePurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.purchaseorderId !== "") {
            writer.uint32(18).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgFinancePurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.purchaseorderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgFinancePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgFinancePurchaseOrderRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseMsgFinancePurchaseOrderResponse = {};
export const MsgFinancePurchaseOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgFinancePurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgFinancePurchaseOrderResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgFinancePurchaseOrderResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Create(request) {
        const data = MsgCreatePurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Create", data);
        return promise.then((data) => MsgCreatePurchaseOrderResponse.decode(new Reader(data)));
    }
    Update(request) {
        const data = MsgUpdatePurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Update", data);
        return promise.then((data) => MsgUpdatePurchaseOrderResponse.decode(new Reader(data)));
    }
    Delete(request) {
        const data = MsgDeletePurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Delete", data);
        return promise.then((data) => MsgDeletePurchaseOrderResponse.decode(new Reader(data)));
    }
    Complete(request) {
        const data = MsgCompletePurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Complete", data);
        return promise.then((data) => MsgCompletePurchaseOrderResponse.decode(new Reader(data)));
    }
    Cancel(request) {
        const data = MsgCancelPurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Cancel", data);
        return promise.then((data) => MsgCancelPurchaseOrderResponse.decode(new Reader(data)));
    }
    Lock(request) {
        const data = MsgLockPurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Lock", data);
        return promise.then((data) => MsgLockPurchaseOrderResponse.decode(new Reader(data)));
    }
    Finance(request) {
        const data = MsgFinancePurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Msg", "Finance", data);
        return promise.then((data) => MsgFinancePurchaseOrderResponse.decode(new Reader(data)));
    }
}
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
