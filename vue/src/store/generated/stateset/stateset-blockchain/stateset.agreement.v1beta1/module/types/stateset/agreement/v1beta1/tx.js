/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const protobufPackage = "stateset.agreement.v1beta1";
/** State is an enum which refers to state of an agreement */
export var State;
(function (State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    State[State["invalid"] = 0] = "invalid";
    State[State["request"] = 1] = "request";
    State[State["active"] = 2] = "active";
    State[State["amended"] = 3] = "amended";
    State[State["renewed"] = 4] = "renewed";
    State[State["terminated"] = 5] = "terminated";
    State[State["expired"] = 6] = "expired";
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
        case "active":
            return State.active;
        case 3:
        case "amended":
            return State.amended;
        case 4:
        case "renewed":
            return State.renewed;
        case 5:
        case "terminated":
            return State.terminated;
        case 6:
        case "expired":
            return State.expired;
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
        case State.active:
            return "active";
        case State.amended:
            return "amended";
        case State.renewed:
            return "renewed";
        case State.terminated:
            return "terminated";
        case State.expired:
            return "expired";
        default:
            return "UNKNOWN";
    }
}
const baseAgreement = {
    creator: "",
    agreementId: "",
    agreementNumber: "",
    agreementName: "",
    agreementType: "",
    agreementStatus: "",
    totalAgreementValue: "",
    party: "",
    counterparty: "",
    startDate: "",
    endDate: "",
};
export const Agreement = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        if (message.agreementNumber !== "") {
            writer.uint32(26).string(message.agreementNumber);
        }
        if (message.agreementName !== "") {
            writer.uint32(34).string(message.agreementName);
        }
        if (message.agreementType !== "") {
            writer.uint32(42).string(message.agreementType);
        }
        if (message.agreementStatus !== "") {
            writer.uint32(50).string(message.agreementStatus);
        }
        if (message.totalAgreementValue !== "") {
            writer.uint32(58).string(message.totalAgreementValue);
        }
        if (message.party !== "") {
            writer.uint32(66).string(message.party);
        }
        if (message.counterparty !== "") {
            writer.uint32(74).string(message.counterparty);
        }
        if (message.startDate !== "") {
            writer.uint32(82).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(90).string(message.endDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAgreement };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
                    break;
                case 3:
                    message.agreementNumber = reader.string();
                    break;
                case 4:
                    message.agreementName = reader.string();
                    break;
                case 5:
                    message.agreementType = reader.string();
                    break;
                case 6:
                    message.agreementStatus = reader.string();
                    break;
                case 7:
                    message.totalAgreementValue = reader.string();
                    break;
                case 8:
                    message.party = reader.string();
                    break;
                case 9:
                    message.counterparty = reader.string();
                    break;
                case 10:
                    message.startDate = reader.string();
                    break;
                case 11:
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
        const message = { ...baseAgreement };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.agreementNumber !== undefined &&
            object.agreementNumber !== null) {
            message.agreementNumber = String(object.agreementNumber);
        }
        else {
            message.agreementNumber = "";
        }
        if (object.agreementName !== undefined && object.agreementName !== null) {
            message.agreementName = String(object.agreementName);
        }
        else {
            message.agreementName = "";
        }
        if (object.agreementType !== undefined && object.agreementType !== null) {
            message.agreementType = String(object.agreementType);
        }
        else {
            message.agreementType = "";
        }
        if (object.agreementStatus !== undefined &&
            object.agreementStatus !== null) {
            message.agreementStatus = String(object.agreementStatus);
        }
        else {
            message.agreementStatus = "";
        }
        if (object.totalAgreementValue !== undefined &&
            object.totalAgreementValue !== null) {
            message.totalAgreementValue = String(object.totalAgreementValue);
        }
        else {
            message.totalAgreementValue = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = String(object.party);
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.agreementNumber !== undefined &&
            (obj.agreementNumber = message.agreementNumber);
        message.agreementName !== undefined &&
            (obj.agreementName = message.agreementName);
        message.agreementType !== undefined &&
            (obj.agreementType = message.agreementType);
        message.agreementStatus !== undefined &&
            (obj.agreementStatus = message.agreementStatus);
        message.totalAgreementValue !== undefined &&
            (obj.totalAgreementValue = message.totalAgreementValue);
        message.party !== undefined && (obj.party = message.party);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAgreement };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.agreementNumber !== undefined &&
            object.agreementNumber !== null) {
            message.agreementNumber = object.agreementNumber;
        }
        else {
            message.agreementNumber = "";
        }
        if (object.agreementName !== undefined && object.agreementName !== null) {
            message.agreementName = object.agreementName;
        }
        else {
            message.agreementName = "";
        }
        if (object.agreementType !== undefined && object.agreementType !== null) {
            message.agreementType = object.agreementType;
        }
        else {
            message.agreementType = "";
        }
        if (object.agreementStatus !== undefined &&
            object.agreementStatus !== null) {
            message.agreementStatus = object.agreementStatus;
        }
        else {
            message.agreementStatus = "";
        }
        if (object.totalAgreementValue !== undefined &&
            object.totalAgreementValue !== null) {
            message.totalAgreementValue = object.totalAgreementValue;
        }
        else {
            message.totalAgreementValue = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = object.party;
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
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
const baseAgreementFilters = { owner: "", state: "" };
export const AgreementFilters = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(18).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAgreementFilters };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAgreementFilters };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        else {
            message.state = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAgreementFilters };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = "";
        }
        return message;
    },
};
const baseMsgCreateAgreementRequest = {
    creator: "",
    agreementId: "",
    agreementNumber: "",
    agreementName: "",
    agreementType: "",
    agreementStatus: "",
    totalAgreementValue: 0,
    party: "",
    counterparty: "",
};
export const MsgCreateAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        if (message.agreementNumber !== "") {
            writer.uint32(26).string(message.agreementNumber);
        }
        if (message.agreementName !== "") {
            writer.uint32(34).string(message.agreementName);
        }
        if (message.agreementType !== "") {
            writer.uint32(42).string(message.agreementType);
        }
        if (message.agreementStatus !== "") {
            writer.uint32(50).string(message.agreementStatus);
        }
        if (message.totalAgreementValue !== 0) {
            writer.uint32(56).int32(message.totalAgreementValue);
        }
        if (message.party !== "") {
            writer.uint32(66).string(message.party);
        }
        if (message.counterparty !== "") {
            writer.uint32(74).string(message.counterparty);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(82).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
                    break;
                case 3:
                    message.agreementNumber = reader.string();
                    break;
                case 4:
                    message.agreementName = reader.string();
                    break;
                case 5:
                    message.agreementType = reader.string();
                    break;
                case 6:
                    message.agreementStatus = reader.string();
                    break;
                case 7:
                    message.totalAgreementValue = reader.int32();
                    break;
                case 8:
                    message.party = reader.string();
                    break;
                case 9:
                    message.counterparty = reader.string();
                    break;
                case 10:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            ...baseMsgCreateAgreementRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.agreementNumber !== undefined &&
            object.agreementNumber !== null) {
            message.agreementNumber = String(object.agreementNumber);
        }
        else {
            message.agreementNumber = "";
        }
        if (object.agreementName !== undefined && object.agreementName !== null) {
            message.agreementName = String(object.agreementName);
        }
        else {
            message.agreementName = "";
        }
        if (object.agreementType !== undefined && object.agreementType !== null) {
            message.agreementType = String(object.agreementType);
        }
        else {
            message.agreementType = "";
        }
        if (object.agreementStatus !== undefined &&
            object.agreementStatus !== null) {
            message.agreementStatus = String(object.agreementStatus);
        }
        else {
            message.agreementStatus = "";
        }
        if (object.totalAgreementValue !== undefined &&
            object.totalAgreementValue !== null) {
            message.totalAgreementValue = Number(object.totalAgreementValue);
        }
        else {
            message.totalAgreementValue = 0;
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = String(object.party);
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = fromJsonTimestamp(object.startDate);
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = fromJsonTimestamp(object.endDate);
        }
        else {
            message.endDate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.agreementNumber !== undefined &&
            (obj.agreementNumber = message.agreementNumber);
        message.agreementName !== undefined &&
            (obj.agreementName = message.agreementName);
        message.agreementType !== undefined &&
            (obj.agreementType = message.agreementType);
        message.agreementStatus !== undefined &&
            (obj.agreementStatus = message.agreementStatus);
        message.totalAgreementValue !== undefined &&
            (obj.totalAgreementValue = message.totalAgreementValue);
        message.party !== undefined && (obj.party = message.party);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.startDate !== undefined &&
            (obj.startDate =
                message.startDate !== undefined
                    ? message.startDate.toISOString()
                    : null);
        message.endDate !== undefined &&
            (obj.endDate =
                message.endDate !== undefined ? message.endDate.toISOString() : null);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateAgreementRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.agreementNumber !== undefined &&
            object.agreementNumber !== null) {
            message.agreementNumber = object.agreementNumber;
        }
        else {
            message.agreementNumber = "";
        }
        if (object.agreementName !== undefined && object.agreementName !== null) {
            message.agreementName = object.agreementName;
        }
        else {
            message.agreementName = "";
        }
        if (object.agreementType !== undefined && object.agreementType !== null) {
            message.agreementType = object.agreementType;
        }
        else {
            message.agreementType = "";
        }
        if (object.agreementStatus !== undefined &&
            object.agreementStatus !== null) {
            message.agreementStatus = object.agreementStatus;
        }
        else {
            message.agreementStatus = "";
        }
        if (object.totalAgreementValue !== undefined &&
            object.totalAgreementValue !== null) {
            message.totalAgreementValue = object.totalAgreementValue;
        }
        else {
            message.totalAgreementValue = 0;
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = object.party;
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = undefined;
        }
        return message;
    },
};
const baseMsgCreateAgreementResponse = { agreementId: "" };
export const MsgCreateAgreementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateAgreementResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
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
            ...baseMsgCreateAgreementResponse,
        };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateAgreementResponse,
        };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgUpdateAgreementRequest = {
    sender: "",
    agreementId: "",
    agreementNumber: "",
    agreementName: "",
    agreementType: "",
    agreementStatus: "",
    totalAgreementValue: 0,
    party: "",
    counterparty: "",
};
export const MsgUpdateAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        if (message.agreementNumber !== "") {
            writer.uint32(26).string(message.agreementNumber);
        }
        if (message.agreementName !== "") {
            writer.uint32(34).string(message.agreementName);
        }
        if (message.agreementType !== "") {
            writer.uint32(42).string(message.agreementType);
        }
        if (message.agreementStatus !== "") {
            writer.uint32(50).string(message.agreementStatus);
        }
        if (message.totalAgreementValue !== 0) {
            writer.uint32(56).int32(message.totalAgreementValue);
        }
        if (message.party !== "") {
            writer.uint32(66).string(message.party);
        }
        if (message.counterparty !== "") {
            writer.uint32(74).string(message.counterparty);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(82).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
                    break;
                case 3:
                    message.agreementNumber = reader.string();
                    break;
                case 4:
                    message.agreementName = reader.string();
                    break;
                case 5:
                    message.agreementType = reader.string();
                    break;
                case 6:
                    message.agreementStatus = reader.string();
                    break;
                case 7:
                    message.totalAgreementValue = reader.int32();
                    break;
                case 8:
                    message.party = reader.string();
                    break;
                case 9:
                    message.counterparty = reader.string();
                    break;
                case 10:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            ...baseMsgUpdateAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        if (object.agreementNumber !== undefined &&
            object.agreementNumber !== null) {
            message.agreementNumber = String(object.agreementNumber);
        }
        else {
            message.agreementNumber = "";
        }
        if (object.agreementName !== undefined && object.agreementName !== null) {
            message.agreementName = String(object.agreementName);
        }
        else {
            message.agreementName = "";
        }
        if (object.agreementType !== undefined && object.agreementType !== null) {
            message.agreementType = String(object.agreementType);
        }
        else {
            message.agreementType = "";
        }
        if (object.agreementStatus !== undefined &&
            object.agreementStatus !== null) {
            message.agreementStatus = String(object.agreementStatus);
        }
        else {
            message.agreementStatus = "";
        }
        if (object.totalAgreementValue !== undefined &&
            object.totalAgreementValue !== null) {
            message.totalAgreementValue = Number(object.totalAgreementValue);
        }
        else {
            message.totalAgreementValue = 0;
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = String(object.party);
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = fromJsonTimestamp(object.startDate);
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = fromJsonTimestamp(object.endDate);
        }
        else {
            message.endDate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.agreementNumber !== undefined &&
            (obj.agreementNumber = message.agreementNumber);
        message.agreementName !== undefined &&
            (obj.agreementName = message.agreementName);
        message.agreementType !== undefined &&
            (obj.agreementType = message.agreementType);
        message.agreementStatus !== undefined &&
            (obj.agreementStatus = message.agreementStatus);
        message.totalAgreementValue !== undefined &&
            (obj.totalAgreementValue = message.totalAgreementValue);
        message.party !== undefined && (obj.party = message.party);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.startDate !== undefined &&
            (obj.startDate =
                message.startDate !== undefined
                    ? message.startDate.toISOString()
                    : null);
        message.endDate !== undefined &&
            (obj.endDate =
                message.endDate !== undefined ? message.endDate.toISOString() : null);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        if (object.agreementNumber !== undefined &&
            object.agreementNumber !== null) {
            message.agreementNumber = object.agreementNumber;
        }
        else {
            message.agreementNumber = "";
        }
        if (object.agreementName !== undefined && object.agreementName !== null) {
            message.agreementName = object.agreementName;
        }
        else {
            message.agreementName = "";
        }
        if (object.agreementType !== undefined && object.agreementType !== null) {
            message.agreementType = object.agreementType;
        }
        else {
            message.agreementType = "";
        }
        if (object.agreementStatus !== undefined &&
            object.agreementStatus !== null) {
            message.agreementStatus = object.agreementStatus;
        }
        else {
            message.agreementStatus = "";
        }
        if (object.totalAgreementValue !== undefined &&
            object.totalAgreementValue !== null) {
            message.totalAgreementValue = object.totalAgreementValue;
        }
        else {
            message.totalAgreementValue = 0;
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = object.party;
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
        }
        if (object.startDate !== undefined && object.startDate !== null) {
            message.startDate = object.startDate;
        }
        else {
            message.startDate = undefined;
        }
        if (object.endDate !== undefined && object.endDate !== null) {
            message.endDate = object.endDate;
        }
        else {
            message.endDate = undefined;
        }
        return message;
    },
};
const baseMsgUpdateAgreementResponse = { agreementId: "" };
export const MsgUpdateAgreementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateAgreementResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreementId = reader.string();
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
            ...baseMsgUpdateAgreementResponse,
        };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateAgreementResponse,
        };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgDeleteAgreementRequest = { sender: "", agreementId: "" };
