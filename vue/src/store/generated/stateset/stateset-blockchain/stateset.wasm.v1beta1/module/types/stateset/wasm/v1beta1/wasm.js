/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "stateset.wasm.v1beta1";
const baseParams = {
    maxContractSize: 0,
    maxContractGas: 0,
    maxContractMsgSize: 0,
};
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.maxContractSize !== 0) {
            writer.uint32(8).uint64(message.maxContractSize);
        }
        if (message.maxContractGas !== 0) {
            writer.uint32(16).uint64(message.maxContractGas);
        }
        if (message.maxContractMsgSize !== 0) {
            writer.uint32(24).uint64(message.maxContractMsgSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxContractSize = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.maxContractGas = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.maxContractMsgSize = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        if (object.maxContractSize !== undefined &&
            object.maxContractSize !== null) {
            message.maxContractSize = Number(object.maxContractSize);
        }
        else {
            message.maxContractSize = 0;
        }
        if (object.maxContractGas !== undefined && object.maxContractGas !== null) {
            message.maxContractGas = Number(object.maxContractGas);
        }
        else {
            message.maxContractGas = 0;
        }
        if (object.maxContractMsgSize !== undefined &&
            object.maxContractMsgSize !== null) {
            message.maxContractMsgSize = Number(object.maxContractMsgSize);
        }
        else {
            message.maxContractMsgSize = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxContractSize !== undefined &&
            (obj.maxContractSize = message.maxContractSize);
        message.maxContractGas !== undefined &&
            (obj.maxContractGas = message.maxContractGas);
        message.maxContractMsgSize !== undefined &&
            (obj.maxContractMsgSize = message.maxContractMsgSize);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.maxContractSize !== undefined &&
            object.maxContractSize !== null) {
            message.maxContractSize = object.maxContractSize;
        }
        else {
            message.maxContractSize = 0;
        }
        if (object.maxContractGas !== undefined && object.maxContractGas !== null) {
            message.maxContractGas = object.maxContractGas;
        }
        else {
            message.maxContractGas = 0;
        }
        if (object.maxContractMsgSize !== undefined &&
            object.maxContractMsgSize !== null) {
            message.maxContractMsgSize = object.maxContractMsgSize;
        }
        else {
            message.maxContractMsgSize = 0;
        }
        return message;
    },
};
const baseCodeInfo = { codeId: 0, creator: "" };
export const CodeInfo = {
    encode(message, writer = Writer.create()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(18).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(26).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCodeInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.codeHash = reader.bytes();
                    break;
                case 3:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCodeInfo };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = Number(object.codeId);
        }
        else {
            message.codeId = 0;
        }
        if (object.codeHash !== undefined && object.codeHash !== null) {
            message.codeHash = bytesFromBase64(object.codeHash);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.codeHash !== undefined &&
            (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCodeInfo };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = object.codeId;
        }
        else {
            message.codeId = 0;
        }
        if (object.codeHash !== undefined && object.codeHash !== null) {
            message.codeHash = object.codeHash;
        }
        else {
            message.codeHash = new Uint8Array();
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseContractInfo = {
    address: "",
    creator: "",
    admin: "",
    codeId: 0,
};
export const ContractInfo = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.codeId !== 0) {
            writer.uint32(32).uint64(message.codeId);
        }
        if (message.initMsg.length !== 0) {
            writer.uint32(42).bytes(message.initMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContractInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.codeId = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.initMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContractInfo };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
        }
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = Number(object.codeId);
        }
        else {
            message.codeId = 0;
        }
        if (object.initMsg !== undefined && object.initMsg !== null) {
            message.initMsg = bytesFromBase64(object.initMsg);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.creator !== undefined && (obj.creator = message.creator);
        message.admin !== undefined && (obj.admin = message.admin);
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.initMsg !== undefined &&
            (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContractInfo };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
        }
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = object.codeId;
        }
        else {
            message.codeId = 0;
        }
        if (object.initMsg !== undefined && object.initMsg !== null) {
            message.initMsg = object.initMsg;
        }
        else {
            message.initMsg = new Uint8Array();
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
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
