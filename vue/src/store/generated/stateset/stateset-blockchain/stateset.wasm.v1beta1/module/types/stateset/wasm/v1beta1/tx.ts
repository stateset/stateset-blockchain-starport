/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "stateset.wasm.v1beta1";

/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}

/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: number;
}

/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCode {
  /** CodeID is the migration target code id */
  codeId: number;
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}

/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponse {}

/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is an sender address */
  sender: string;
  /** Admin is an optional admin address who can migrate the contract */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: number;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  initMsg: Uint8Array;
  /** InitCoins that are transferred to the contract on execution */
  initCoins: Coin[];
}

/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponse {
  /** ContractAddress is the bech32 address of the new contract instance. */
  contractAddress: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** ExecuteMsg json encoded message to be passed to the contract */
  executeMsg: Uint8Array;
  /** Coins that are transferred to the contract on execution */
  coins: Coin[];
}

/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContract {
  /** Admin is the current contract admin */
  admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** NewCodeID references the new WASM code */
  newCodeId: number;
  /** MigrateMsg is json encoded message to be passed to the contract on migration */
  migrateMsg: Uint8Array;
}

/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdmin {
  /** Admin is the current contract admin */
  admin: string;
  /** NewAdmin is the new contract admin */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponse {}

/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdmin {
  /** Admin is the current contract admin */
  admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponse {}

const baseMsgStoreCode: object = { sender: "" };

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStoreCode } as MsgStoreCode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCode {
    const message = { ...baseMsgStoreCode } as MsgStoreCode;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    }
    return message;
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined
          ? message.wasmByteCode
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode {
    const message = { ...baseMsgStoreCode } as MsgStoreCode;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = object.wasmByteCode;
    } else {
      message.wasmByteCode = new Uint8Array();
    }
    return message;
  },
};

const baseMsgStoreCodeResponse: object = { codeId: 0 };

export const MsgStoreCodeResponse = {
  encode(
    message: MsgStoreCodeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStoreCodeResponse } as MsgStoreCodeResponse;
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

  fromJSON(object: any): MsgStoreCodeResponse {
    const message = { ...baseMsgStoreCodeResponse } as MsgStoreCodeResponse;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Number(object.codeId);
    } else {
      message.codeId = 0;
    }
    return message;
  },

  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = message.codeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = { ...baseMsgStoreCodeResponse } as MsgStoreCodeResponse;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId;
    } else {
      message.codeId = 0;
    }
    return message;
  },
};

const baseMsgMigrateCode: object = { codeId: 0, sender: "" };

export const MsgMigrateCode = {
  encode(message: MsgMigrateCode, writer: Writer = Writer.create()): Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMigrateCode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMigrateCode } as MsgMigrateCode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.wasmByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateCode {
    const message = { ...baseMsgMigrateCode } as MsgMigrateCode;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Number(object.codeId);
    } else {
      message.codeId = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    }
    return message;
  },

  toJSON(message: MsgMigrateCode): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = message.codeId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined
          ? message.wasmByteCode
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMigrateCode>): MsgMigrateCode {
    const message = { ...baseMsgMigrateCode } as MsgMigrateCode;
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId;
    } else {
      message.codeId = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = object.wasmByteCode;
    } else {
      message.wasmByteCode = new Uint8Array();
    }
    return message;
  },
};

const baseMsgMigrateCodeResponse: object = {};

export const MsgMigrateCodeResponse = {
  encode(_: MsgMigrateCodeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMigrateCodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMigrateCodeResponse } as MsgMigrateCodeResponse;
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

  fromJSON(_: any): MsgMigrateCodeResponse {
    const message = { ...baseMsgMigrateCodeResponse } as MsgMigrateCodeResponse;
    return message;
  },

  toJSON(_: MsgMigrateCodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMigrateCodeResponse>): MsgMigrateCodeResponse {
    const message = { ...baseMsgMigrateCodeResponse } as MsgMigrateCodeResponse;
    return message;
  },
};

const baseMsgInstantiateContract: object = { sender: "", admin: "", codeId: 0 };

