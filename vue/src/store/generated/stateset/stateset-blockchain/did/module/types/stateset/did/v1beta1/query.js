/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export const protobufPackage = "did";
const baseQueryDidDocRequest = { did: "" };
export const QueryDidDocRequest = {
    encode(message, writer = Writer.create()) {
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidDocRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidDocRequest };
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidDocRequest };
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        return message;
    },
};
const baseQueryDidDocResponse = {};
export const QueryDidDocResponse = {
    encode(message, writer = Writer.create()) {
        if (message.diddoc !== undefined) {
            Any.encode(message.diddoc, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidDocResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diddoc = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidDocResponse };
        if (object.diddoc !== undefined && object.diddoc !== null) {
            message.diddoc = Any.fromJSON(object.diddoc);
        }
        else {
            message.diddoc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diddoc !== undefined &&
            (obj.diddoc = message.diddoc ? Any.toJSON(message.diddoc) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidDocResponse };
        if (object.diddoc !== undefined && object.diddoc !== null) {
            message.diddoc = Any.fromPartial(object.diddoc);
        }
        else {
            message.diddoc = undefined;
        }
        return message;
    },
};
const baseQueryAllDidsRequest = {};
export const QueryAllDidsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDidsRequest };
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
        const message = { ...baseQueryAllDidsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryAllDidsRequest };
        return message;
    },
};
const baseQueryAllDidsResponse = { dids: "" };
export const QueryAllDidsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.dids) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDidsResponse };
        message.dids = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dids.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllDidsResponse };
        message.dids = [];
        if (object.dids !== undefined && object.dids !== null) {
            for (const e of object.dids) {
                message.dids.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.dids) {
            obj.dids = message.dids.map((e) => e);
        }
        else {
            obj.dids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllDidsResponse };
        message.dids = [];
        if (object.dids !== undefined && object.dids !== null) {
            for (const e of object.dids) {
                message.dids.push(e);
            }
        }
        return message;
    },
};
const baseQueryAllDidDocsRequest = {};
export const QueryAllDidDocsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDidDocsRequest };
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
        const message = { ...baseQueryAllDidDocsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryAllDidDocsRequest };
        return message;
    },
};
const baseQueryAllDidDocsResponse = {};
export const QueryAllDidDocsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.diddocs) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDidDocsResponse,
        };
        message.diddocs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diddocs.push(Any.decode(reader, reader.uint32()));
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
            ...baseQueryAllDidDocsResponse,
        };
        message.diddocs = [];
        if (object.diddocs !== undefined && object.diddocs !== null) {
            for (const e of object.diddocs) {
                message.diddocs.push(Any.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.diddocs) {
            obj.diddocs = message.diddocs.map((e) => (e ? Any.toJSON(e) : undefined));
        }
        else {
            obj.diddocs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDidDocsResponse,
        };
        message.diddocs = [];
        if (object.diddocs !== undefined && object.diddocs !== null) {
            for (const e of object.diddocs) {
                message.diddocs.push(Any.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryAddressFromDidRequest = { did: "" };
export const QueryAddressFromDidRequest = {
    encode(message, writer = Writer.create()) {
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAddressFromDidRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = reader.string();
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
            ...baseQueryAddressFromDidRequest,
        };
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined && (obj.did = message.did);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAddressFromDidRequest,
        };
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        return message;
    },
};
const baseQueryAddressFromDidResponse = { address: "" };
export const QueryAddressFromDidResponse = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAddressFromDidResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseQueryAddressFromDidResponse,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAddressFromDidResponse,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryAddressFromBase58EncodedPubkeyRequest = { pubKey: "" };
export const QueryAddressFromBase58EncodedPubkeyRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pubKey !== "") {
            writer.uint32(10).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAddressFromBase58EncodedPubkeyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = reader.string();
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
            ...baseQueryAddressFromBase58EncodedPubkeyRequest,
        };
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAddressFromBase58EncodedPubkeyRequest,
        };
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = "";
        }
        return message;
    },
};
const baseQueryAddressFromBase58EncodedPubkeyResponse = { address: "" };
export const QueryAddressFromBase58EncodedPubkeyResponse = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAddressFromBase58EncodedPubkeyResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            ...baseQueryAddressFromBase58EncodedPubkeyResponse,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAddressFromBase58EncodedPubkeyResponse,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    DidDoc(request) {
        const data = QueryDidDocRequest.encode(request).finish();
        const promise = this.rpc.request("did.Query", "DidDoc", data);
        return promise.then((data) => QueryDidDocResponse.decode(new Reader(data)));
    }
    AllDids(request) {
        const data = QueryAllDidsRequest.encode(request).finish();
        const promise = this.rpc.request("did.Query", "AllDids", data);
        return promise.then((data) => QueryAllDidsResponse.decode(new Reader(data)));
    }
    AllDidDocs(request) {
        const data = QueryAllDidDocsRequest.encode(request).finish();
        const promise = this.rpc.request("did.Query", "AllDidDocs", data);
        return promise.then((data) => QueryAllDidDocsResponse.decode(new Reader(data)));
    }
    AddressFromDid(request) {
        const data = QueryAddressFromDidRequest.encode(request).finish();
        const promise = this.rpc.request("did.Query", "AddressFromDid", data);
        return promise.then((data) => QueryAddressFromDidResponse.decode(new Reader(data)));
    }
    AddressFromBase58EncodedPubkey(request) {
        const data = QueryAddressFromBase58EncodedPubkeyRequest.encode(request).finish();
        const promise = this.rpc.request("did.Query", "AddressFromBase58EncodedPubkey", data);
        return promise.then((data) => QueryAddressFromBase58EncodedPubkeyResponse.decode(new Reader(data)));
    }
}