export const MsgDeleteAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
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
            ...baseMsgDeleteAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDeleteAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgDeleteAgreementResponse = {};
export const MsgDeleteAgreementResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteAgreementResponse,
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
            ...baseMsgDeleteAgreementResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteAgreementResponse,
        };
        return message;
    },
};
const baseMsgActivateAgreementRequest = {
    sneder: "",
    agreementId: "",
    activationDate: "",
};
export const MsgActivateAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sneder !== "") {
            writer.uint32(10).string(message.sneder);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        if (message.activationDate !== "") {
            writer.uint32(26).string(message.activationDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgActivateAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sneder = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
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
        const message = {
            ...baseMsgActivateAgreementRequest,
        };
        if (object.sneder !== undefined && object.sneder !== null) {
            message.sneder = String(object.sneder);
        }
        else {
            message.sneder = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
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
        message.sneder !== undefined && (obj.sneder = message.sneder);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        message.activationDate !== undefined &&
            (obj.activationDate = message.activationDate);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgActivateAgreementRequest,
        };
        if (object.sneder !== undefined && object.sneder !== null) {
            message.sneder = object.sneder;
        }
        else {
            message.sneder = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
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
const baseMsgActivateAgreementResponse = {};
export const MsgActivateAgreementResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgActivateAgreementResponse,
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
            ...baseMsgActivateAgreementResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgActivateAgreementResponse,
        };
        return message;
    },
};
const baseMsgRenewAgreementRequest = { sender: "", agreementId: "" };
export const MsgRenewAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRenewAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
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
            ...baseMsgRenewAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRenewAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgRenewAgreementResponse = {};
export const MsgRenewAgreementResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRenewAgreementResponse,
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
            ...baseMsgRenewAgreementResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRenewAgreementResponse,
        };
        return message;
    },
};
const baseMsgAmendAgreementRequest = { sender: "", agreementId: "" };
export const MsgAmendAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAmendAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
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
            ...baseMsgAmendAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgAmendAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgAmendAgreementResponse = {};
