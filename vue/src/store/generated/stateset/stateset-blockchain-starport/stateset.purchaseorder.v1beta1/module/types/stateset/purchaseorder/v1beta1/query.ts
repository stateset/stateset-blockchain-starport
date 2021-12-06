/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import {
  PurchaseOrder,
  PurchaseOrderFilters,
} from "../../../stateset/purchaseorder/v1beta1/tx";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "stateset.purchaseorder.v1beta1";

/** QueryPurchaseOrderRequest is the Query/PurchaseOrder request type. */
export interface QueryPurchaseOrderRequest {
  /** purchase_id is the unique ID of purchase order to query. */
  purchaseorderId: string;
}

export interface QueryPurchaseOrderResponse {
  purchaseorder: PurchaseOrder | undefined;
}

export interface QueryPurchaseOrdersRequest {
  filters: PurchaseOrderFilters | undefined;
  pagination: PageRequest | undefined;
}

export interface QueryPurchaseOrdersResponse {
  PurchaseOrder: PurchaseOrder[];
  pagination: PageResponse | undefined;
}

const baseQueryPurchaseOrderRequest: object = { purchaseorderId: "" };

export const QueryPurchaseOrderRequest = {
  encode(
    message: QueryPurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.purchaseorderId !== "") {
      writer.uint32(10).string(message.purchaseorderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPurchaseOrderRequest,
    } as QueryPurchaseOrderRequest;
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

  fromJSON(object: any): QueryPurchaseOrderRequest {
    const message = {
      ...baseQueryPurchaseOrderRequest,
    } as QueryPurchaseOrderRequest;
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = String(object.purchaseorderId);
    } else {
      message.purchaseorderId = "";
    }
    return message;
  },

  toJSON(message: QueryPurchaseOrderRequest): unknown {
    const obj: any = {};
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPurchaseOrderRequest>
  ): QueryPurchaseOrderRequest {
    const message = {
      ...baseQueryPurchaseOrderRequest,
    } as QueryPurchaseOrderRequest;
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = object.purchaseorderId;
    } else {
      message.purchaseorderId = "";
    }
    return message;
  },
};

const baseQueryPurchaseOrderResponse: object = {};

export const QueryPurchaseOrderResponse = {
  encode(
    message: QueryPurchaseOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.purchaseorder !== undefined) {
      PurchaseOrder.encode(
        message.purchaseorder,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPurchaseOrderResponse,
    } as QueryPurchaseOrderResponse;
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

  fromJSON(object: any): QueryPurchaseOrderResponse {
    const message = {
      ...baseQueryPurchaseOrderResponse,
    } as QueryPurchaseOrderResponse;
    if (object.purchaseorder !== undefined && object.purchaseorder !== null) {
      message.purchaseorder = PurchaseOrder.fromJSON(object.purchaseorder);
    } else {
      message.purchaseorder = undefined;
    }
    return message;
  },

  toJSON(message: QueryPurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseorder !== undefined &&
      (obj.purchaseorder = message.purchaseorder
        ? PurchaseOrder.toJSON(message.purchaseorder)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPurchaseOrderResponse>
  ): QueryPurchaseOrderResponse {
    const message = {
      ...baseQueryPurchaseOrderResponse,
    } as QueryPurchaseOrderResponse;
    if (object.purchaseorder !== undefined && object.purchaseorder !== null) {
      message.purchaseorder = PurchaseOrder.fromPartial(object.purchaseorder);
    } else {
      message.purchaseorder = undefined;
    }
    return message;
  },
};

const baseQueryPurchaseOrdersRequest: object = {};

export const QueryPurchaseOrdersRequest = {
  encode(
    message: QueryPurchaseOrdersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.filters !== undefined) {
      PurchaseOrderFilters.encode(
        message.filters,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPurchaseOrdersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPurchaseOrdersRequest,
    } as QueryPurchaseOrdersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = PurchaseOrderFilters.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): QueryPurchaseOrdersRequest {
    const message = {
      ...baseQueryPurchaseOrdersRequest,
    } as QueryPurchaseOrdersRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = PurchaseOrderFilters.fromJSON(object.filters);
    } else {
      message.filters = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPurchaseOrdersRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? PurchaseOrderFilters.toJSON(message.filters)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPurchaseOrdersRequest>
  ): QueryPurchaseOrdersRequest {
    const message = {
      ...baseQueryPurchaseOrdersRequest,
    } as QueryPurchaseOrdersRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = PurchaseOrderFilters.fromPartial(object.filters);
    } else {
      message.filters = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryPurchaseOrdersResponse: object = {};

export const QueryPurchaseOrdersResponse = {
  encode(
    message: QueryPurchaseOrdersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.PurchaseOrder) {
      PurchaseOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPurchaseOrdersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPurchaseOrdersResponse,
    } as QueryPurchaseOrdersResponse;
    message.PurchaseOrder = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PurchaseOrder.push(
            PurchaseOrder.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryPurchaseOrdersResponse {
    const message = {
      ...baseQueryPurchaseOrdersResponse,
    } as QueryPurchaseOrdersResponse;
    message.PurchaseOrder = [];
    if (object.PurchaseOrder !== undefined && object.PurchaseOrder !== null) {
      for (const e of object.PurchaseOrder) {
        message.PurchaseOrder.push(PurchaseOrder.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPurchaseOrdersResponse): unknown {
    const obj: any = {};
    if (message.PurchaseOrder) {
      obj.PurchaseOrder = message.PurchaseOrder.map((e) =>
        e ? PurchaseOrder.toJSON(e) : undefined
      );
    } else {
      obj.PurchaseOrder = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPurchaseOrdersResponse>
  ): QueryPurchaseOrdersResponse {
    const message = {
      ...baseQueryPurchaseOrdersResponse,
    } as QueryPurchaseOrdersResponse;
    message.PurchaseOrder = [];
    if (object.PurchaseOrder !== undefined && object.PurchaseOrder !== null) {
      for (const e of object.PurchaseOrder) {
        message.PurchaseOrder.push(PurchaseOrder.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** PurchaseOrders returns purchase order details based on purchase order. */
  PurchaseOrders(
    request: QueryPurchaseOrdersRequest
  ): Promise<QueryPurchaseOrdersResponse>;
  /** Purchase Order returns purchase order details based on purchase order. */
  PurchaseOrder(
    request: QueryPurchaseOrderRequest
  ): Promise<QueryPurchaseOrderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  PurchaseOrders(
    request: QueryPurchaseOrdersRequest
  ): Promise<QueryPurchaseOrdersResponse> {
    const data = QueryPurchaseOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Query",
      "PurchaseOrders",
      data
    );
    return promise.then((data) =>
      QueryPurchaseOrdersResponse.decode(new Reader(data))
    );
  }

  PurchaseOrder(
    request: QueryPurchaseOrderRequest
  ): Promise<QueryPurchaseOrderResponse> {
    const data = QueryPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Query",
      "PurchaseOrder",
      data
    );
    return promise.then((data) =>
      QueryPurchaseOrderResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
