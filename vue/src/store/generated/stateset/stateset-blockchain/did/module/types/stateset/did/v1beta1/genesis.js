/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "did";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.didDocs) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.didDocs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didDocs.push(Any.decode(reader, reader.uint32()));
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
        message.didDocs = [];
        if (object.didDocs !== undefined && object.didDocs !== null) {
            for (const e of object.didDocs) {
                message.didDocs.push(Any.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.didDocs) {
            obj.didDocs = message.didDocs.map((e) => (e ? Any.toJSON(e) : undefined));
        }
        else {
            obj.didDocs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.didDocs = [];
        if (object.didDocs !== undefined && object.didDocs !== null) {
            for (const e of object.didDocs) {
                message.didDocs.push(Any.fromPartial(e));
            }
        }
        return message;
    },
};
