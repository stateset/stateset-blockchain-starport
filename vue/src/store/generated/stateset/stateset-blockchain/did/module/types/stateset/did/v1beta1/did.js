/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "did";
const baseDidCredential = { credType: "", issuer: "", issued: "" };
export const DidCredential = {
    encode(message, writer = Writer.create()) {
        for (const v of message.credType) {
            writer.uint32(10).string(v);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.issued !== "") {
            writer.uint32(26).string(message.issued);
        }
        if (message.claim !== undefined) {
            Claim.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDidCredential };
        message.credType = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credType.push(reader.string());
                    break;
                case 2:
                    message.issuer = reader.string();
                    break;
                case 3:
                    message.issued = reader.string();
                    break;
                case 4:
                    message.claim = Claim.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDidCredential };
        message.credType = [];
        if (object.credType !== undefined && object.credType !== null) {
            for (const e of object.credType) {
                message.credType.push(String(e));
            }
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = "";
        }
        if (object.issued !== undefined && object.issued !== null) {
            message.issued = String(object.issued);
        }
        else {
            message.issued = "";
        }
        if (object.claim !== undefined && object.claim !== null) {
            message.claim = Claim.fromJSON(object.claim);
        }
        else {
            message.claim = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.credType) {
            obj.credType = message.credType.map((e) => e);
        }
        else {
            obj.credType = [];
        }
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.issued !== undefined && (obj.issued = message.issued);
        message.claim !== undefined &&
            (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDidCredential };
        message.credType = [];
        if (object.credType !== undefined && object.credType !== null) {
            for (const e of object.credType) {
                message.credType.push(e);
            }
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = "";
        }
        if (object.issued !== undefined && object.issued !== null) {
            message.issued = object.issued;
        }
        else {
            message.issued = "";
        }
        if (object.claim !== undefined && object.claim !== null) {
            message.claim = Claim.fromPartial(object.claim);
        }
        else {
            message.claim = undefined;
        }
        return message;
    },
};
const baseClaim = { id: "", KYCValidated: false };
export const Claim = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.KYCValidated === true) {
            writer.uint32(16).bool(message.KYCValidated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClaim };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.KYCValidated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseClaim };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.KYCValidated !== undefined && object.KYCValidated !== null) {
            message.KYCValidated = Boolean(object.KYCValidated);
        }
        else {
            message.KYCValidated = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.KYCValidated !== undefined &&
            (obj.KYCValidated = message.KYCValidated);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClaim };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.KYCValidated !== undefined && object.KYCValidated !== null) {
            message.KYCValidated = object.KYCValidated;
        }
        else {
            message.KYCValidated = false;
        }
        return message;
    },
};
const baseStatesetDid = {
    did: "",
    verifyKey: "",
    encryptionPublicKey: "",
};
export const StatesetDid = {
    encode(message, writer = Writer.create()) {
        if (message.did !== "") {
            writer.uint32(10).string(message.did);
        }
        if (message.verifyKey !== "") {
            writer.uint32(18).string(message.verifyKey);
        }
        if (message.encryptionPublicKey !== "") {
            writer.uint32(26).string(message.encryptionPublicKey);
        }
        if (message.secret !== undefined) {
            Secret.encode(message.secret, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStatesetDid };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = reader.string();
                    break;
                case 2:
                    message.verifyKey = reader.string();
                    break;
                case 3:
                    message.encryptionPublicKey = reader.string();
                    break;
                case 4:
                    message.secret = Secret.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStatesetDid };
        if (object.did !== undefined && object.did !== null) {
            message.did = String(object.did);
        }
        else {
            message.did = "";
        }
        if (object.verifyKey !== undefined && object.verifyKey !== null) {
            message.verifyKey = String(object.verifyKey);
        }
        else {
            message.verifyKey = "";
        }
        if (object.encryptionPublicKey !== undefined &&
            object.encryptionPublicKey !== null) {
            message.encryptionPublicKey = String(object.encryptionPublicKey);
        }
        else {
            message.encryptionPublicKey = "";
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = Secret.fromJSON(object.secret);
        }
        else {
            message.secret = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined && (obj.did = message.did);
        message.verifyKey !== undefined && (obj.verifyKey = message.verifyKey);
        message.encryptionPublicKey !== undefined &&
            (obj.encryptionPublicKey = message.encryptionPublicKey);
        message.secret !== undefined &&
            (obj.secret = message.secret ? Secret.toJSON(message.secret) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStatesetDid };
        if (object.did !== undefined && object.did !== null) {
            message.did = object.did;
        }
        else {
            message.did = "";
        }
        if (object.verifyKey !== undefined && object.verifyKey !== null) {
            message.verifyKey = object.verifyKey;
        }
        else {
            message.verifyKey = "";
        }
        if (object.encryptionPublicKey !== undefined &&
            object.encryptionPublicKey !== null) {
            message.encryptionPublicKey = object.encryptionPublicKey;
        }
        else {
            message.encryptionPublicKey = "";
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = Secret.fromPartial(object.secret);
        }
        else {
            message.secret = undefined;
        }
        return message;
    },
};
const baseSecret = { seed: "", signKey: "", encryptionPrivateKey: "" };
export const Secret = {
    encode(message, writer = Writer.create()) {
        if (message.seed !== "") {
            writer.uint32(10).string(message.seed);
        }
        if (message.signKey !== "") {
            writer.uint32(18).string(message.signKey);
        }
        if (message.encryptionPrivateKey !== "") {
            writer.uint32(26).string(message.encryptionPrivateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecret };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seed = reader.string();
                    break;
                case 2:
                    message.signKey = reader.string();
                    break;
                case 3:
                    message.encryptionPrivateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSecret };
        if (object.seed !== undefined && object.seed !== null) {
            message.seed = String(object.seed);
        }
        else {
            message.seed = "";
        }
        if (object.signKey !== undefined && object.signKey !== null) {
            message.signKey = String(object.signKey);
        }
        else {
            message.signKey = "";
        }
        if (object.encryptionPrivateKey !== undefined &&
            object.encryptionPrivateKey !== null) {
            message.encryptionPrivateKey = String(object.encryptionPrivateKey);
        }
        else {
            message.encryptionPrivateKey = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.seed !== undefined && (obj.seed = message.seed);
        message.signKey !== undefined && (obj.signKey = message.signKey);
        message.encryptionPrivateKey !== undefined &&
            (obj.encryptionPrivateKey = message.encryptionPrivateKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecret };
        if (object.seed !== undefined && object.seed !== null) {
            message.seed = object.seed;
        }
        else {
            message.seed = "";
        }
        if (object.signKey !== undefined && object.signKey !== null) {
            message.signKey = object.signKey;
        }
        else {
            message.signKey = "";
        }
        if (object.encryptionPrivateKey !== undefined &&
            object.encryptionPrivateKey !== null) {
            message.encryptionPrivateKey = object.encryptionPrivateKey;
        }
        else {
            message.encryptionPrivateKey = "";
        }
        return message;
    },
};
