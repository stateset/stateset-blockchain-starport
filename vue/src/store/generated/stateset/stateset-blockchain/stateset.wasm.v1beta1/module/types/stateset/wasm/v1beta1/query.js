/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { CodeInfo, ContractInfo, Params, } from "../../../stateset/wasm/v1beta1/wasm";
export const protobufPackage = "stateset.wasm.v1beta1";
const baseQueryCodeInfoRequest = { codeId: 0 };
export const QueryCodeInfoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCodeInfoRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCodeInfoRequest };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = Number(object.codeId);
        }
        else {
            message.codeId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCodeInfoRequest };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = object.codeId;
        }
        else {
            message.codeId = 0;
        }
        return message;
    },
};
const baseQueryCodeInfoResponse = {};
export const QueryCodeInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.codeInfo !== undefined) {
            CodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCodeInfoResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = CodeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCodeInfoResponse };
        if (object.codeInfo !== undefined && object.codeInfo !== null) {
            message.codeInfo = CodeInfo.fromJSON(object.codeInfo);
        }
        else {
            message.codeInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeInfo !== undefined &&
            (obj.codeInfo = message.codeInfo
                ? CodeInfo.toJSON(message.codeInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCodeInfoResponse };
        if (object.codeInfo !== undefined && object.codeInfo !== null) {
            message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
        }
        else {
            message.codeInfo = undefined;
        }
        return message;
    },
};
const baseQueryByteCodeRequest = { codeId: 0 };
export const QueryByteCodeRequest = {
    encode(message, writer = Writer.create()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryByteCodeRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryByteCodeRequest };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = Number(object.codeId);
        }
        else {
            message.codeId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryByteCodeRequest };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = object.codeId;
        }
        else {
            message.codeId = 0;
        }
        return message;
    },
};
const baseQueryByteCodeResponse = {};
export const QueryByteCodeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.byteCode.length !== 0) {
            writer.uint32(10).bytes(message.byteCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryByteCodeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.byteCode = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryByteCodeResponse };
        if (object.byteCode !== undefined && object.byteCode !== null) {
            message.byteCode = bytesFromBase64(object.byteCode);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.byteCode !== undefined &&
            (obj.byteCode = base64FromBytes(message.byteCode !== undefined ? message.byteCode : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryByteCodeResponse };
        if (object.byteCode !== undefined && object.byteCode !== null) {
            message.byteCode = object.byteCode;
        }
        else {
            message.byteCode = new Uint8Array();
        }
        return message;
    },
};
const baseQueryContractInfoRequest = { contractAddress: "" };
export const QueryContractInfoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryContractInfoRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
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
            ...baseQueryContractInfoRequest,
        };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryContractInfoRequest,
        };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        return message;
    },
};
const baseQueryContractInfoResponse = {};
export const QueryContractInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryContractInfoResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractInfo = ContractInfo.decode(reader, reader.uint32());
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
            ...baseQueryContractInfoResponse,
        };
        if (object.contractInfo !== undefined && object.contractInfo !== null) {
            message.contractInfo = ContractInfo.fromJSON(object.contractInfo);
        }
        else {
            message.contractInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractInfo !== undefined &&
            (obj.contractInfo = message.contractInfo
                ? ContractInfo.toJSON(message.contractInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryContractInfoResponse,
        };
        if (object.contractInfo !== undefined && object.contractInfo !== null) {
            message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
        }
        else {
            message.contractInfo = undefined;
        }
        return message;
    },
};
const baseQueryContractStoreRequest = { contractAddress: "" };
export const QueryContractStoreRequest = {
    encode(message, writer = Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.queryMsg.length !== 0) {
            writer.uint32(18).bytes(message.queryMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryContractStoreRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.queryMsg = reader.bytes();
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
            ...baseQueryContractStoreRequest,
        };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        if (object.queryMsg !== undefined && object.queryMsg !== null) {
            message.queryMsg = bytesFromBase64(object.queryMsg);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.queryMsg !== undefined &&
            (obj.queryMsg = base64FromBytes(message.queryMsg !== undefined ? message.queryMsg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryContractStoreRequest,
        };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        if (object.queryMsg !== undefined && object.queryMsg !== null) {
            message.queryMsg = object.queryMsg;
        }
        else {
            message.queryMsg = new Uint8Array();
        }
        return message;
    },
};
const baseQueryContractStoreResponse = {};
export const QueryContractStoreResponse = {
    encode(message, writer = Writer.create()) {
        if (message.queryResult.length !== 0) {
            writer.uint32(10).bytes(message.queryResult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryContractStoreResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryResult = reader.bytes();
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
            ...baseQueryContractStoreResponse,
        };
        if (object.queryResult !== undefined && object.queryResult !== null) {
            message.queryResult = bytesFromBase64(object.queryResult);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.queryResult !== undefined &&
            (obj.queryResult = base64FromBytes(message.queryResult !== undefined
                ? message.queryResult
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryContractStoreResponse,
        };
        if (object.queryResult !== undefined && object.queryResult !== null) {
            message.queryResult = object.queryResult;
        }
        else {
            message.queryResult = new Uint8Array();
        }
        return message;
    },
};
const baseQueryRawStoreRequest = { contractAddress: "" };
export const QueryRawStoreRequest = {
    encode(message, writer = Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryRawStoreRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryRawStoreRequest };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryRawStoreRequest };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        return message;
    },
};
const baseQueryRawStoreResponse = {};
export const QueryRawStoreResponse = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryRawStoreResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryRawStoreResponse };
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryRawStoreResponse };
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CodeInfo(request) {
        const data = QueryCodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Query", "CodeInfo", data);
        return promise.then((data) => QueryCodeInfoResponse.decode(new Reader(data)));
    }
    ByteCode(request) {
        const data = QueryByteCodeRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Query", "ByteCode", data);
        return promise.then((data) => QueryByteCodeResponse.decode(new Reader(data)));
    }
    ContractInfo(request) {
        const data = QueryContractInfoRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Query", "ContractInfo", data);
        return promise.then((data) => QueryContractInfoResponse.decode(new Reader(data)));
    }
    ContractStore(request) {
        const data = QueryContractStoreRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Query", "ContractStore", data);
        return promise.then((data) => QueryContractStoreResponse.decode(new Reader(data)));
    }
    RawStore(request) {
        const data = QueryRawStoreRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Query", "RawStore", data);
        return promise.then((data) => QueryRawStoreResponse.decode(new Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
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
