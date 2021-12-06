/* eslint-disable */
import { Invoice } from "../../../stateset/invoice/v1beta1/tx";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "stateset.invoice.v1beta1";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.invoices) {
            Invoice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.invoices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invoices.push(Invoice.decode(reader, reader.uint32()));
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
        message.invoices = [];
        if (object.invoices !== undefined && object.invoices !== null) {
            for (const e of object.invoices) {
                message.invoices.push(Invoice.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.invoices) {
            obj.invoices = message.invoices.map((e) => e ? Invoice.toJSON(e) : undefined);
        }
        else {
            obj.invoices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.invoices = [];
        if (object.invoices !== undefined && object.invoices !== null) {
            for (const e of object.invoices) {
                message.invoices.push(Invoice.fromPartial(e));
            }
        }
        return message;
    },
};
