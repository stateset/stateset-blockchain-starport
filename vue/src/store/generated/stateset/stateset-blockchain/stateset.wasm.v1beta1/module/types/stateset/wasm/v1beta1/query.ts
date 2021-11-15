/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  CodeInfo,
  ContractInfo,
  Params,
} from "../../../stateset/wasm/v1beta1/wasm";

export const protobufPackage = "stateset.wasm.v1beta1";

/** QueryCodeInfoRequest is the request type for the QueryyCodeInfo RPC method. */
export interface QueryCodeInfoRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: number;
}

/**
 * QueryCodeInfoResponse is response type for the
 * QueryyCodeInfo RPC method.
 */
export interface QueryCodeInfoResponse {
  codeInfo: CodeInfo | undefined;
}

/** QueryByteCodeRequest is the request type for the QueryyByteCode RPC method. */
export interface QueryByteCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: number;
}

/**
 * QueryByteCodeResponse is response type for the
 * QueryyByteCode RPC method.
 */
export interface QueryByteCodeResponse {
  byteCode: Uint8Array;
}

/** QueryContractInfoRequest is the request type for the Query/ContractInfo RPC method. */
export interface QueryContractInfoRequest {
  contractAddress: string;
}

/**
 * QueryContractInfoResponse is response type for the
 * Query/ContractInfo RPC method.
 */
export interface QueryContractInfoResponse {
  contractInfo: ContractInfo | undefined;
}

/** QueryContractStoreRequest is the request type for the Query/ContractStore RPC method. */
export interface QueryContractStoreRequest {
  contractAddress: string;
  queryMsg: Uint8Array;
}

/**
 * QueryContractStoreResponse is response type for the
 * Query/ContractStore RPC method.
 */
export interface QueryContractStoreResponse {
  queryResult: Uint8Array;
}

/** QueryRawStoreRequest is the request type for the Query/RawStore RPC method. */
export interface QueryRawStoreRequest {
  contractAddress: string;
  key: Uint8Array;
}

/**
 * QueryRawStoreResponse is response type for the
 * Query/RawStore RPC method.
 */
export interface QueryRawStoreResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

const baseQueryCodeInfoRequest: object = { codeId: 0 };

export const QueryCodeInfoRequest = {
  encode(
    message: QueryCodeInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCodeInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeInfoRequest } as QueryCodeInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeInfoRequest {
    const message = { ...baseQueryCodeInfoRequest } as QueryCodeInfoRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Number(object.codeId);
    } else {
      message.codeId = 0;
    }
    return message;
  },

  toJSON(message: QueryCodeInfoRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = message.codeId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeInfoRequest>): QueryCodeInfoRequest {
    const message = { ...baseQueryCodeInfoRequest } as QueryCodeInfoRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId;
    } else {
      message.codeId = 0;
    }
    return message;
  },
};

const baseQueryCodeInfoResponse: object = {};

export const QueryCodeInfoResponse = {
  encode(
    message: QueryCodeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCodeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeInfoResponse } as QueryCodeInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeInfoResponse {
    const message = { ...baseQueryCodeInfoResponse } as QueryCodeInfoResponse;
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromJSON(object.codeInfo);
    } else {
      message.codeInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryCodeInfoResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo
        ? CodeInfo.toJSON(message.codeInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCodeInfoResponse>
  ): QueryCodeInfoResponse {
    const message = { ...baseQueryCodeInfoResponse } as QueryCodeInfoResponse;
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
    } else {
      message.codeInfo = undefined;
    }
    return message;
  },
};

const baseQueryByteCodeRequest: object = { codeId: 0 };

export const QueryByteCodeRequest = {
  encode(
    message: QueryByteCodeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryByteCodeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByteCodeRequest } as QueryByteCodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByteCodeRequest {
    const message = { ...baseQueryByteCodeRequest } as QueryByteCodeRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Number(object.codeId);
    } else {
      message.codeId = 0;
    }
    return message;
  },

  toJSON(message: QueryByteCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = message.codeId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByteCodeRequest>): QueryByteCodeRequest {
    const message = { ...baseQueryByteCodeRequest } as QueryByteCodeRequest;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId;
    } else {
      message.codeId = 0;
    }
    return message;
  },
};