export const MsgInstantiateContract = {
  encode(
    message: MsgInstantiateContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== 0) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(34).bytes(message.initMsg);
    }
    for (const v of message.initCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInstantiateContract } as MsgInstantiateContract;
    message.initCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.initMsg = reader.bytes();
          break;
        case 5:
          message.initCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    const message = { ...baseMsgInstantiateContract } as MsgInstantiateContract;
    message.initCoins = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
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
    if (object.initCoins !== undefined && object.initCoins !== null) {
      for (const e of object.initCoins) {
        message.initCoins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = message.codeId);
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(
        message.initMsg !== undefined ? message.initMsg : new Uint8Array()
      ));
    if (message.initCoins) {
      obj.initCoins = message.initCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.initCoins = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInstantiateContract>
  ): MsgInstantiateContract {
    const message = { ...baseMsgInstantiateContract } as MsgInstantiateContract;
    message.initCoins = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
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
    if (object.initCoins !== undefined && object.initCoins !== null) {
      for (const e of object.initCoins) {
        message.initCoins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgInstantiateContractResponse: object = { contractAddress: "" };

export const MsgInstantiateContractResponse = {
  encode(
    message: MsgInstantiateContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInstantiateContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInstantiateContractResponse,
    } as MsgInstantiateContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContractResponse {
    const message = {
      ...baseMsgInstantiateContractResponse,
    } as MsgInstantiateContractResponse;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInstantiateContractResponse>
  ): MsgInstantiateContractResponse {
    const message = {
      ...baseMsgInstantiateContractResponse,
    } as MsgInstantiateContractResponse;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseMsgExecuteContract: object = { sender: "", contract: "" };

export const MsgExecuteContract = {
  encode(
    message: MsgExecuteContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.executeMsg.length !== 0) {
      writer.uint32(26).bytes(message.executeMsg);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecuteContract } as MsgExecuteContract;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.executeMsg = reader.bytes();
          break;
        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    const message = { ...baseMsgExecuteContract } as MsgExecuteContract;
    message.coins = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    if (object.executeMsg !== undefined && object.executeMsg !== null) {
      message.executeMsg = bytesFromBase64(object.executeMsg);
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.executeMsg !== undefined &&
      (obj.executeMsg = base64FromBytes(
        message.executeMsg !== undefined ? message.executeMsg : new Uint8Array()
      ));
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract {
    const message = { ...baseMsgExecuteContract } as MsgExecuteContract;
    message.coins = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    } else {
      message.contract = "";
    }
    if (object.executeMsg !== undefined && object.executeMsg !== null) {
      message.executeMsg = object.executeMsg;
    } else {
      message.executeMsg = new Uint8Array();
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgExecuteContractResponse: object = {};

export const MsgExecuteContractResponse = {
  encode(
    message: MsgExecuteContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExecuteContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExecuteContractResponse,
    } as MsgExecuteContractResponse;
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

  fromJSON(object: any): MsgExecuteContractResponse {
    const message = {
      ...baseMsgExecuteContractResponse,
    } as MsgExecuteContractResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExecuteContractResponse>
  ): MsgExecuteContractResponse {
    const message = {
      ...baseMsgExecuteContractResponse,
    } as MsgExecuteContractResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseMsgMigrateContract: object = {
  admin: "",
  contract: "",
  newCodeId: 0,
};

export const MsgMigrateContract = {
  encode(
    message: MsgMigrateContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.newCodeId !== 0) {
      writer.uint32(24).uint64(message.newCodeId);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(34).bytes(message.migrateMsg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMigrateContract } as MsgMigrateContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.newCodeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.migrateMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateContract {
    const message = { ...baseMsgMigrateContract } as MsgMigrateContract;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    if (object.newCodeId !== undefined && object.newCodeId !== null) {
      message.newCodeId = Number(object.newCodeId);
    } else {
      message.newCodeId = 0;
    }
    if (object.migrateMsg !== undefined && object.migrateMsg !== null) {
      message.migrateMsg = bytesFromBase64(object.migrateMsg);
    }
    return message;
  },

  toJSON(message: MsgMigrateContract): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.contract !== undefined && (obj.contract = message.contract);
    message.newCodeId !== undefined && (obj.newCodeId = message.newCodeId);
    message.migrateMsg !== undefined &&
      (obj.migrateMsg = base64FromBytes(
        message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract {
    const message = { ...baseMsgMigrateContract } as MsgMigrateContract;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    } else {
      message.contract = "";
    }
    if (object.newCodeId !== undefined && object.newCodeId !== null) {
      message.newCodeId = object.newCodeId;
    } else {
      message.newCodeId = 0;
    }
    if (object.migrateMsg !== undefined && object.migrateMsg !== null) {
      message.migrateMsg = object.migrateMsg;
    } else {
      message.migrateMsg = new Uint8Array();
    }
    return message;
  },
};

const baseMsgMigrateContractResponse: object = {};

export const MsgMigrateContractResponse = {
  encode(
    message: MsgMigrateContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMigrateContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMigrateContractResponse,
    } as MsgMigrateContractResponse;
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

  fromJSON(object: any): MsgMigrateContractResponse {
    const message = {
      ...baseMsgMigrateContractResponse,
    } as MsgMigrateContractResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: MsgMigrateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMigrateContractResponse>
  ): MsgMigrateContractResponse {
    const message = {
      ...baseMsgMigrateContractResponse,
    } as MsgMigrateContractResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpdateContractAdmin: object = {
  admin: "",
  newAdmin: "",
  contract: "",
};

export const MsgUpdateContractAdmin = {
  encode(
    message: MsgUpdateContractAdmin,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateContractAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateContractAdmin } as MsgUpdateContractAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateContractAdmin {
    const message = { ...baseMsgUpdateContractAdmin } as MsgUpdateContractAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = String(object.newAdmin);
    } else {
      message.newAdmin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateContractAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateContractAdmin>
  ): MsgUpdateContractAdmin {
    const message = { ...baseMsgUpdateContractAdmin } as MsgUpdateContractAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = object.newAdmin;
    } else {
      message.newAdmin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    } else {
      message.contract = "";
    }
    return message;
  },
};

const baseMsgUpdateContractAdminResponse: object = {};

export const MsgUpdateContractAdminResponse = {
  encode(
    _: MsgUpdateContractAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateContractAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateContractAdminResponse,
    } as MsgUpdateContractAdminResponse;
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

  fromJSON(_: any): MsgUpdateContractAdminResponse {
    const message = {
      ...baseMsgUpdateContractAdminResponse,
    } as MsgUpdateContractAdminResponse;
    return message;
  },

  toJSON(_: MsgUpdateContractAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateContractAdminResponse>
  ): MsgUpdateContractAdminResponse {
    const message = {
      ...baseMsgUpdateContractAdminResponse,
    } as MsgUpdateContractAdminResponse;
    return message;
  },
};

const baseMsgClearContractAdmin: object = { admin: "", contract: "" };

export const MsgClearContractAdmin = {
  encode(
    message: MsgClearContractAdmin,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClearContractAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClearContractAdmin } as MsgClearContractAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClearContractAdmin {
    const message = { ...baseMsgClearContractAdmin } as MsgClearContractAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    return message;
  },

  toJSON(message: MsgClearContractAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgClearContractAdmin>
  ): MsgClearContractAdmin {
    const message = { ...baseMsgClearContractAdmin } as MsgClearContractAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    } else {
      message.contract = "";
    }
    return message;
  },
};

const baseMsgClearContractAdminResponse: object = {};

export const MsgClearContractAdminResponse = {
  encode(
    _: MsgClearContractAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgClearContractAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClearContractAdminResponse,
    } as MsgClearContractAdminResponse;
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

  fromJSON(_: any): MsgClearContractAdminResponse {
    const message = {
      ...baseMsgClearContractAdminResponse,
    } as MsgClearContractAdminResponse;
    return message;
  },

  toJSON(_: MsgClearContractAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgClearContractAdminResponse>
  ): MsgClearContractAdminResponse {
    const message = {
      ...baseMsgClearContractAdminResponse,
    } as MsgClearContractAdminResponse;
    return message;
  },
};

/** Msg defines the oracle Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** MigrateCode to submit new version Wasm code to the system */
  MigrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  InstantiateContract(
    request: MsgInstantiateContract
  ): Promise<MsgInstantiateContractResponse>;
  /** Execute submits the given message data to a smart contract */
  ExecuteContract(
    request: MsgExecuteContract
  ): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  MigrateContract(
    request: MsgMigrateContract
  ): Promise<MsgMigrateContractResponse>;
  /** UpdateContractAdmin sets a new admin for a smart contract */
  UpdateContractAdmin(
    request: MsgUpdateContractAdmin
  ): Promise<MsgUpdateContractAdminResponse>;
  /** ClearContractAdmin remove admin flag from a smart contract */
  ClearContractAdmin(
    request: MsgClearContractAdmin
  ): Promise<MsgClearContractAdminResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "StoreCode",
      data
    );
    return promise.then((data) =>
      MsgStoreCodeResponse.decode(new Reader(data))
    );
  }

  MigrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse> {
    const data = MsgMigrateCode.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "MigrateCode",
      data
    );
    return promise.then((data) =>
      MsgMigrateCodeResponse.decode(new Reader(data))
    );
  }

  InstantiateContract(
    request: MsgInstantiateContract
  ): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "InstantiateContract",
      data
    );
    return promise.then((data) =>
      MsgInstantiateContractResponse.decode(new Reader(data))
    );
  }

  ExecuteContract(
    request: MsgExecuteContract
  ): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "ExecuteContract",
      data
    );
    return promise.then((data) =>
      MsgExecuteContractResponse.decode(new Reader(data))
    );
  }

  MigrateContract(
    request: MsgMigrateContract
  ): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "MigrateContract",
      data
    );
    return promise.then((data) =>
      MsgMigrateContractResponse.decode(new Reader(data))
    );
  }

  UpdateContractAdmin(
    request: MsgUpdateContractAdmin
  ): Promise<MsgUpdateContractAdminResponse> {
    const data = MsgUpdateContractAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "UpdateContractAdmin",
      data
    );
    return promise.then((data) =>
      MsgUpdateContractAdminResponse.decode(new Reader(data))
    );
  }

  ClearContractAdmin(
    request: MsgClearContractAdmin
  ): Promise<MsgClearContractAdminResponse> {
    const data = MsgClearContractAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.wasm.v1beta1.Msg",
      "ClearContractAdmin",
      data
    );
    return promise.then((data) =>
      MsgClearContractAdminResponse.decode(new Reader(data))
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
