/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { PurchaseOrder } from "../../../stateset/purchaseorder/v1beta1/tx";
import { PageRequest, PageResponse, } from "../../../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "stateset.purchaseorder.v1beta1";
const baseQueryPurchaseOrderRequest = { purchaseorderId: "" };
export const QueryPurchaseOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorderId !== "") {
            writer.uint32(10).string(message.purchaseorderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPurchaseOrderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorderId = reader.string();
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
            ...baseQueryPurchaseOrderRequest,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = String(object.purchaseorderId);
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorderId !== undefined &&
            (obj.purchaseorderId = message.purchaseorderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPurchaseOrderRequest,
        };
        if (object.purchaseorderId !== undefined &&
            object.purchaseorderId !== null) {
            message.purchaseorderId = object.purchaseorderId;
        }
        else {
            message.purchaseorderId = "";
        }
        return message;
    },
};
const baseQueryPurchaseOrderResponse = {};
export const QueryPurchaseOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.purchaseorder !== undefined) {
            PurchaseOrder.encode(message.purchaseorder, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPurchaseOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purchaseorder = PurchaseOrder.decode(reader, reader.uint32());
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
            ...baseQueryPurchaseOrderResponse,
        };
        if (object.purchaseorder !== undefined && object.purchaseorder !== null) {
            message.purchaseorder = PurchaseOrder.fromJSON(object.purchaseorder);
        }
        else {
            message.purchaseorder = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.purchaseorder !== undefined &&
            (obj.purchaseorder = message.purchaseorder
                ? PurchaseOrder.toJSON(message.purchaseorder)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPurchaseOrderResponse,
        };
        if (object.purchaseorder !== undefined && object.purchaseorder !== null) {
            message.purchaseorder = PurchaseOrder.fromPartial(object.purchaseorder);
        }
        else {
            message.purchaseorder = undefined;
        }
        return message;
    },
};
const baseQueryPurchaseOrdersRequest = {};
export const QueryPurchaseOrdersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPurchaseOrdersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = {
            ...baseQueryPurchaseOrdersRequest,
        };
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPurchaseOrdersRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPurchaseOrdersResponse = {};
export const QueryPurchaseOrdersResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.PurchaseOrder) {
            PurchaseOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPurchaseOrdersResponse,
        };
        message.PurchaseOrder = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PurchaseOrder.push(PurchaseOrder.decode(reader, reader.uint32()));
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
        const message = {
            ...baseQueryPurchaseOrdersResponse,
        };
        message.PurchaseOrder = [];
        if (object.PurchaseOrder !== undefined && object.PurchaseOrder !== null) {
            for (const e of object.PurchaseOrder) {
                message.PurchaseOrder.push(PurchaseOrder.fromJSON(e));
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
        if (message.PurchaseOrder) {
            obj.PurchaseOrder = message.PurchaseOrder.map((e) => e ? PurchaseOrder.toJSON(e) : undefined);
        }
        else {
            obj.PurchaseOrder = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPurchaseOrdersResponse,
        };
        message.PurchaseOrder = [];
        if (object.PurchaseOrder !== undefined && object.PurchaseOrder !== null) {
            for (const e of object.PurchaseOrder) {
                message.PurchaseOrder.push(PurchaseOrder.fromPartial(e));
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
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    PurchaseOrders(request) {
        const data = QueryPurchaseOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Query", "PurchaseOrders", data);
        return promise.then((data) => QueryPurchaseOrdersResponse.decode(new Reader(data)));
    }
    PurchaseOrder(request) {
        const data = QueryPurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.purchaseorder.v1beta1.Query", "PurchaseOrder", data);
        return promise.then((data) => QueryPurchaseOrderResponse.decode(new Reader(data)));
    }
}
