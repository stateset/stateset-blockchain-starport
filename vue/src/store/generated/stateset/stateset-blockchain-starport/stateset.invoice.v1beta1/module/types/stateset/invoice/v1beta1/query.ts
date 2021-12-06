/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { InvoiceFilters, Invoice } from "../../../stateset/invoice/v1beta1/tx";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "stateset.invoice.v1beta1";

/** QueryInvoiceRequest is the Query/Invoice request type. */
export interface QueryInvoicesRequest {
  filters: InvoiceFilters | undefined;
  pagination: PageRequest | undefined;
}

export interface QueryInvoicesResponse {
  invoices: Invoice[];
  pagination: PageResponse | undefined;
}

export interface QueryInvoiceRequest {
  /** invoice_id is the unique ID of invoice to query. */
  invoiceId: string;
}

/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryInvoiceResponse {
  invoice: Invoice | undefined;
}

const baseQueryInvoicesRequest: object = {};

export const QueryInvoicesRequest = {
  encode(
    message: QueryInvoicesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.filters !== undefined) {
      InvoiceFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryInvoicesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInvoicesRequest } as QueryInvoicesRequest;
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

  fromJSON(object: any): QueryInvoicesRequest {
    const message = { ...baseQueryInvoicesRequest } as QueryInvoicesRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = InvoiceFilters.fromJSON(object.filters);
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

  toJSON(message: QueryInvoicesRequest): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<QueryInvoicesRequest>): QueryInvoicesRequest {
    const message = { ...baseQueryInvoicesRequest } as QueryInvoicesRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = InvoiceFilters.fromPartial(object.filters);
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

const baseQueryInvoicesResponse: object = {};

export const QueryInvoicesResponse = {
  encode(
    message: QueryInvoicesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.invoices) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryInvoicesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInvoicesResponse } as QueryInvoicesResponse;
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

  fromJSON(object: any): QueryInvoicesResponse {
    const message = { ...baseQueryInvoicesResponse } as QueryInvoicesResponse;
    message.invoices = [];
    if (object.invoices !== undefined && object.invoices !== null) {
      for (const e of object.invoices) {
        message.invoices.push(Invoice.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryInvoicesResponse): unknown {
    const obj: any = {};
    if (message.invoices) {
      obj.invoices = message.invoices.map((e) =>
        e ? Invoice.toJSON(e) : undefined
      );
    } else {
      obj.invoices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInvoicesResponse>
  ): QueryInvoicesResponse {
    const message = { ...baseQueryInvoicesResponse } as QueryInvoicesResponse;
    message.invoices = [];
    if (object.invoices !== undefined && object.invoices !== null) {
      for (const e of object.invoices) {
        message.invoices.push(Invoice.fromPartial(e));
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

const baseQueryInvoiceRequest: object = { invoiceId: "" };

export const QueryInvoiceRequest = {
  encode(
    message: QueryInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.invoiceId !== "") {
      writer.uint32(10).string(message.invoiceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInvoiceRequest } as QueryInvoiceRequest;
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

  fromJSON(object: any): QueryInvoiceRequest {
    const message = { ...baseQueryInvoiceRequest } as QueryInvoiceRequest;
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    return message;
  },

  toJSON(message: QueryInvoiceRequest): unknown {
    const obj: any = {};
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInvoiceRequest>): QueryInvoiceRequest {
    const message = { ...baseQueryInvoiceRequest } as QueryInvoiceRequest;
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    return message;
  },
};

const baseQueryInvoiceResponse: object = {};

export const QueryInvoiceResponse = {
  encode(
    message: QueryInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.invoice !== undefined) {
      Invoice.encode(message.invoice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInvoiceResponse } as QueryInvoiceResponse;
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

  fromJSON(object: any): QueryInvoiceResponse {
    const message = { ...baseQueryInvoiceResponse } as QueryInvoiceResponse;
    if (object.invoice !== undefined && object.invoice !== null) {
      message.invoice = Invoice.fromJSON(object.invoice);
    } else {
      message.invoice = undefined;
    }
    return message;
  },

  toJSON(message: QueryInvoiceResponse): unknown {
    const obj: any = {};
    message.invoice !== undefined &&
      (obj.invoice = message.invoice
        ? Invoice.toJSON(message.invoice)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInvoiceResponse>): QueryInvoiceResponse {
    const message = { ...baseQueryInvoiceResponse } as QueryInvoiceResponse;
    if (object.invoice !== undefined && object.invoice !== null) {
      message.invoice = Invoice.fromPartial(object.invoice);
    } else {
      message.invoice = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Invoices returns invoices. */
  Invoices(request: QueryInvoicesRequest): Promise<QueryInvoicesResponse>;
  /** Invoice returns invoice details based on incoice id. */
  Invoice(request: QueryInvoiceRequest): Promise<QueryInvoiceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Invoices(request: QueryInvoicesRequest): Promise<QueryInvoicesResponse> {
    const data = QueryInvoicesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Query",
      "Invoices",
      data
    );
    return promise.then((data) =>
      QueryInvoicesResponse.decode(new Reader(data))
    );
  }

  Invoice(request: QueryInvoiceRequest): Promise<QueryInvoiceResponse> {
    const data = QueryInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Query",
      "Invoice",
      data
    );
    return promise.then((data) =>
      QueryInvoiceResponse.decode(new Reader(data))
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
