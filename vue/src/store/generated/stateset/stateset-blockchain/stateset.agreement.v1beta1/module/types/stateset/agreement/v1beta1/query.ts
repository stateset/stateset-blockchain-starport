/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import {
  AgreementFilters,
  Agreement,
} from "../../../stateset/agreement/v1beta1/tx";
import { PageRequest } from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "stateset.agreement.v1beta1";

/**
 * =============================== Agreements
 * QueryAgreementRequest is the Query/Agreement request type.
 */
export interface QueryAgreementsRequest {
  filters: AgreementFilters | undefined;
  pagination: PageRequest | undefined;
}

export interface QueryAgreementsResponse {
  agreements: Agreement[];
  pagination: PageRequest | undefined;
}

export interface QueryAgreementRequest {
  /** agreement_id is the unique ID of agreement to query. */
  agreementId: string;
}

/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryAgreementResponse {
  agreement: Agreement | undefined;
}

const baseQueryAgreementsRequest: object = {};

export const QueryAgreementsRequest = {
  encode(
    message: QueryAgreementsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.filters !== undefined) {
      AgreementFilters.encode(
        message.filters,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAgreementsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAgreementsRequest } as QueryAgreementsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = AgreementFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryAgreementsRequest {
    const message = { ...baseQueryAgreementsRequest } as QueryAgreementsRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = AgreementFilters.fromJSON(object.filters);
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

  toJSON(message: QueryAgreementsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? AgreementFilters.toJSON(message.filters)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAgreementsRequest>
  ): QueryAgreementsRequest {
    const message = { ...baseQueryAgreementsRequest } as QueryAgreementsRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = AgreementFilters.fromPartial(object.filters);
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

const baseQueryAgreementsResponse: object = {};

export const QueryAgreementsResponse = {
  encode(
    message: QueryAgreementsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.agreements) {
      Agreement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAgreementsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAgreementsResponse,
    } as QueryAgreementsResponse;
    message.agreements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agreements.push(Agreement.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAgreementsResponse {
    const message = {
      ...baseQueryAgreementsResponse,
    } as QueryAgreementsResponse;
    message.agreements = [];
    if (object.agreements !== undefined && object.agreements !== null) {
      for (const e of object.agreements) {
        message.agreements.push(Agreement.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAgreementsResponse): unknown {
    const obj: any = {};
    if (message.agreements) {
      obj.agreements = message.agreements.map((e) =>
        e ? Agreement.toJSON(e) : undefined
      );
    } else {
      obj.agreements = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAgreementsResponse>
  ): QueryAgreementsResponse {
    const message = {
      ...baseQueryAgreementsResponse,
    } as QueryAgreementsResponse;
    message.agreements = [];
    if (object.agreements !== undefined && object.agreements !== null) {
      for (const e of object.agreements) {
        message.agreements.push(Agreement.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAgreementRequest: object = { agreementId: "" };

export const QueryAgreementRequest = {
  encode(
    message: QueryAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.agreementId !== "") {
      writer.uint32(10).string(message.agreementId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAgreementRequest } as QueryAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agreementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAgreementRequest {
    const message = { ...baseQueryAgreementRequest } as QueryAgreementRequest;
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: QueryAgreementRequest): unknown {
    const obj: any = {};
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAgreementRequest>
  ): QueryAgreementRequest {
    const message = { ...baseQueryAgreementRequest } as QueryAgreementRequest;
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseQueryAgreementResponse: object = {};

export const QueryAgreementResponse = {
  encode(
    message: QueryAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.agreement !== undefined) {
      Agreement.encode(message.agreement, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAgreementResponse } as QueryAgreementResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agreement = Agreement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAgreementResponse {
    const message = { ...baseQueryAgreementResponse } as QueryAgreementResponse;
    if (object.agreement !== undefined && object.agreement !== null) {
      message.agreement = Agreement.fromJSON(object.agreement);
    } else {
      message.agreement = undefined;
    }
    return message;
  },

  toJSON(message: QueryAgreementResponse): unknown {
    const obj: any = {};
    message.agreement !== undefined &&
      (obj.agreement = message.agreement
        ? Agreement.toJSON(message.agreement)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAgreementResponse>
  ): QueryAgreementResponse {
    const message = { ...baseQueryAgreementResponse } as QueryAgreementResponse;
    if (object.agreement !== undefined && object.agreement !== null) {
      message.agreement = Agreement.fromPartial(object.agreement);
    } else {
      message.agreement = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Agreements returns agreeement details based on agreement. */
  Agreements(request: QueryAgreementsRequest): Promise<QueryAgreementsResponse>;
  /** Agreement returns agreeement details based on agreement. */
  Agreement(request: QueryAgreementRequest): Promise<QueryAgreementResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Agreements(
    request: QueryAgreementsRequest
  ): Promise<QueryAgreementsResponse> {
    const data = QueryAgreementsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Query",
      "Agreements",
      data
    );
    return promise.then((data) =>
      QueryAgreementsResponse.decode(new Reader(data))
    );
  }

  Agreement(request: QueryAgreementRequest): Promise<QueryAgreementResponse> {
    const data = QueryAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Query",
      "Agreement",
      data
    );
    return promise.then((data) =>
      QueryAgreementResponse.decode(new Reader(data))
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
