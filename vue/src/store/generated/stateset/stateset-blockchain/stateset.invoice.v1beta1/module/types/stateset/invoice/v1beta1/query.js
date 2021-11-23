/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { InvoiceFilters, Invoice } from "../../../stateset/invoice/v1beta1/tx";
import { PageRequest, PageResponse, } from "../../../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "stateset.invoice.v1beta1";
const baseQueryInvoicesRequest = {};
export const QueryInvoicesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.filters !== undefined) {
            InvoiceFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryInvoicesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = InvoiceFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryInvoicesRequest };
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = InvoiceFilters.fromJSON(object.filters);
        }
        else {
            message.filters = undefined;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filters !== undefined &&
            (obj.filters = message.filters
                ? InvoiceFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryInvoicesRequest };
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = InvoiceFilters.fromPartial(object.filters);
        }
        else {
            message.filters = undefined;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryInvoicesResponse = {};
export const QueryInvoicesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.invoices) {
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
        message.invoices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invoices.push(Invoice.decode(reader, reader.uint32()));
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
        message.invoices = [];
        if (object.invoices !== undefined && object.invoices !== null) {
            for (const e of object.invoices) {
                message.invoices.push(Invoice.fromJSON(e));
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
        if (message.invoices) {
            obj.invoices = message.invoices.map((e) => e ? Invoice.toJSON(e) : undefined);
        }
        else {
            obj.invoices = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryInvoicesResponse };
        message.invoices = [];
        if (object.invoices !== undefined && object.invoices !== null) {
            for (const e of object.invoices) {
                message.invoices.push(Invoice.fromPartial(e));
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
const baseQueryInvoiceRequest = { invoiceId: "" };
export const QueryInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.invoiceId !== "") {
            writer.uint32(10).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryInvoiceRequest };
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
        const message = { ...baseQueryInvoiceRequest };
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
        const message = { ...baseQueryInvoiceRequest };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseQueryInvoiceResponse = {};
export const QueryInvoiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.invoice !== undefined) {
            Invoice.encode(message.invoice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryInvoiceResponse };
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
        const message = { ...baseQueryInvoiceResponse };
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
        const message = { ...baseQueryInvoiceResponse };
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
    Invoices(request) {
        const data = QueryInvoicesRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Query", "Invoices", data);
        return promise.then((data) => QueryInvoicesResponse.decode(new Reader(data)));
    }
    Invoice(request) {
        const data = QueryInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Query", "Invoice", data);
        return promise.then((data) => QueryInvoiceResponse.decode(new Reader(data)));
    }
}
