/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "stateset.agreement.v1beta1";
const baseEventCreateAgreement = {
    agreementId: "",
    creator: "",
    counterparty: "",
    totalAmount: "",
    startDate: "",
    endDate: "",
};
export const EventCreateAgreement = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.counterparty !== "") {
            writer.uint32(26).string(message.counterparty);
        }
        if (message.totalAmount !== "") {
            writer.uint32(34).string(message.totalAmount);
        }
        if (message.startDate !== "") {
            writer.uint32(42).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(50).string(message.endDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventCreateAgreement };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.counterparty = reader.string();
                    break;
                case 4:
                    message.totalAmount = reader.string();
                    break;
                case 5:
                    message.startDate = reader.string();
                    break;
                case 6:
                    message.endDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventCreateAgreement };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
        }
        if (object.totalAmount !== undefined && object.totalAmount !== null) {
            message.totalAmount = String(object.totalAmount);
        }
        else {
            message.totalAmount = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = String(object.startDate);
        }
        else {
            message.startDate = "";
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = String(object.endDate);
        }
        else {
            message.endDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.creator !== undefined && (obj.creator = message.creator);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.totalAmount !== undefined &&
            (obj.totalAmount = message.totalAmount);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventCreateAgreement };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
        }
        if (object.totalAmount !== undefined && object.totalAmount !== null) {
            message.totalAmount = object.totalAmount;
        }
        else {
            message.totalAmount = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = "";
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = "";
        }
        return message;
    },
};
const baseEventActivated = {
    agreementId: "",
    activator: "",
    activationDate: "",
};
export const EventActivated = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.activator !== "") {
            writer.uint32(18).string(message.activator);
        }
        if (message.activationDate !== "") {
            writer.uint32(26).string(message.activationDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventActivated };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.activator = reader.string();
                    break;
                case 3:
                    message.activationDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventActivated };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.activator !== undefined && object.activator !== null) {
            message.activator = String(object.activator);
        }
        else {
            message.activator = "";
        }
        if (object.activationDate !== undefined && object.activationDate !== null) {
            message.activationDate = String(object.activationDate);
        }
        else {
            message.activationDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.activator !== undefined && (obj.activator = message.activator);
        message.activationDate !== undefined &&
            (obj.activationDate = message.activationDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventActivated };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.activator !== undefined && object.activator !== null) {
            message.activator = object.activator;
        }
        else {
            message.activator = "";
        }
        if (object.activationDate !== undefined && object.activationDate !== null) {
            message.activationDate = object.activationDate;
        }
        else {
            message.activationDate = "";
        }
        return message;
    },
};
const baseEventRenewed = {
    agreementId: "",
    renewer: "",
    renewalDate: "",
};
export const EventRenewed = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.renewer !== "") {
            writer.uint32(18).string(message.renewer);
        }
        if (message.renewalDate !== "") {
            writer.uint32(26).string(message.renewalDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventRenewed };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.renewer = reader.string();
                    break;
                case 3:
                    message.renewalDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventRenewed };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.renewer !== undefined && object.renewer !== null) {
            message.renewer = String(object.renewer);
        }
        else {
            message.renewer = "";
        }
        if (object.renewalDate !== undefined && object.renewalDate !== null) {
            message.renewalDate = String(object.renewalDate);
        }
        else {
            message.renewalDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.renewer !== undefined && (obj.renewer = message.renewer);
        message.renewalDate !== undefined &&
            (obj.renewalDate = message.renewalDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventRenewed };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.renewer !== undefined && object.renewer !== null) {
            message.renewer = object.renewer;
        }
        else {
            message.renewer = "";
        }
        if (object.renewalDate !== undefined && object.renewalDate !== null) {
            message.renewalDate = object.renewalDate;
        }
        else {
            message.renewalDate = "";
        }
        return message;
    },
};
const baseEventTerminated = {
    agreementId: "",
    terminator: "",
    terminationDate: "",
};
export const EventTerminated = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.terminator !== "") {
            writer.uint32(18).string(message.terminator);
        }
        if (message.terminationDate !== "") {
            writer.uint32(26).string(message.terminationDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventTerminated };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.terminator = reader.string();
                    break;
                case 3:
                    message.terminationDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventTerminated };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.terminator !== undefined && object.terminator !== null) {
            message.terminator = String(object.terminator);
        }
        else {
            message.terminator = "";
        }
        if (object.terminationDate !== undefined &&
            object.terminationDate !== null) {
            message.terminationDate = String(object.terminationDate);
        }
        else {
            message.terminationDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.terminator !== undefined && (obj.terminator = message.terminator);
        message.terminationDate !== undefined &&
            (obj.terminationDate = message.terminationDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventTerminated };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.terminator !== undefined && object.terminator !== null) {
            message.terminator = object.terminator;
        }
        else {
            message.terminator = "";
        }
        if (object.terminationDate !== undefined &&
            object.terminationDate !== null) {
            message.terminationDate = object.terminationDate;
        }
        else {
            message.terminationDate = "";
        }
        return message;
    },
};
const baseEventAmended = {
    agreementId: "",
    amender: "",
    amendmentDate: "",
};
export const EventAmended = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.amender !== "") {
            writer.uint32(18).string(message.amender);
        }
        if (message.amendmentDate !== "") {
            writer.uint32(26).string(message.amendmentDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventAmended };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.amender = reader.string();
                    break;
                case 3:
                    message.amendmentDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventAmended };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.amender !== undefined && object.amender !== null) {
            message.amender = String(object.amender);
        }
        else {
            message.amender = "";
        }
        if (object.amendmentDate !== undefined && object.amendmentDate !== null) {
            message.amendmentDate = String(object.amendmentDate);
        }
        else {
            message.amendmentDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.amender !== undefined && (obj.amender = message.amender);
        message.amendmentDate !== undefined &&
            (obj.amendmentDate = message.amendmentDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventAmended };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.amender !== undefined && object.amender !== null) {
            message.amender = object.amender;
        }
        else {
            message.amender = "";
        }
        if (object.amendmentDate !== undefined && object.amendmentDate !== null) {
            message.amendmentDate = object.amendmentDate;
        }
        else {
            message.amendmentDate = "";
        }
        return message;
    },
};
const baseEventExpired = {
    agreementId: "",
    expirer: "",
    expirationDate: "",
};
export const EventExpired = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.expirer !== "") {
            writer.uint32(18).string(message.expirer);
        }
        if (message.expirationDate !== "") {
            writer.uint32(26).string(message.expirationDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventExpired };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.expirer = reader.string();
                    break;
                case 3:
                    message.expirationDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventExpired };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.expirer !== undefined && object.expirer !== null) {
            message.expirer = String(object.expirer);
        }
        else {
            message.expirer = "";
        }
        if (object.expirationDate !== undefined && object.expirationDate !== null) {
            message.expirationDate = String(object.expirationDate);
        }
        else {
            message.expirationDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.expirer !== undefined && (obj.expirer = message.expirer);
        message.expirationDate !== undefined &&
            (obj.expirationDate = message.expirationDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventExpired };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.expirer !== undefined && object.expirer !== null) {
            message.expirer = object.expirer;
        }
        else {
            message.expirer = "";
        }
        if (object.expirationDate !== undefined && object.expirationDate !== null) {
            message.expirationDate = object.expirationDate;
        }
        else {
            message.expirationDate = "";
        }
        return message;
    },
};
const baseEventFinanced = {
    agreementId: "",
    financer: "",
    financeDate: "",
};
export const EventFinanced = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        if (message.financer !== "") {
            writer.uint32(18).string(message.financer);
        }
        if (message.financeDate !== "") {
            writer.uint32(26).string(message.financeDate);
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
                    message.agreementId = reader.string();
                    break;
                case 2:
                    message.financer = reader.string();
                    break;
                case 3:
                    message.financeDate = reader.string();
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
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = String(object.financer);
        }
        else {
            message.financer = "";
        }
        if (object.financeDate !== undefined && object.financeDate !== null) {
            message.financeDate = String(object.financeDate);
        }
        else {
            message.financeDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.financer !== undefined && (obj.financer = message.financer);
        message.financeDate !== undefined &&
            (obj.financeDate = message.financeDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventFinanced };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.financer !== undefined && object.financer !== null) {
            message.financer = object.financer;
        }
        else {
            message.financer = "";
        }
        if (object.financeDate !== undefined && object.financeDate !== null) {
            message.financeDate = object.financeDate;
        }
        else {
            message.financeDate = "";
        }
        return message;
    },
};
