/* eslint-disable */
import { Agreement } from "../../../stateset/agreement/v1beta1/tx";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "stateset.agreement.v1beta1";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.agreements) {
            Agreement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.agreements = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreements.push(Agreement.decode(reader, reader.uint32()));
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
        message.agreements = [];
        if (object.agreements !== undefined && object.agreements !== null) {
            for (const e of object.agreements) {
                message.agreements.push(Agreement.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.agreements) {
            obj.agreements = message.agreements.map((e) => e ? Agreement.toJSON(e) : undefined);
        }
        else {
            obj.agreements = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.agreements = [];
        if (object.agreements !== undefined && object.agreements !== null) {
            for (const e of object.agreements) {
                message.agreements.push(Agreement.fromPartial(e));
            }
        }
        return message;
    },
};
