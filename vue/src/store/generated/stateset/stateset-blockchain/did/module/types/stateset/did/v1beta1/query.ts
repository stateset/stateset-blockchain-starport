/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "did";

/** QueryDidDocRequest is the request type for the Query/DidDoc RPC method. */
export interface QueryDidDocRequest {
  did: string;
}

/** QueryDidDocResponse is the response type for the Query/DidDoc RPC method. */
export interface QueryDidDocResponse {
  diddoc: Any | undefined;
}

/** QueryAllDidsRequest is the request type for the Query/AllDids RPC method. */
export interface QueryAllDidsRequest {}

/** QueryAllDidsResponse is the response type for the Query/AllDids RPC method. */
export interface QueryAllDidsResponse {
  dids: string[];
}

/** QueryAllDidDocsRequest is the request type for the Query/AllDidDocs RPC method. */
export interface QueryAllDidDocsRequest {}

/** QueryAllDidDocsResponse is the response type for the Query/AllDidDocs RPC method. */
export interface QueryAllDidDocsResponse {
  diddocs: Any[];
}

/** QueryAddressFromDidRequest is the request type for the Query/AddressFromDid RPC method. */
export interface QueryAddressFromDidRequest {
  did: string;
}

/** QueryAddressFromDidResponse is the response type for the Query/AddressFromDid RPC method. */
export interface QueryAddressFromDidResponse {
  address: string;
}

/** QueryAddressFromBase58EncodedPubkeyRequest is the request type for the Query/AddressFromBase58EncodedPubkey RPC method. */
export interface QueryAddressFromBase58EncodedPubkeyRequest {
  pubKey: string;
}

/** QueryAddressFromBase58EncodedPubkeyResponse is the response type for the Query/AddressFromBase58EncodedPubkey RPC method. */
export interface QueryAddressFromBase58EncodedPubkeyResponse {
  address: string;
}

const baseQueryDidDocRequest: object = { did: "" };

