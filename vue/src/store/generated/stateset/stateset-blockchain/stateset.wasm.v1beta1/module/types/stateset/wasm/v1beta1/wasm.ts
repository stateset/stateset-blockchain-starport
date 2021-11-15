/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stateset.wasm.v1beta1";

/** Params defines the parameters for the wasm module. */
export interface Params {
  maxContractSize: number;
  maxContractGas: number;
  maxContractMsgSize: number;
}

/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
  /** CodeID is the sequentially increasing unique identifier */
  codeId: number;
  /** CodeHash is the unique identifier created by wasmvm */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
}

/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
  /** Address is the address of the contract */
  address: string;
  /** Creator is the contract creator address */
  creator: string;
  /** Admin is who can execute the contract migration */
  admin: string;
  /** CodeID is the reference to the stored Wasm code */
  codeId: number;
  /** InitMsg is the raw message used when instantiating a contract */
  initMsg: Uint8Array;
}

const baseParams: object = {
  maxContractSize: 0,
  maxContractGas: 0,
  maxContractMsgSize: 0,
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.maxContractSize !== 0) {
      writer.uint32(8).uint64(message.maxContractSize);
    }
    if (message.maxContractGas !== 0) {
      writer.uint32(16).uint64(message.maxContractGas);
    }
    if (message.maxContractMsgSize !== 0) {
      writer.uint32(24).uint64(message.maxContractMsgSize);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxContractSize = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.maxContractGas = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.maxContractMsgSize = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.maxContractSize !== undefined &&
      object.maxContractSize !== null
    ) {
      message.maxContractSize = Number(object.maxContractSize);
    } else {
      message.maxContractSize = 0;
    }
    if (object.maxContractGas !== undefined && object.maxContractGas !== null) {
      message.maxContractGas = Number(object.maxContractGas);
    } else {
      message.maxContractGas = 0;
    }
    if (
      object.maxContractMsgSize !== undefined &&
      object.maxContractMsgSize !== null
    ) {
      message.maxContractMsgSize = Number(object.maxContractMsgSize);
    } else {
      message.maxContractMsgSize = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxContractSize !== undefined &&
      (obj.maxContractSize = message.maxContractSize);
    message.maxContractGas !== undefined &&
      (obj.maxContractGas = message.maxContractGas);
    message.maxContractMsgSize !== undefined &&
      (obj.maxContractMsgSize = message.maxContractMsgSize);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.maxContractSize !== undefined &&
      object.maxContractSize !== null
    ) {
      message.maxContractSize = object.maxContractSize;
    } else {
      message.maxContractSize = 0;
    }
    if (object.maxContractGas !== undefined && object.maxContractGas !== null) {
      message.maxContractGas = object.maxContractGas;
    } else {
      message.maxContractGas = 0;
    }
    if (
      object.maxContractMsgSize !== undefined &&
      object.maxContractMsgSize !== null
    ) {
      message.maxContractMsgSize = object.maxContractMsgSize;
    } else {
      message.maxContractMsgSize = 0;
    }
    return message;
  },
};

const baseCodeInfo: object = { codeId: 0, creator: "" };

export const CodeInfo = {
  encode(message: CodeInfo, writer: Writer = Writer.create()): Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(18).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CodeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCodeInfo } as CodeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.codeHash = reader.bytes();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CodeInfo {
    const message = { ...baseCodeInfo } as CodeInfo;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Number(object.codeId);
    } else {
      message.codeId = 0;
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = bytesFromBase64(object.codeHash);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: CodeInfo): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = message.codeId);
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(
        message.codeHash !== undefined ? message.codeHash : new Uint8Array()
      ));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<CodeInfo>): CodeInfo {
    const message = { ...baseCodeInfo } as CodeInfo;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId;
    } else {
      message.codeId = 0;
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = object.codeHash;
    } else {
      message.codeHash = new Uint8Array();
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseContractInfo: object = {
  address: "",
  creator: "",
  admin: "",
  codeId: 0,
};

export const ContractInfo = {
  encode(message: ContractInfo, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.codeId !== 0) {
      writer.uint32(32).uint64(message.codeId);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContractInfo } as ContractInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.initMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractInfo {
    const message = { ...baseContractInfo } as ContractInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Number(object.codeId);
    } else {
      message.codeId = 0;
    }
    if (object.initMsg !== undefined && object.initMsg !== null) {
      message.initMsg = bytesFromBase64(object.initMsg);
    }
    return message;
  },

  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = message.codeId);
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(
        message.initMsg !== undefined ? message.initMsg : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = { ...baseContractInfo } as ContractInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId;
    } else {
      message.codeId = 0;
    }
    if (object.initMsg !== undefined && object.initMsg !== null) {
      message.initMsg = object.initMsg;
    } else {
      message.initMsg = new Uint8Array();
    }
    return message;
  },
};

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