const baseQueryByteCodeResponse: object = {};

export const QueryByteCodeResponse = {
  encode(
    message: QueryByteCodeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.byteCode.length !== 0) {
      writer.uint32(10).bytes(message.byteCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryByteCodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByteCodeResponse } as QueryByteCodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByteCodeResponse {
    const message = { ...baseQueryByteCodeResponse } as QueryByteCodeResponse;
    if (object.byteCode !== undefined && object.byteCode !== null) {
      message.byteCode = bytesFromBase64(object.byteCode);
    }
    return message;
  },

  toJSON(message: QueryByteCodeResponse): unknown {
    const obj: any = {};
    message.byteCode !== undefined &&
      (obj.byteCode = base64FromBytes(
        message.byteCode !== undefined ? message.byteCode : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryByteCodeResponse>
  ): QueryByteCodeResponse {
    const message = { ...baseQueryByteCodeResponse } as QueryByteCodeResponse;
    if (object.byteCode !== undefined && object.byteCode !== null) {
      message.byteCode = object.byteCode;
    } else {
      message.byteCode = new Uint8Array();
    }
    return message;
  },
};

const baseQueryContractInfoRequest: object = { contractAddress: "" };

export const QueryContractInfoRequest = {
  encode(
    message: QueryContractInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryContractInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractInfoRequest,
    } as QueryContractInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractInfoRequest {
    const message = {
      ...baseQueryContractInfoRequest,
    } as QueryContractInfoRequest;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    return message;
  },

  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractInfoRequest>
  ): QueryContractInfoRequest {
    const message = {
      ...baseQueryContractInfoRequest,
    } as QueryContractInfoRequest;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    return message;
  },
};

const baseQueryContractInfoResponse: object = {};

export const QueryContractInfoResponse = {
  encode(
    message: QueryContractInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(
        message.contractInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryContractInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractInfoResponse,
    } as QueryContractInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractInfoResponse {
    const message = {
      ...baseQueryContractInfoResponse,
    } as QueryContractInfoResponse;
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    } else {
      message.contractInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo
        ? ContractInfo.toJSON(message.contractInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractInfoResponse>
  ): QueryContractInfoResponse {
    const message = {
      ...baseQueryContractInfoResponse,
    } as QueryContractInfoResponse;
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    } else {
      message.contractInfo = undefined;
    }
    return message;
  },
};

const baseQueryContractStoreRequest: object = { contractAddress: "" };

export const QueryContractStoreRequest = {
  encode(
    message: QueryContractStoreRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.queryMsg.length !== 0) {
      writer.uint32(18).bytes(message.queryMsg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryContractStoreRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractStoreRequest,
    } as QueryContractStoreRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.queryMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractStoreRequest {
    const message = {
      ...baseQueryContractStoreRequest,
    } as QueryContractStoreRequest;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.queryMsg !== undefined && object.queryMsg !== null) {
      message.queryMsg = bytesFromBase64(object.queryMsg);
    }
    return message;
  },

  toJSON(message: QueryContractStoreRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.queryMsg !== undefined &&
      (obj.queryMsg = base64FromBytes(
        message.queryMsg !== undefined ? message.queryMsg : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractStoreRequest>
  ): QueryContractStoreRequest {
    const message = {
      ...baseQueryContractStoreRequest,
    } as QueryContractStoreRequest;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.queryMsg !== undefined && object.queryMsg !== null) {
      message.queryMsg = object.queryMsg;
    } else {
      message.queryMsg = new Uint8Array();
    }
    return message;
  },
};

const baseQueryContractStoreResponse: object = {};

export const QueryContractStoreResponse = {
  encode(
    message: QueryContractStoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.queryResult.length !== 0) {
      writer.uint32(10).bytes(message.queryResult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryContractStoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractStoreResponse,
    } as QueryContractStoreResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryResult = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractStoreResponse {
    const message = {
      ...baseQueryContractStoreResponse,
    } as QueryContractStoreResponse;
    if (object.queryResult !== undefined && object.queryResult !== null) {
      message.queryResult = bytesFromBase64(object.queryResult);
    }
    return message;
  },

  toJSON(message: QueryContractStoreResponse): unknown {
    const obj: any = {};
    message.queryResult !== undefined &&
      (obj.queryResult = base64FromBytes(
        message.queryResult !== undefined
          ? message.queryResult
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractStoreResponse>
  ): QueryContractStoreResponse {
    const message = {
      ...baseQueryContractStoreResponse,
    } as QueryContractStoreResponse;
    if (object.queryResult !== undefined && object.queryResult !== null) {
      message.queryResult = object.queryResult;
    } else {
      message.queryResult = new Uint8Array();
    }
    return message;
  },
};

const baseQueryRawStoreRequest: object = { contractAddress: "" };

export const QueryRawStoreRequest = {
  encode(
    message: QueryRawStoreRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryRawStoreRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRawStoreRequest } as QueryRawStoreRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRawStoreRequest {
    const message = { ...baseQueryRawStoreRequest } as QueryRawStoreRequest;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },

  toJSON(message: QueryRawStoreRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRawStoreRequest>): QueryRawStoreRequest {
    const message = { ...baseQueryRawStoreRequest } as QueryRawStoreRequest;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    return message;
  },
};

const baseQueryRawStoreResponse: object = {};

export const QueryRawStoreResponse = {
  encode(
    message: QueryRawStoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryRawStoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRawStoreResponse } as QueryRawStoreResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRawStoreResponse {
    const message = { ...baseQueryRawStoreResponse } as QueryRawStoreResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: QueryRawStoreResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRawStoreResponse>
  ): QueryRawStoreResponse {
    const message = { ...baseQueryRawStoreResponse } as QueryRawStoreResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** CodeInfo returns the stored code info */
  CodeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
  /** ByteCode returns the stored byte code */
  ByteCode(request: QueryByteCodeRequest): Promise<QueryByteCodeResponse>;
  /** ContractInfo returns the stored contract info */
  ContractInfo(
    request: QueryContractInfoRequest
  ): Promise<QueryContractInfoResponse>;
  /** ContractStore return smart query result from the contract */
  ContractStore(
    request: QueryContractStoreRequest
  ): Promise<QueryContractStoreResponse>;
  /** RawStore return single key from the raw store data of a contract */
  RawStore(request: QueryRawStoreRequest): Promise<QueryRawStoreResponse>;
  /** Params queries all parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CodeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> {
    const data = QueryCodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Query",
      "CodeInfo",
      data
    );
    return promise.then((data) =>
      QueryCodeInfoResponse.decode(new Reader(data))
    );
  }

  ByteCode(request: QueryByteCodeRequest): Promise<QueryByteCodeResponse> {
    const data = QueryByteCodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Query",
      "ByteCode",
      data
    );
    return promise.then((data) =>
      QueryByteCodeResponse.decode(new Reader(data))
    );
  }

  ContractInfo(
    request: QueryContractInfoRequest
  ): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Query",
      "ContractInfo",
      data
    );
    return promise.then((data) =>
      QueryContractInfoResponse.decode(new Reader(data))
    );
  }

  ContractStore(
    request: QueryContractStoreRequest
  ): Promise<QueryContractStoreResponse> {
    const data = QueryContractStoreRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Query",
      "ContractStore",
      data
    );
    return promise.then((data) =>
      QueryContractStoreResponse.decode(new Reader(data))
    );
  }

  RawStore(request: QueryRawStoreRequest): Promise<QueryRawStoreResponse> {
    const data = QueryRawStoreRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Query",
      "RawStore",
      data
    );
    return promise.then((data) =>
      QueryRawStoreResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