export const QueryDidDocRequest = {
  encode(
    message: QueryDidDocRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidDocRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDidDocRequest } as QueryDidDocRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocRequest {
    const message = { ...baseQueryDidDocRequest } as QueryDidDocRequest;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: QueryDidDocRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDidDocRequest>): QueryDidDocRequest {
    const message = { ...baseQueryDidDocRequest } as QueryDidDocRequest;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseQueryDidDocResponse: object = {};

export const QueryDidDocResponse = {
  encode(
    message: QueryDidDocResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.diddoc !== undefined) {
      Any.encode(message.diddoc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidDocResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDidDocResponse } as QueryDidDocResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diddoc = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocResponse {
    const message = { ...baseQueryDidDocResponse } as QueryDidDocResponse;
    if (object.diddoc !== undefined && object.diddoc !== null) {
      message.diddoc = Any.fromJSON(object.diddoc);
    } else {
      message.diddoc = undefined;
    }
    return message;
  },

  toJSON(message: QueryDidDocResponse): unknown {
    const obj: any = {};
    message.diddoc !== undefined &&
      (obj.diddoc = message.diddoc ? Any.toJSON(message.diddoc) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDidDocResponse>): QueryDidDocResponse {
    const message = { ...baseQueryDidDocResponse } as QueryDidDocResponse;
    if (object.diddoc !== undefined && object.diddoc !== null) {
      message.diddoc = Any.fromPartial(object.diddoc);
    } else {
      message.diddoc = undefined;
    }
    return message;
  },
};

const baseQueryAllDidsRequest: object = {};

export const QueryAllDidsRequest = {
  encode(_: QueryAllDidsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDidsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDidsRequest } as QueryAllDidsRequest;
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

  fromJSON(_: any): QueryAllDidsRequest {
    const message = { ...baseQueryAllDidsRequest } as QueryAllDidsRequest;
    return message;
  },

  toJSON(_: QueryAllDidsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllDidsRequest>): QueryAllDidsRequest {
    const message = { ...baseQueryAllDidsRequest } as QueryAllDidsRequest;
    return message;
  },
};

const baseQueryAllDidsResponse: object = { dids: "" };

export const QueryAllDidsResponse = {
  encode(
    message: QueryAllDidsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.dids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDidsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDidsResponse } as QueryAllDidsResponse;
    message.dids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDidsResponse {
    const message = { ...baseQueryAllDidsResponse } as QueryAllDidsResponse;
    message.dids = [];
    if (object.dids !== undefined && object.dids !== null) {
      for (const e of object.dids) {
        message.dids.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllDidsResponse): unknown {
    const obj: any = {};
    if (message.dids) {
      obj.dids = message.dids.map((e) => e);
    } else {
      obj.dids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDidsResponse>): QueryAllDidsResponse {
    const message = { ...baseQueryAllDidsResponse } as QueryAllDidsResponse;
    message.dids = [];
    if (object.dids !== undefined && object.dids !== null) {
      for (const e of object.dids) {
        message.dids.push(e);
      }
    }
    return message;
  },
};

const baseQueryAllDidDocsRequest: object = {};

export const QueryAllDidDocsRequest = {
  encode(_: QueryAllDidDocsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDidDocsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDidDocsRequest } as QueryAllDidDocsRequest;
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

  fromJSON(_: any): QueryAllDidDocsRequest {
    const message = { ...baseQueryAllDidDocsRequest } as QueryAllDidDocsRequest;
    return message;
  },

  toJSON(_: QueryAllDidDocsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllDidDocsRequest>): QueryAllDidDocsRequest {
    const message = { ...baseQueryAllDidDocsRequest } as QueryAllDidDocsRequest;
    return message;
  },
};

const baseQueryAllDidDocsResponse: object = {};

export const QueryAllDidDocsResponse = {
  encode(
    message: QueryAllDidDocsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.diddocs) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDidDocsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDidDocsResponse,
    } as QueryAllDidDocsResponse;
    message.diddocs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diddocs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDidDocsResponse {
    const message = {
      ...baseQueryAllDidDocsResponse,
    } as QueryAllDidDocsResponse;
    message.diddocs = [];
    if (object.diddocs !== undefined && object.diddocs !== null) {
      for (const e of object.diddocs) {
        message.diddocs.push(Any.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllDidDocsResponse): unknown {
    const obj: any = {};
    if (message.diddocs) {
      obj.diddocs = message.diddocs.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.diddocs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDidDocsResponse>
  ): QueryAllDidDocsResponse {
    const message = {
      ...baseQueryAllDidDocsResponse,
    } as QueryAllDidDocsResponse;
    message.diddocs = [];
    if (object.diddocs !== undefined && object.diddocs !== null) {
      for (const e of object.diddocs) {
        message.diddocs.push(Any.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAddressFromDidRequest: object = { did: "" };

export const QueryAddressFromDidRequest = {
  encode(
    message: QueryAddressFromDidRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAddressFromDidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAddressFromDidRequest,
    } as QueryAddressFromDidRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAddressFromDidRequest {
    const message = {
      ...baseQueryAddressFromDidRequest,
    } as QueryAddressFromDidRequest;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: QueryAddressFromDidRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAddressFromDidRequest>
  ): QueryAddressFromDidRequest {
    const message = {
      ...baseQueryAddressFromDidRequest,
    } as QueryAddressFromDidRequest;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseQueryAddressFromDidResponse: object = { address: "" };

export const QueryAddressFromDidResponse = {
  encode(
    message: QueryAddressFromDidResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAddressFromDidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAddressFromDidResponse,
    } as QueryAddressFromDidResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAddressFromDidResponse {
    const message = {
      ...baseQueryAddressFromDidResponse,
    } as QueryAddressFromDidResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryAddressFromDidResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAddressFromDidResponse>
  ): QueryAddressFromDidResponse {
    const message = {
      ...baseQueryAddressFromDidResponse,
    } as QueryAddressFromDidResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryAddressFromBase58EncodedPubkeyRequest: object = { pubKey: "" };

export const QueryAddressFromBase58EncodedPubkeyRequest = {
  encode(
    message: QueryAddressFromBase58EncodedPubkeyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pubKey !== "") {
      writer.uint32(10).string(message.pubKey);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAddressFromBase58EncodedPubkeyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAddressFromBase58EncodedPubkeyRequest,
    } as QueryAddressFromBase58EncodedPubkeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAddressFromBase58EncodedPubkeyRequest {
    const message = {
      ...baseQueryAddressFromBase58EncodedPubkeyRequest,
    } as QueryAddressFromBase58EncodedPubkeyRequest;
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey);
    } else {
      message.pubKey = "";
    }
    return message;
  },

  toJSON(message: QueryAddressFromBase58EncodedPubkeyRequest): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAddressFromBase58EncodedPubkeyRequest>
  ): QueryAddressFromBase58EncodedPubkeyRequest {
    const message = {
      ...baseQueryAddressFromBase58EncodedPubkeyRequest,
    } as QueryAddressFromBase58EncodedPubkeyRequest;
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey;
    } else {
      message.pubKey = "";
    }
    return message;
  },
};

const baseQueryAddressFromBase58EncodedPubkeyResponse: object = { address: "" };

export const QueryAddressFromBase58EncodedPubkeyResponse = {
  encode(
    message: QueryAddressFromBase58EncodedPubkeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAddressFromBase58EncodedPubkeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAddressFromBase58EncodedPubkeyResponse,
    } as QueryAddressFromBase58EncodedPubkeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAddressFromBase58EncodedPubkeyResponse {
    const message = {
      ...baseQueryAddressFromBase58EncodedPubkeyResponse,
    } as QueryAddressFromBase58EncodedPubkeyResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryAddressFromBase58EncodedPubkeyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAddressFromBase58EncodedPubkeyResponse>
  ): QueryAddressFromBase58EncodedPubkeyResponse {
    const message = {
      ...baseQueryAddressFromBase58EncodedPubkeyResponse,
    } as QueryAddressFromBase58EncodedPubkeyResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** DidDoc queries info of a specific DID's DidDoc. */
  DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse>;
  /** AllDids returns a list of all existing DIDs. */
  AllDids(request: QueryAllDidsRequest): Promise<QueryAllDidsResponse>;
  /** AllDidDocs returns a list of all existing DidDocs (i.e. all DIDs along with their DidDoc info). */
  AllDidDocs(request: QueryAllDidDocsRequest): Promise<QueryAllDidDocsResponse>;
  /** AddressFromDid retrieves the cosmos address associated to an stateset DID. */
  AddressFromDid(
    request: QueryAddressFromDidRequest
  ): Promise<QueryAddressFromDidResponse>;
  /** AddressFromBase58EncodedPubkey retrieves the cosmos address associated to an stateset DID's pubkey. */
  AddressFromBase58EncodedPubkey(
    request: QueryAddressFromBase58EncodedPubkeyRequest
  ): Promise<QueryAddressFromBase58EncodedPubkeyResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse> {
    const data = QueryDidDocRequest.encode(request).finish();
    const promise = this.rpc.request("did.Query", "DidDoc", data);
    return promise.then((data) => QueryDidDocResponse.decode(new Reader(data)));
  }

  AllDids(request: QueryAllDidsRequest): Promise<QueryAllDidsResponse> {
    const data = QueryAllDidsRequest.encode(request).finish();
    const promise = this.rpc.request("did.Query", "AllDids", data);
    return promise.then((data) =>
      QueryAllDidsResponse.decode(new Reader(data))
    );
  }

  AllDidDocs(
    request: QueryAllDidDocsRequest
  ): Promise<QueryAllDidDocsResponse> {
    const data = QueryAllDidDocsRequest.encode(request).finish();
    const promise = this.rpc.request("did.Query", "AllDidDocs", data);
    return promise.then((data) =>
      QueryAllDidDocsResponse.decode(new Reader(data))
    );
  }

  AddressFromDid(
    request: QueryAddressFromDidRequest
  ): Promise<QueryAddressFromDidResponse> {
    const data = QueryAddressFromDidRequest.encode(request).finish();
    const promise = this.rpc.request("did.Query", "AddressFromDid", data);
    return promise.then((data) =>
      QueryAddressFromDidResponse.decode(new Reader(data))
    );
  }

  AddressFromBase58EncodedPubkey(
    request: QueryAddressFromBase58EncodedPubkeyRequest
  ): Promise<QueryAddressFromBase58EncodedPubkeyResponse> {
    const data = QueryAddressFromBase58EncodedPubkeyRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "did.Query",
      "AddressFromBase58EncodedPubkey",
      data
    );
    return promise.then((data) =>
      QueryAddressFromBase58EncodedPubkeyResponse.decode(new Reader(data))
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
