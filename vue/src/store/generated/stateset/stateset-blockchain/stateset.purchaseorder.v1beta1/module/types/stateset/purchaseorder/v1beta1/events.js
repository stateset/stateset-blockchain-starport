/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "stateset.purchaseorder.v1beta1";
const baseEventCreatePurchaseOrder = {
    purchaseorderId: "",
    creator: "",
    amount: "",
};
export const EventCreatePurchaseOrder = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEventCreatePurchaseOrder,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
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
            ...baseEventCreatePurchaseOrder,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseEventCreatePurchaseOrder,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
const baseEventCompleted = {
    purchaseorderId: "",
    creator: "",
    amount: "",
};
export const EventCompleted = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCompleted };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCompleted };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCompleted };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
const baseEventCancelled = {
    purchaseorderId: "",
    creator: "",
    amount: "",
};
export const EventCancelled = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCancelled };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCancelled };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCancelled };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
const baseEventLocked = {
    purchaseorderId: "",
    creator: "",
    amount: "",
};
export const EventLocked = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventLocked };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventLocked };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventLocked };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
const baseEventFinanced = {
    purchaseorderId: "",
    creator: "",
    amount: "",
};
export const EventFinanced = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventFinanced };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventFinanced };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventFinanced };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
