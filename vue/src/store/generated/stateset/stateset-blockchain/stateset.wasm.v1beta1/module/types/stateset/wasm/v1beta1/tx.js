/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const protobufPackage = "stateset.wasm.v1beta1";
const baseMsgStoreCode = { sender: "" };
export const MsgStoreCode = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(18).bytes(message.wasmByteCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgStoreCode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.wasmByteCode = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgStoreCode };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
            message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.wasmByteCode !== undefined &&
            (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined
                ? message.wasmByteCode
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgStoreCode };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
            message.wasmByteCode = object.wasmByteCode;
        }
        else {
            message.wasmByteCode = new Uint8Array();
        }
        return message;
    },
};
const baseMsgStoreCodeResponse = { codeId: 0 };
export const MsgStoreCodeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgStoreCodeResponse };
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
        const message = { ...baseMsgStoreCodeResponse };
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
        const message = { ...baseMsgStoreCodeResponse };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = object.codeId;
        }
        else {
            message.codeId = 0;
        }
        return message;
    },
};
const baseMsgMigrateCode = { codeId: 0, sender: "" };
export const MsgMigrateCode = {
    encode(message, writer = Writer.create()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(26).bytes(message.wasmByteCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMigrateCode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.wasmByteCode = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMigrateCode };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = Number(object.codeId);
        }
        else {
            message.codeId = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
            message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.wasmByteCode !== undefined &&
            (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined
                ? message.wasmByteCode
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMigrateCode };
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = object.codeId;
        }
        else {
            message.codeId = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
            message.wasmByteCode = object.wasmByteCode;
        }
        else {
            message.wasmByteCode = new Uint8Array();
        }
        return message;
    },
};
const baseMsgMigrateCodeResponse = {};
export const MsgMigrateCodeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMigrateCodeResponse };
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
        const message = { ...baseMsgMigrateCodeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMigrateCodeResponse };
        return message;
    },
};
const baseMsgInstantiateContract = { sender: "", admin: "", codeId: 0 };
export const MsgInstantiateContract = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.codeId !== 0) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.initMsg.length !== 0) {
            writer.uint32(34).bytes(message.initMsg);
        }
        for (const v of message.initCoins) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgInstantiateContract };
        message.initCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.codeId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.initMsg = reader.bytes();
                    break;
                case 5:
                    message.initCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgInstantiateContract };
        message.initCoins = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
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
        if (object.initCoins !== undefined && object.initCoins !== null) {
            for (const e of object.initCoins) {
                message.initCoins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.admin !== undefined && (obj.admin = message.admin);
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.initMsg !== undefined &&
            (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
        if (message.initCoins) {
            obj.initCoins = message.initCoins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.initCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgInstantiateContract };
        message.initCoins = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
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
        if (object.initCoins !== undefined && object.initCoins !== null) {
            for (const e of object.initCoins) {
                message.initCoins.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgInstantiateContractResponse = { contractAddress: "" };
export const MsgInstantiateContractResponse = {
    encode(message, writer = Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInstantiateContractResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
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
        const message = {
            ...baseMsgInstantiateContractResponse,
        };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInstantiateContractResponse,
        };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseMsgExecuteContract = { sender: "", contract: "" };
export const MsgExecuteContract = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.executeMsg.length !== 0) {
            writer.uint32(26).bytes(message.executeMsg);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExecuteContract };
        message.coins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.executeMsg = reader.bytes();
                    break;
                case 5:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgExecuteContract };
        message.coins = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        if (object.executeMsg !== undefined && object.executeMsg !== null) {
            message.executeMsg = bytesFromBase64(object.executeMsg);
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        message.executeMsg !== undefined &&
            (obj.executeMsg = base64FromBytes(message.executeMsg !== undefined ? message.executeMsg : new Uint8Array()));
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExecuteContract };
        message.coins = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        if (object.executeMsg !== undefined && object.executeMsg !== null) {
            message.executeMsg = object.executeMsg;
        }
        else {
            message.executeMsg = new Uint8Array();
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgExecuteContractResponse = {};
export const MsgExecuteContractResponse = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExecuteContractResponse,
        };
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
        const message = {
            ...baseMsgExecuteContractResponse,
        };
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
        const message = {
            ...baseMsgExecuteContractResponse,
        };
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseMsgMigrateContract = {
    admin: "",
    contract: "",
    newCodeId: 0,
};
export const MsgMigrateContract = {
    encode(message, writer = Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.newCodeId !== 0) {
            writer.uint32(24).uint64(message.newCodeId);
        }
        if (message.migrateMsg.length !== 0) {
            writer.uint32(34).bytes(message.migrateMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMigrateContract };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.newCodeId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.migrateMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMigrateContract };
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        if (object.newCodeId !== undefined && object.newCodeId !== null) {
            message.newCodeId = Number(object.newCodeId);
        }
        else {
            message.newCodeId = 0;
        }
        if (object.migrateMsg !== undefined && object.migrateMsg !== null) {
            message.migrateMsg = bytesFromBase64(object.migrateMsg);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.contract !== undefined && (obj.contract = message.contract);
        message.newCodeId !== undefined && (obj.newCodeId = message.newCodeId);
        message.migrateMsg !== undefined &&
            (obj.migrateMsg = base64FromBytes(message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMigrateContract };
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        if (object.newCodeId !== undefined && object.newCodeId !== null) {
            message.newCodeId = object.newCodeId;
        }
        else {
            message.newCodeId = 0;
        }
        if (object.migrateMsg !== undefined && object.migrateMsg !== null) {
            message.migrateMsg = object.migrateMsg;
        }
        else {
            message.migrateMsg = new Uint8Array();
        }
        return message;
    },
};
const baseMsgMigrateContractResponse = {};
export const MsgMigrateContractResponse = {
    encode(message, writer = Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMigrateContractResponse,
        };
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
        const message = {
            ...baseMsgMigrateContractResponse,
        };
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
        const message = {
            ...baseMsgMigrateContractResponse,
        };
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseMsgUpdateContractAdmin = {
    admin: "",
    newAdmin: "",
    contract: "",
};
export const MsgUpdateContractAdmin = {
    encode(message, writer = Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.newAdmin !== "") {
            writer.uint32(18).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateContractAdmin };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.newAdmin = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateContractAdmin };
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
        }
        if (object.newAdmin !== undefined && object.newAdmin !== null) {
            message.newAdmin = String(object.newAdmin);
        }
        else {
            message.newAdmin = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateContractAdmin };
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
        }
        if (object.newAdmin !== undefined && object.newAdmin !== null) {
            message.newAdmin = object.newAdmin;
        }
        else {
            message.newAdmin = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        return message;
    },
};
const baseMsgUpdateContractAdminResponse = {};
export const MsgUpdateContractAdminResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateContractAdminResponse,
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
            ...baseMsgUpdateContractAdminResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateContractAdminResponse,
        };
        return message;
    },
};
const baseMsgClearContractAdmin = { admin: "", contract: "" };
export const MsgClearContractAdmin = {
    encode(message, writer = Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClearContractAdmin };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgClearContractAdmin };
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        }
        else {
            message.contract = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgClearContractAdmin };
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        else {
            message.contract = "";
        }
        return message;
    },
};
const baseMsgClearContractAdminResponse = {};
export const MsgClearContractAdminResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgClearContractAdminResponse,
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
            ...baseMsgClearContractAdminResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgClearContractAdminResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    StoreCode(request) {
        const data = MsgStoreCode.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "StoreCode", data);
        return promise.then((data) => MsgStoreCodeResponse.decode(new Reader(data)));
    }
    MigrateCode(request) {
        const data = MsgMigrateCode.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "MigrateCode", data);
        return promise.then((data) => MsgMigrateCodeResponse.decode(new Reader(data)));
    }
    InstantiateContract(request) {
        const data = MsgInstantiateContract.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "InstantiateContract", data);
        return promise.then((data) => MsgInstantiateContractResponse.decode(new Reader(data)));
    }
    ExecuteContract(request) {
        const data = MsgExecuteContract.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "ExecuteContract", data);
        return promise.then((data) => MsgExecuteContractResponse.decode(new Reader(data)));
    }
    MigrateContract(request) {
        const data = MsgMigrateContract.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "MigrateContract", data);
        return promise.then((data) => MsgMigrateContractResponse.decode(new Reader(data)));
    }
    UpdateContractAdmin(request) {
        const data = MsgUpdateContractAdmin.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "UpdateContractAdmin", data);
        return promise.then((data) => MsgUpdateContractAdminResponse.decode(new Reader(data)));
    }
    ClearContractAdmin(request) {
        const data = MsgClearContractAdmin.encode(request).finish();
        const promise = this.rpc.request("stateset.wasm.v1beta1.Msg", "ClearContractAdmin", data);
        return promise.then((data) => MsgClearContractAdminResponse.decode(new Reader(data)));
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
