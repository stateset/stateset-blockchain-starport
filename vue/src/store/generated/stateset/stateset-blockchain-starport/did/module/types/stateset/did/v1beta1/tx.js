/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { DidCredential } from "../../../stateset/did/v1beta1/did";
export const protobufPackage = "did";
const baseMsgAddDid = { did: "", pubKey: "" };
export const MsgAddDid = {
    encode(message, writer = Writer.create()) {
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        if (message.pubKey !== "") {
            writer.uint32(18).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddDid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgAddDid };
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
        }
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
        message.did !== undefined && (obj.did = message.did);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddDid };
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = "";
        }
        return message;
    },
};
const baseMsgAddDidResponse = {};
export const MsgAddDidResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddDidResponse };
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
        const message = { ...baseMsgAddDidResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddDidResponse };
        return message;
    },
};
const baseMsgAddCredential = {};
export const MsgAddCredential = {
    encode(message, writer = Writer.create()) {
        if (message.didCredential !== undefined) {
            DidCredential.encode(message.didCredential, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddCredential };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didCredential = DidCredential.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAddCredential };
        if (object.didCredential !== undefined && object.didCredential !== null) {
            message.didCredential = DidCredential.fromJSON(object.didCredential);
        }
        else {
            message.didCredential = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.didCredential !== undefined &&
            (obj.didCredential = message.didCredential
                ? DidCredential.toJSON(message.didCredential)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddCredential };
        if (object.didCredential !== undefined && object.didCredential !== null) {
            message.didCredential = DidCredential.fromPartial(object.didCredential);
        }
        else {
            message.didCredential = undefined;
        }
        return message;
    },
};
const baseMsgAddCredentialResponse = {};
export const MsgAddCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAddCredentialResponse,
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
            ...baseMsgAddCredentialResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgAddCredentialResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    AddDid(request) {
        const data = MsgAddDid.encode(request).finish();
        const promise = this.rpc.request("did.Msg", "AddDid", data);
        return promise.then((data) => MsgAddDidResponse.decode(new Reader(data)));
    }
    AddCredential(request) {
        const data = MsgAddCredential.encode(request).finish();
        const promise = this.rpc.request("did.Msg", "AddCredential", data);
        return promise.then((data) => MsgAddCredentialResponse.decode(new Reader(data)));
    }
}
