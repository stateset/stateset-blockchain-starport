/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo, } from "../../../stateset/wasm/v1beta1/wasm";
export const protobufPackage = "stateset.wasm.v1beta1";
const baseGenesisState = { lastCodeId: 0, lastInstanceId: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastCodeId !== 0) {
            writer.uint32(16).uint64(message.lastCodeId);
        }
        if (message.lastInstanceId !== 0) {
            writer.uint32(24).uint64(message.lastInstanceId);
        }
        for (const v of message.codes) {
            Code.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.contracts) {
            Contract.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.codes = [];
        message.contracts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastCodeId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.lastInstanceId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.codes.push(Code.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.contracts.push(Contract.decode(reader, reader.uint32()));
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
        message.codes = [];
        message.contracts = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.lastCodeId !== undefined && object.lastCodeId !== null) {
            message.lastCodeId = Number(object.lastCodeId);
        }
        else {
            message.lastCodeId = 0;
        }
        if (object.lastInstanceId !== undefined && object.lastInstanceId !== null) {
            message.lastInstanceId = Number(object.lastInstanceId);
        }
        else {
            message.lastInstanceId = 0;
        }
        if (object.codes !== undefined && object.codes !== null) {
            for (const e of object.codes) {
                message.codes.push(Code.fromJSON(e));
            }
        }
        if (object.contracts !== undefined && object.contracts !== null) {
            for (const e of object.contracts) {
                message.contracts.push(Contract.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.lastCodeId !== undefined && (obj.lastCodeId = message.lastCodeId);
        message.lastInstanceId !== undefined &&
            (obj.lastInstanceId = message.lastInstanceId);
        if (message.codes) {
            obj.codes = message.codes.map((e) => (e ? Code.toJSON(e) : undefined));
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e ? Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.codes = [];
        message.contracts = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.lastCodeId !== undefined && object.lastCodeId !== null) {
            message.lastCodeId = object.lastCodeId;
        }
        else {
            message.lastCodeId = 0;
        }
        if (object.lastInstanceId !== undefined && object.lastInstanceId !== null) {
            message.lastInstanceId = object.lastInstanceId;
        }
        else {
            message.lastInstanceId = 0;
        }
        if (object.codes !== undefined && object.codes !== null) {
            for (const e of object.codes) {
                message.codes.push(Code.fromPartial(e));
            }
        }
        if (object.contracts !== undefined && object.contracts !== null) {
            for (const e of object.contracts) {
                message.contracts.push(Contract.fromPartial(e));
            }
        }
        return message;
    },
};
const baseModel = {};
export const Model = {
    encode(message, writer = Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModel };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseModel };
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseModel };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        return message;
    },
};
const baseCode = {};
export const Code = {
    encode(message, writer = Writer.create()) {
        if (message.codeInfo !== undefined) {
            CodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(18).bytes(message.codeBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = CodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codeBytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCode };
        if (object.codeInfo !== undefined && object.codeInfo !== null) {
            message.codeInfo = CodeInfo.fromJSON(object.codeInfo);
        }
        else {
            message.codeInfo = undefined;
        }
        if (object.codeBytes !== undefined && object.codeBytes !== null) {
            message.codeBytes = bytesFromBase64(object.codeBytes);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeInfo !== undefined &&
            (obj.codeInfo = message.codeInfo
                ? CodeInfo.toJSON(message.codeInfo)
                : undefined);
        message.codeBytes !== undefined &&
            (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCode };
        if (object.codeInfo !== undefined && object.codeInfo !== null) {
            message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
        }
        else {
            message.codeInfo = undefined;
        }
        if (object.codeBytes !== undefined && object.codeBytes !== null) {
            message.codeBytes = object.codeBytes;
        }
        else {
            message.codeBytes = new Uint8Array();
        }
        return message;
    },
};
const baseContract = {};
export const Contract = {
    encode(message, writer = Writer.create()) {
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.contractStore) {
            Model.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContract };
        message.contractStore = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractInfo = ContractInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.contractStore.push(Model.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContract };
        message.contractStore = [];
        if (object.contractInfo !== undefined && object.contractInfo !== null) {
            message.contractInfo = ContractInfo.fromJSON(object.contractInfo);
        }
        else {
            message.contractInfo = undefined;
        }
        if (object.contractStore !== undefined && object.contractStore !== null) {
            for (const e of object.contractStore) {
                message.contractStore.push(Model.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractInfo !== undefined &&
            (obj.contractInfo = message.contractInfo
                ? ContractInfo.toJSON(message.contractInfo)
                : undefined);
        if (message.contractStore) {
            obj.contractStore = message.contractStore.map((e) => e ? Model.toJSON(e) : undefined);
        }
        else {
            obj.contractStore = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContract };
        message.contractStore = [];
        if (object.contractInfo !== undefined && object.contractInfo !== null) {
            message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
        }
        else {
            message.contractInfo = undefined;
        }
        if (object.contractStore !== undefined && object.contractStore !== null) {
            for (const e of object.contractStore) {
                message.contractStore.push(Model.fromPartial(e));
            }
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
