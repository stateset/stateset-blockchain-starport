/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Invoice } from "../../../stateset/invoice/v1beta1/tx";
import { PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "stateset.invoice.v1beta1";
const baseQueryInvoicesRequest = {};
export const QueryInvoicesRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryInvoicesRequest };
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
        const message = { ...baseQueryInvoicesRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryInvoicesRequest };
        return message;
    },
};
const baseQueryInvoicesResponse = {};
export const QueryInvoicesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Invoice) {
            Invoice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryInvoicesResponse };
        message.Invoice = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Invoice.push(Invoice.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryInvoicesResponse };
        message.Invoice = [];
        if (object.Invoice !== undefined && object.Invoice !== null) {
            for (const e of object.Invoice) {
                message.Invoice.push(Invoice.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Invoice) {
            obj.Invoice = message.Invoice.map((e) => e ? Invoice.toJSON(e) : undefined);
        }
        else {
            obj.Invoice = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryInvoicesResponse };
        message.Invoice = [];
        if (object.Invoice !== undefined && object.Invoice !== null) {
            for (const e of object.Invoice) {
                message.Invoice.push(Invoice.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetInvoiceRequest = { invoiceId: "" };
export const QueryGetInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.invoiceId !== "") {
            writer.uint32(10).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetInvoiceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invoiceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetInvoiceRequest };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetInvoiceRequest };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseQueryGetInvoiceResponse = {};
export const QueryGetInvoiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.invoice !== undefined) {
            Invoice.encode(message.invoice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetInvoiceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invoice = Invoice.decode(reader, reader.uint32());
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
            ...baseQueryGetInvoiceResponse,
        };
        if (object.invoice !== undefined && object.invoice !== null) {
            message.invoice = Invoice.fromJSON(object.invoice);
        }
        else {
            message.invoice = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.invoice !== undefined &&
            (obj.invoice = message.invoice
                ? Invoice.toJSON(message.invoice)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetInvoiceResponse,
        };
        if (object.invoice !== undefined && object.invoice !== null) {
            message.invoice = Invoice.fromPartial(object.invoice);
        }
        else {
            message.invoice = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Invoice(request) {
        const data = QueryGetInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Query", "Invoice", data);
        return promise.then((data) => QueryGetInvoiceResponse.decode(new Reader(data)));
    }
    Invoices(request) {
        const data = QueryInvoicesRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Query", "Invoices", data);
        return promise.then((data) => QueryInvoicesResponse.decode(new Reader(data)));
    }
}