export const MsgAmendAgreementResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAmendAgreementResponse,
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
            ...baseMsgAmendAgreementResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgAmendAgreementResponse,
        };
        return message;
    },
};
const baseMsgTerminateAgreementRequest = {
    sender: "",
    agreementId: "",
};
export const MsgTerminateAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgTerminateAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
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
            ...baseMsgTerminateAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgTerminateAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgTerminateAgreementResponse = {};
export const MsgTerminateAgreementResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgTerminateAgreementResponse,
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
            ...baseMsgTerminateAgreementResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgTerminateAgreementResponse,
        };
        return message;
    },
};
const baseMsgExpireAgreementRequest = { sender: "", agreementId: "" };
export const MsgExpireAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.agreementId !== "") {
            writer.uint32(18).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExpireAgreementRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.agreementId = reader.string();
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
            ...baseMsgExpireAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgExpireAgreementRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseMsgExpireAgreementResponse = {};
export const MsgExpireAgreementResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExpireAgreementResponse,
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
            ...baseMsgExpireAgreementResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgExpireAgreementResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Create(request) {
        const data = MsgCreateAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Create", data);
        return promise.then((data) => MsgCreateAgreementResponse.decode(new Reader(data)));
    }
    Update(request) {
        const data = MsgUpdateAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Update", data);
        return promise.then((data) => MsgUpdateAgreementResponse.decode(new Reader(data)));
    }
    Delete(request) {
        const data = MsgDeleteAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Delete", data);
        return promise.then((data) => MsgDeleteAgreementResponse.decode(new Reader(data)));
    }
    Activate(request) {
        const data = MsgActivateAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Activate", data);
        return promise.then((data) => MsgActivateAgreementResponse.decode(new Reader(data)));
    }
    Renew(request) {
        const data = MsgRenewAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Renew", data);
        return promise.then((data) => MsgRenewAgreementResponse.decode(new Reader(data)));
    }
    Amend(request) {
        const data = MsgAmendAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Amend", data);
        return promise.then((data) => MsgAmendAgreementResponse.decode(new Reader(data)));
    }
    Terminate(request) {
        const data = MsgTerminateAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Terminate", data);
        return promise.then((data) => MsgTerminateAgreementResponse.decode(new Reader(data)));
    }
    Expire(request) {
        const data = MsgExpireAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Msg", "Expire", data);
        return promise.then((data) => MsgExpireAgreementResponse.decode(new Reader(data)));
    }
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
