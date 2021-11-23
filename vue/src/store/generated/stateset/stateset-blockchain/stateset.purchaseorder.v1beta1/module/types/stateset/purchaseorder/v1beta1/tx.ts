/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "stateset.purchaseorder.v1beta1";

/** State is an enum which refers to state of an ourchase order */
export enum State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  request = 1,
  completed = 2,
  canceled = 3,
  locked = 4,
  financed = 5,
  UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "invalid":
      return State.invalid;
    case 1:
    case "request":
      return State.request;
    case 2:
    case "completed":
      return State.completed;
    case 3:
    case "canceled":
      return State.canceled;
    case 4:
    case "locked":
      return State.locked;
    case 5:
    case "financed":
      return State.financed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.invalid:
      return "invalid";
    case State.request:
      return "request";
    case State.completed:
      return "completed";
    case State.canceled:
      return "canceled";
    case State.locked:
      return "locked";
    case State.financed:
      return "financed";
    default:
      return "UNKNOWN";
  }
}

export interface PurchaseOrder {
  creator: string;
  purchaseorderId: string;
  purchaseorderNumber: string;
  purchaseorderHash: string;
  purchaseorderStatus: string;
  description: string;
  purchaseDate: string;
  deliveryDate: string;
  subtotal: string;
  total: string;
  purchaser: string;
  vendor: string;
  fulfiller: string;
  financer: string;
}

export interface PurchaseOrderFilters {
  owner: string;
  state: string;
}

/** MsgCreatePurchaseOrderRequest is the Msg/CreatePurchaseOrder request type. */
export interface MsgCreatePurchaseOrderRequest {
  /**
   * creator is the address of the account that created the purchase order
   * class.
   */
  creator: string;
  purchaseorderId: string;
  purchaseorderNumber: string;
  purchaseorderName: string;
  purchaseorderStatus: string;
  description: string;
  purchaseDate: string;
  deliveryDate: string;
  subtotal: string;
  total: string;
  purchaser: string;
  vendor: string;
  fulfiller: string;
  financer: string;
}

/** MsgCreatePurchaseOrderResponse is the Msg/CreatePurchaseOrder response type. */
export interface MsgCreatePurchaseOrderResponse {
  /**
   * purchaseorder_id is the unique ID of the newly created purchase order
   * class.
   */
  purchaseorderId: string;
}

export interface MsgUpdatePurchaseOrderRequest {
  /**
   * creator is the address of the account that created the purchase order
   * class.
   */
  creator: string;
  purchaseorderId: string;
  purchaseorderNumber: string;
  purchaseorderHash: string;
  purchaseorderStatus: string;
  description: string;
  purchaseDate: string;
  deliveryDate: string;
  subtotal: string;
  total: string;
  purchaser: string;
  vendor: string;
  fulfiller: string;
  financer: string;
}

export interface MsgUpdatePurchaseOrderResponse {
  /**
   * purchaseorder_id is the unique ID of the newly created purchase order
   * class.
   */
  purchaseorderId: string;
}

export interface MsgDeletePurchaseOrderRequest {
  creator: string;
  purchaseorderId: number;
}

export interface MsgDeletePurchaseOrderResponse {
  /**
   * purchaseorder_id is the unique ID of the newly created purchase order
   * class.
   */
  purchaseorderId: string;
}

/**
 * MsgCompletePurchaseOrderRequest is the Msg/CompletePurchaseOrder request
 * type.
 */
export interface MsgCompletePurchaseOrderRequest {
  /** sender is the address of the sender of the transaction. */
  creator: string;
  purchaseorderId: string;
}

/**
 * MsgCompletePurchaseOrderResponse is the Msg/CompletePurchaseOrderResponse
 * response type.
 */
export interface MsgCompletePurchaseOrderResponse {
  /**
   * purchaseorder_id is the unique ID of the newly created purchase order
   * class.
   */
  purchaseorderId: string;
}

/** MsgCancelPurchaseOrderRequest is the Msg/CancelPurchaseOrder request type. */
export interface MsgCancelPurchaseOrderRequest {
  /** sender is the address of the sender of the transaction. */
  creator: string;
  purchaseorderId: string;
}

/** MsgCancelPurchaseOrderResponse is the Msg/CancelPurchaseOrder response type. */
export interface MsgCancelPurchaseOrderResponse {
  /**
   * purchaseorder_id is the unique ID of the newly created purchase order
   * class.
   */
  purchaseorderId: string;
}

/** MsgLockPurchaseOrder is the Msg/FinancePurchaseOrder request type. */
export interface MsgLockPurchaseOrderRequest {
  /** sender is the address of the sender of the transaction. */
  creator: string;
  purchaseorderId: string;
}

/**
 * MsgFinancePurchaseOrderResponse is the Msg/FinancePurchaseOrder response
 * type.
 */
export interface MsgLockPurchaseOrderResponse {}

/** MsgFinancePurchaseOrder is the Msg/FinancePurchaseOrder request type. */
export interface MsgFinancePurchaseOrderRequest {
  /** sender is the address of the sender of the transaction. */
  creator: string;
  purchaseorderId: string;
}

/**
 * MsgFinancePurchaseOrderResponse is the Msg/FinancePurchaseOrder response
 * type.
 */
export interface MsgFinancePurchaseOrderResponse {}

const basePurchaseOrder: object = {
  creator: "",
  purchaseorderId: "",
  purchaseorderNumber: "",
  purchaseorderHash: "",
  purchaseorderStatus: "",
  description: "",
  purchaseDate: "",
  deliveryDate: "",
  subtotal: "",
  total: "",
  purchaser: "",
  vendor: "",
  fulfiller: "",
  financer: "",
};

export const PurchaseOrder = {
  encode(message: PurchaseOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    if (message.purchaseorderNumber !== "") {
      writer.uint32(26).string(message.purchaseorderNumber);
    }
    if (message.purchaseorderHash !== "") {
      writer.uint32(34).string(message.purchaseorderHash);
    }
    if (message.purchaseorderStatus !== "") {
      writer.uint32(42).string(message.purchaseorderStatus);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.purchaseDate !== "") {
      writer.uint32(58).string(message.purchaseDate);
    }
    if (message.deliveryDate !== "") {
      writer.uint32(66).string(message.deliveryDate);
    }
    if (message.subtotal !== "") {
      writer.uint32(74).string(message.subtotal);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    if (message.purchaser !== "") {
      writer.uint32(90).string(message.purchaser);
    }
    if (message.vendor !== "") {
      writer.uint32(98).string(message.vendor);
    }
    if (message.fulfiller !== "") {
      writer.uint32(106).string(message.fulfiller);
    }
    if (message.financer !== "") {
      writer.uint32(114).string(message.financer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PurchaseOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePurchaseOrder } as PurchaseOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        case 3:
          message.purchaseorderNumber = reader.string();
          break;
        case 4:
          message.purchaseorderHash = reader.string();
          break;
        case 5:
          message.purchaseorderStatus = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.purchaseDate = reader.string();
          break;
        case 8:
          message.deliveryDate = reader.string();
          break;
        case 9:
          message.subtotal = reader.string();
          break;
        case 10:
          message.total = reader.string();
          break;
        case 11:
          message.purchaser = reader.string();
          break;
        case 12:
          message.vendor = reader.string();
          break;
        case 13:
          message.fulfiller = reader.string();
          break;
        case 14:
          message.financer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PurchaseOrder {
    const message = { ...basePurchaseOrder } as PurchaseOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = String(object.purchaseorderId);
    } else {
      message.purchaseorderId = "";
    }
    if (
      object.purchaseorderNumber !== undefined &&
      object.purchaseorderNumber !== null
    ) {
      message.purchaseorderNumber = String(object.purchaseorderNumber);
    } else {
      message.purchaseorderNumber = "";
    }
    if (
      object.purchaseorderHash !== undefined &&
      object.purchaseorderHash !== null
    ) {
      message.purchaseorderHash = String(object.purchaseorderHash);
    } else {
      message.purchaseorderHash = "";
    }
    if (
      object.purchaseorderStatus !== undefined &&
      object.purchaseorderStatus !== null
    ) {
      message.purchaseorderStatus = String(object.purchaseorderStatus);
    } else {
      message.purchaseorderStatus = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
      message.purchaseDate = String(object.purchaseDate);
    } else {
      message.purchaseDate = "";
    }
    if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
      message.deliveryDate = String(object.deliveryDate);
    } else {
      message.deliveryDate = "";
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = String(object.subtotal);
    } else {
      message.subtotal = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = String(object.total);
    } else {
      message.total = "";
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = String(object.purchaser);
    } else {
      message.purchaser = "";
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = String(object.vendor);
    } else {
      message.vendor = "";
    }
    if (object.fulfiller !== undefined && object.fulfiller !== null) {
      message.fulfiller = String(object.fulfiller);
    } else {
      message.fulfiller = "";
    }
    if (object.financer !== undefined && object.financer !== null) {
      message.financer = String(object.financer);
    } else {
      message.financer = "";
    }
    return message;
  },

  toJSON(message: PurchaseOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    message.purchaseorderNumber !== undefined &&
      (obj.purchaseorderNumber = message.purchaseorderNumber);
    message.purchaseorderHash !== undefined &&
      (obj.purchaseorderHash = message.purchaseorderHash);
    message.purchaseorderStatus !== undefined &&
      (obj.purchaseorderStatus = message.purchaseorderStatus);
    message.description !== undefined &&
      (obj.description = message.description);
    message.purchaseDate !== undefined &&
      (obj.purchaseDate = message.purchaseDate);
    message.deliveryDate !== undefined &&
      (obj.deliveryDate = message.deliveryDate);
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.total !== undefined && (obj.total = message.total);
    message.purchaser !== undefined && (obj.purchaser = message.purchaser);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);
    message.financer !== undefined && (obj.financer = message.financer);
    return obj;
  },

  fromPartial(object: DeepPartial<PurchaseOrder>): PurchaseOrder {
    const message = { ...basePurchaseOrder } as PurchaseOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = object.purchaseorderId;
    } else {
      message.purchaseorderId = "";
    }
    if (
      object.purchaseorderNumber !== undefined &&
      object.purchaseorderNumber !== null
    ) {
      message.purchaseorderNumber = object.purchaseorderNumber;
    } else {
      message.purchaseorderNumber = "";
    }
    if (
      object.purchaseorderHash !== undefined &&
      object.purchaseorderHash !== null
    ) {
      message.purchaseorderHash = object.purchaseorderHash;
    } else {
      message.purchaseorderHash = "";
    }
    if (
      object.purchaseorderStatus !== undefined &&
      object.purchaseorderStatus !== null
    ) {
      message.purchaseorderStatus = object.purchaseorderStatus;
    } else {
      message.purchaseorderStatus = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
      message.purchaseDate = object.purchaseDate;
    } else {
      message.purchaseDate = "";
    }
    if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
      message.deliveryDate = object.deliveryDate;
    } else {
      message.deliveryDate = "";
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = object.subtotal;
    } else {
      message.subtotal = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = "";
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    } else {
      message.purchaser = "";
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = object.vendor;
    } else {
      message.vendor = "";
    }
    if (object.fulfiller !== undefined && object.fulfiller !== null) {
      message.fulfiller = object.fulfiller;
    } else {
      message.fulfiller = "";
    }
    if (object.financer !== undefined && object.financer !== null) {
      message.financer = object.financer;
    } else {
      message.financer = "";
    }
    return message;
  },
};

const basePurchaseOrderFilters: object = { owner: "", state: "" };

export const PurchaseOrderFilters = {
  encode(
    message: PurchaseOrderFilters,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PurchaseOrderFilters {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePurchaseOrderFilters } as PurchaseOrderFilters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PurchaseOrderFilters {
    const message = { ...basePurchaseOrderFilters } as PurchaseOrderFilters;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: PurchaseOrderFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<PurchaseOrderFilters>): PurchaseOrderFilters {
    const message = { ...basePurchaseOrderFilters } as PurchaseOrderFilters;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    return message;
  },
};

const baseMsgCreatePurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: "",
  purchaseorderNumber: "",
  purchaseorderName: "",
  purchaseorderStatus: "",
  description: "",
  purchaseDate: "",
  deliveryDate: "",
  subtotal: "",
  total: "",
  purchaser: "",
  vendor: "",
  fulfiller: "",
  financer: "",
};

export const MsgCreatePurchaseOrderRequest = {
  encode(
    message: MsgCreatePurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    if (message.purchaseorderNumber !== "") {
      writer.uint32(26).string(message.purchaseorderNumber);
    }
    if (message.purchaseorderName !== "") {
      writer.uint32(34).string(message.purchaseorderName);
    }
    if (message.purchaseorderStatus !== "") {
      writer.uint32(42).string(message.purchaseorderStatus);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.purchaseDate !== "") {
      writer.uint32(58).string(message.purchaseDate);
    }
    if (message.deliveryDate !== "") {
      writer.uint32(66).string(message.deliveryDate);
    }
    if (message.subtotal !== "") {
      writer.uint32(74).string(message.subtotal);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    if (message.purchaser !== "") {
      writer.uint32(90).string(message.purchaser);
    }
    if (message.vendor !== "") {
      writer.uint32(98).string(message.vendor);
    }
    if (message.fulfiller !== "") {
      writer.uint32(106).string(message.fulfiller);
    }
    if (message.financer !== "") {
      writer.uint32(114).string(message.financer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePurchaseOrderRequest,
    } as MsgCreatePurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        case 3:
          message.purchaseorderNumber = reader.string();
          break;
        case 4:
          message.purchaseorderName = reader.string();
          break;
        case 5:
          message.purchaseorderStatus = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.purchaseDate = reader.string();
          break;
        case 8:
          message.deliveryDate = reader.string();
          break;
        case 9:
          message.subtotal = reader.string();
          break;
        case 10:
          message.total = reader.string();
          break;
        case 11:
          message.purchaser = reader.string();
          break;
        case 12:
          message.vendor = reader.string();
          break;
        case 13:
          message.fulfiller = reader.string();
          break;
        case 14:
          message.financer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePurchaseOrderRequest {
    const message = {
      ...baseMsgCreatePurchaseOrderRequest,
    } as MsgCreatePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = String(object.purchaseorderId);
    } else {
      message.purchaseorderId = "";
    }
    if (
      object.purchaseorderNumber !== undefined &&
      object.purchaseorderNumber !== null
    ) {
      message.purchaseorderNumber = String(object.purchaseorderNumber);
    } else {
      message.purchaseorderNumber = "";
    }
    if (
      object.purchaseorderName !== undefined &&
      object.purchaseorderName !== null
    ) {
      message.purchaseorderName = String(object.purchaseorderName);
    } else {
      message.purchaseorderName = "";
    }
    if (
      object.purchaseorderStatus !== undefined &&
      object.purchaseorderStatus !== null
    ) {
      message.purchaseorderStatus = String(object.purchaseorderStatus);
    } else {
      message.purchaseorderStatus = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
      message.purchaseDate = String(object.purchaseDate);
    } else {
      message.purchaseDate = "";
    }
    if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
      message.deliveryDate = String(object.deliveryDate);
    } else {
      message.deliveryDate = "";
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = String(object.subtotal);
    } else {
      message.subtotal = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = String(object.total);
    } else {
      message.total = "";
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = String(object.purchaser);
    } else {
      message.purchaser = "";
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = String(object.vendor);
    } else {
      message.vendor = "";
    }
    if (object.fulfiller !== undefined && object.fulfiller !== null) {
      message.fulfiller = String(object.fulfiller);
    } else {
      message.fulfiller = "";
    }
    if (object.financer !== undefined && object.financer !== null) {
      message.financer = String(object.financer);
    } else {
      message.financer = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    message.purchaseorderNumber !== undefined &&
      (obj.purchaseorderNumber = message.purchaseorderNumber);
    message.purchaseorderName !== undefined &&
      (obj.purchaseorderName = message.purchaseorderName);
    message.purchaseorderStatus !== undefined &&
      (obj.purchaseorderStatus = message.purchaseorderStatus);
    message.description !== undefined &&
      (obj.description = message.description);
    message.purchaseDate !== undefined &&
      (obj.purchaseDate = message.purchaseDate);
    message.deliveryDate !== undefined &&
      (obj.deliveryDate = message.deliveryDate);
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.total !== undefined && (obj.total = message.total);
    message.purchaser !== undefined && (obj.purchaser = message.purchaser);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);
    message.financer !== undefined && (obj.financer = message.financer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePurchaseOrderRequest>
  ): MsgCreatePurchaseOrderRequest {
    const message = {
      ...baseMsgCreatePurchaseOrderRequest,
    } as MsgCreatePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = object.purchaseorderId;
    } else {
      message.purchaseorderId = "";
    }
    if (
      object.purchaseorderNumber !== undefined &&
      object.purchaseorderNumber !== null
    ) {
      message.purchaseorderNumber = object.purchaseorderNumber;
    } else {
      message.purchaseorderNumber = "";
    }
    if (
      object.purchaseorderName !== undefined &&
      object.purchaseorderName !== null
    ) {
      message.purchaseorderName = object.purchaseorderName;
    } else {
      message.purchaseorderName = "";
    }
    if (
      object.purchaseorderStatus !== undefined &&
      object.purchaseorderStatus !== null
    ) {
      message.purchaseorderStatus = object.purchaseorderStatus;
    } else {
      message.purchaseorderStatus = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
      message.purchaseDate = object.purchaseDate;
    } else {
      message.purchaseDate = "";
    }
    if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
      message.deliveryDate = object.deliveryDate;
    } else {
      message.deliveryDate = "";
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = object.subtotal;
    } else {
      message.subtotal = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = "";
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    } else {
      message.purchaser = "";
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = object.vendor;
    } else {
      message.vendor = "";
    }
    if (object.fulfiller !== undefined && object.fulfiller !== null) {
      message.fulfiller = object.fulfiller;
    } else {
      message.fulfiller = "";
    }
    if (object.financer !== undefined && object.financer !== null) {
      message.financer = object.financer;
    } else {
      message.financer = "";
    }
    return message;
  },
};

const baseMsgCreatePurchaseOrderResponse: object = { purchaseorderId: "" };

export const MsgCreatePurchaseOrderResponse = {
  encode(
    message: MsgCreatePurchaseOrderResponse,
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
  ): MsgCreatePurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePurchaseOrderResponse,
    } as MsgCreatePurchaseOrderResponse;
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

  fromJSON(object: any): MsgCreatePurchaseOrderResponse {
    const message = {
      ...baseMsgCreatePurchaseOrderResponse,
    } as MsgCreatePurchaseOrderResponse;
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

  toJSON(message: MsgCreatePurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePurchaseOrderResponse>
  ): MsgCreatePurchaseOrderResponse {
    const message = {
      ...baseMsgCreatePurchaseOrderResponse,
    } as MsgCreatePurchaseOrderResponse;
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

const baseMsgUpdatePurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: "",
  purchaseorderNumber: "",
  purchaseorderHash: "",
  purchaseorderStatus: "",
  description: "",
  purchaseDate: "",
  deliveryDate: "",
  subtotal: "",
  total: "",
  purchaser: "",
  vendor: "",
  fulfiller: "",
  financer: "",
};

export const MsgUpdatePurchaseOrderRequest = {
  encode(
    message: MsgUpdatePurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    if (message.purchaseorderNumber !== "") {
      writer.uint32(26).string(message.purchaseorderNumber);
    }
    if (message.purchaseorderHash !== "") {
      writer.uint32(34).string(message.purchaseorderHash);
    }
    if (message.purchaseorderStatus !== "") {
      writer.uint32(42).string(message.purchaseorderStatus);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.purchaseDate !== "") {
      writer.uint32(58).string(message.purchaseDate);
    }
    if (message.deliveryDate !== "") {
      writer.uint32(66).string(message.deliveryDate);
    }
    if (message.subtotal !== "") {
      writer.uint32(74).string(message.subtotal);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    if (message.purchaser !== "") {
      writer.uint32(90).string(message.purchaser);
    }
    if (message.vendor !== "") {
      writer.uint32(98).string(message.vendor);
    }
    if (message.fulfiller !== "") {
      writer.uint32(106).string(message.fulfiller);
    }
    if (message.financer !== "") {
      writer.uint32(114).string(message.financer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePurchaseOrderRequest,
    } as MsgUpdatePurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        case 3:
          message.purchaseorderNumber = reader.string();
          break;
        case 4:
          message.purchaseorderHash = reader.string();
          break;
        case 5:
          message.purchaseorderStatus = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.purchaseDate = reader.string();
          break;
        case 8:
          message.deliveryDate = reader.string();
          break;
        case 9:
          message.subtotal = reader.string();
          break;
        case 10:
          message.total = reader.string();
          break;
        case 11:
          message.purchaser = reader.string();
          break;
        case 12:
          message.vendor = reader.string();
          break;
        case 13:
          message.fulfiller = reader.string();
          break;
        case 14:
          message.financer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePurchaseOrderRequest {
    const message = {
      ...baseMsgUpdatePurchaseOrderRequest,
    } as MsgUpdatePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = String(object.purchaseorderId);
    } else {
      message.purchaseorderId = "";
    }
    if (
      object.purchaseorderNumber !== undefined &&
      object.purchaseorderNumber !== null
    ) {
      message.purchaseorderNumber = String(object.purchaseorderNumber);
    } else {
      message.purchaseorderNumber = "";
    }
    if (
      object.purchaseorderHash !== undefined &&
      object.purchaseorderHash !== null
    ) {
      message.purchaseorderHash = String(object.purchaseorderHash);
    } else {
      message.purchaseorderHash = "";
    }
    if (
      object.purchaseorderStatus !== undefined &&
      object.purchaseorderStatus !== null
    ) {
      message.purchaseorderStatus = String(object.purchaseorderStatus);
    } else {
      message.purchaseorderStatus = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
      message.purchaseDate = String(object.purchaseDate);
    } else {
      message.purchaseDate = "";
    }
    if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
      message.deliveryDate = String(object.deliveryDate);
    } else {
      message.deliveryDate = "";
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = String(object.subtotal);
    } else {
      message.subtotal = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = String(object.total);
    } else {
      message.total = "";
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = String(object.purchaser);
    } else {
      message.purchaser = "";
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = String(object.vendor);
    } else {
      message.vendor = "";
    }
    if (object.fulfiller !== undefined && object.fulfiller !== null) {
      message.fulfiller = String(object.fulfiller);
    } else {
      message.fulfiller = "";
    }
    if (object.financer !== undefined && object.financer !== null) {
      message.financer = String(object.financer);
    } else {
      message.financer = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    message.purchaseorderNumber !== undefined &&
      (obj.purchaseorderNumber = message.purchaseorderNumber);
    message.purchaseorderHash !== undefined &&
      (obj.purchaseorderHash = message.purchaseorderHash);
    message.purchaseorderStatus !== undefined &&
      (obj.purchaseorderStatus = message.purchaseorderStatus);
    message.description !== undefined &&
      (obj.description = message.description);
    message.purchaseDate !== undefined &&
      (obj.purchaseDate = message.purchaseDate);
    message.deliveryDate !== undefined &&
      (obj.deliveryDate = message.deliveryDate);
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.total !== undefined && (obj.total = message.total);
    message.purchaser !== undefined && (obj.purchaser = message.purchaser);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);
    message.financer !== undefined && (obj.financer = message.financer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePurchaseOrderRequest>
  ): MsgUpdatePurchaseOrderRequest {
    const message = {
      ...baseMsgUpdatePurchaseOrderRequest,
    } as MsgUpdatePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = object.purchaseorderId;
    } else {
      message.purchaseorderId = "";
    }
    if (
      object.purchaseorderNumber !== undefined &&
      object.purchaseorderNumber !== null
    ) {
      message.purchaseorderNumber = object.purchaseorderNumber;
    } else {
      message.purchaseorderNumber = "";
    }
    if (
      object.purchaseorderHash !== undefined &&
      object.purchaseorderHash !== null
    ) {
      message.purchaseorderHash = object.purchaseorderHash;
    } else {
      message.purchaseorderHash = "";
    }
    if (
      object.purchaseorderStatus !== undefined &&
      object.purchaseorderStatus !== null
    ) {
      message.purchaseorderStatus = object.purchaseorderStatus;
    } else {
      message.purchaseorderStatus = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.purchaseDate !== undefined && object.purchaseDate !== null) {
      message.purchaseDate = object.purchaseDate;
    } else {
      message.purchaseDate = "";
    }
    if (object.deliveryDate !== undefined && object.deliveryDate !== null) {
      message.deliveryDate = object.deliveryDate;
    } else {
      message.deliveryDate = "";
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = object.subtotal;
    } else {
      message.subtotal = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = "";
    }
    if (object.purchaser !== undefined && object.purchaser !== null) {
      message.purchaser = object.purchaser;
    } else {
      message.purchaser = "";
    }
    if (object.vendor !== undefined && object.vendor !== null) {
      message.vendor = object.vendor;
    } else {
      message.vendor = "";
    }
    if (object.fulfiller !== undefined && object.fulfiller !== null) {
      message.fulfiller = object.fulfiller;
    } else {
      message.fulfiller = "";
    }
    if (object.financer !== undefined && object.financer !== null) {
      message.financer = object.financer;
    } else {
      message.financer = "";
    }
    return message;
  },
};

const baseMsgUpdatePurchaseOrderResponse: object = { purchaseorderId: "" };

export const MsgUpdatePurchaseOrderResponse = {
  encode(
    message: MsgUpdatePurchaseOrderResponse,
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
  ): MsgUpdatePurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePurchaseOrderResponse,
    } as MsgUpdatePurchaseOrderResponse;
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

  fromJSON(object: any): MsgUpdatePurchaseOrderResponse {
    const message = {
      ...baseMsgUpdatePurchaseOrderResponse,
    } as MsgUpdatePurchaseOrderResponse;
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

  toJSON(message: MsgUpdatePurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePurchaseOrderResponse>
  ): MsgUpdatePurchaseOrderResponse {
    const message = {
      ...baseMsgUpdatePurchaseOrderResponse,
    } as MsgUpdatePurchaseOrderResponse;
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

const baseMsgDeletePurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: 0,
};

export const MsgDeletePurchaseOrderRequest = {
  encode(
    message: MsgDeletePurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== 0) {
      writer.uint32(16).uint64(message.purchaseorderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePurchaseOrderRequest,
    } as MsgDeletePurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePurchaseOrderRequest {
    const message = {
      ...baseMsgDeletePurchaseOrderRequest,
    } as MsgDeletePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = Number(object.purchaseorderId);
    } else {
      message.purchaseorderId = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeletePurchaseOrderRequest>
  ): MsgDeletePurchaseOrderRequest {
    const message = {
      ...baseMsgDeletePurchaseOrderRequest,
    } as MsgDeletePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.purchaseorderId !== undefined &&
      object.purchaseorderId !== null
    ) {
      message.purchaseorderId = object.purchaseorderId;
    } else {
      message.purchaseorderId = 0;
    }
    return message;
  },
};

const baseMsgDeletePurchaseOrderResponse: object = { purchaseorderId: "" };

export const MsgDeletePurchaseOrderResponse = {
  encode(
    message: MsgDeletePurchaseOrderResponse,
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
  ): MsgDeletePurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePurchaseOrderResponse,
    } as MsgDeletePurchaseOrderResponse;
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

  fromJSON(object: any): MsgDeletePurchaseOrderResponse {
    const message = {
      ...baseMsgDeletePurchaseOrderResponse,
    } as MsgDeletePurchaseOrderResponse;
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

  toJSON(message: MsgDeletePurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeletePurchaseOrderResponse>
  ): MsgDeletePurchaseOrderResponse {
    const message = {
      ...baseMsgDeletePurchaseOrderResponse,
    } as MsgDeletePurchaseOrderResponse;
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

const baseMsgCompletePurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: "",
};

export const MsgCompletePurchaseOrderRequest = {
  encode(
    message: MsgCompletePurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompletePurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompletePurchaseOrderRequest,
    } as MsgCompletePurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCompletePurchaseOrderRequest {
    const message = {
      ...baseMsgCompletePurchaseOrderRequest,
    } as MsgCompletePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgCompletePurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCompletePurchaseOrderRequest>
  ): MsgCompletePurchaseOrderRequest {
    const message = {
      ...baseMsgCompletePurchaseOrderRequest,
    } as MsgCompletePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgCompletePurchaseOrderResponse: object = { purchaseorderId: "" };

export const MsgCompletePurchaseOrderResponse = {
  encode(
    message: MsgCompletePurchaseOrderResponse,
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
  ): MsgCompletePurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompletePurchaseOrderResponse,
    } as MsgCompletePurchaseOrderResponse;
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

  fromJSON(object: any): MsgCompletePurchaseOrderResponse {
    const message = {
      ...baseMsgCompletePurchaseOrderResponse,
    } as MsgCompletePurchaseOrderResponse;
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

  toJSON(message: MsgCompletePurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCompletePurchaseOrderResponse>
  ): MsgCompletePurchaseOrderResponse {
    const message = {
      ...baseMsgCompletePurchaseOrderResponse,
    } as MsgCompletePurchaseOrderResponse;
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

const baseMsgCancelPurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: "",
};

export const MsgCancelPurchaseOrderRequest = {
  encode(
    message: MsgCancelPurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelPurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelPurchaseOrderRequest,
    } as MsgCancelPurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelPurchaseOrderRequest {
    const message = {
      ...baseMsgCancelPurchaseOrderRequest,
    } as MsgCancelPurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgCancelPurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelPurchaseOrderRequest>
  ): MsgCancelPurchaseOrderRequest {
    const message = {
      ...baseMsgCancelPurchaseOrderRequest,
    } as MsgCancelPurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgCancelPurchaseOrderResponse: object = { purchaseorderId: "" };

export const MsgCancelPurchaseOrderResponse = {
  encode(
    message: MsgCancelPurchaseOrderResponse,
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
  ): MsgCancelPurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelPurchaseOrderResponse,
    } as MsgCancelPurchaseOrderResponse;
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

  fromJSON(object: any): MsgCancelPurchaseOrderResponse {
    const message = {
      ...baseMsgCancelPurchaseOrderResponse,
    } as MsgCancelPurchaseOrderResponse;
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

  toJSON(message: MsgCancelPurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelPurchaseOrderResponse>
  ): MsgCancelPurchaseOrderResponse {
    const message = {
      ...baseMsgCancelPurchaseOrderResponse,
    } as MsgCancelPurchaseOrderResponse;
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

const baseMsgLockPurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: "",
};

export const MsgLockPurchaseOrderRequest = {
  encode(
    message: MsgLockPurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLockPurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLockPurchaseOrderRequest,
    } as MsgLockPurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLockPurchaseOrderRequest {
    const message = {
      ...baseMsgLockPurchaseOrderRequest,
    } as MsgLockPurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgLockPurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLockPurchaseOrderRequest>
  ): MsgLockPurchaseOrderRequest {
    const message = {
      ...baseMsgLockPurchaseOrderRequest,
    } as MsgLockPurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgLockPurchaseOrderResponse: object = {};

export const MsgLockPurchaseOrderResponse = {
  encode(
    _: MsgLockPurchaseOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLockPurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLockPurchaseOrderResponse,
    } as MsgLockPurchaseOrderResponse;
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

  fromJSON(_: any): MsgLockPurchaseOrderResponse {
    const message = {
      ...baseMsgLockPurchaseOrderResponse,
    } as MsgLockPurchaseOrderResponse;
    return message;
  },

  toJSON(_: MsgLockPurchaseOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLockPurchaseOrderResponse>
  ): MsgLockPurchaseOrderResponse {
    const message = {
      ...baseMsgLockPurchaseOrderResponse,
    } as MsgLockPurchaseOrderResponse;
    return message;
  },
};

const baseMsgFinancePurchaseOrderRequest: object = {
  creator: "",
  purchaseorderId: "",
};

export const MsgFinancePurchaseOrderRequest = {
  encode(
    message: MsgFinancePurchaseOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.purchaseorderId !== "") {
      writer.uint32(18).string(message.purchaseorderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgFinancePurchaseOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFinancePurchaseOrderRequest,
    } as MsgFinancePurchaseOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.purchaseorderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFinancePurchaseOrderRequest {
    const message = {
      ...baseMsgFinancePurchaseOrderRequest,
    } as MsgFinancePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgFinancePurchaseOrderRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.purchaseorderId !== undefined &&
      (obj.purchaseorderId = message.purchaseorderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgFinancePurchaseOrderRequest>
  ): MsgFinancePurchaseOrderRequest {
    const message = {
      ...baseMsgFinancePurchaseOrderRequest,
    } as MsgFinancePurchaseOrderRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgFinancePurchaseOrderResponse: object = {};

export const MsgFinancePurchaseOrderResponse = {
  encode(
    _: MsgFinancePurchaseOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgFinancePurchaseOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFinancePurchaseOrderResponse,
    } as MsgFinancePurchaseOrderResponse;
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

  fromJSON(_: any): MsgFinancePurchaseOrderResponse {
    const message = {
      ...baseMsgFinancePurchaseOrderResponse,
    } as MsgFinancePurchaseOrderResponse;
    return message;
  },

  toJSON(_: MsgFinancePurchaseOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgFinancePurchaseOrderResponse>
  ): MsgFinancePurchaseOrderResponse {
    const message = {
      ...baseMsgFinancePurchaseOrderResponse,
    } as MsgFinancePurchaseOrderResponse;
    return message;
  },
};

/** Msg is the stateset.purchaseorder.v1beta1 Msg service */
export interface Msg {
  /** Create defines a method to create a new purchase order. */
  Create(
    request: MsgCreatePurchaseOrderRequest
  ): Promise<MsgCreatePurchaseOrderResponse>;
  /** Update defines a method to update a purchase order. */
  Update(
    request: MsgUpdatePurchaseOrderRequest
  ): Promise<MsgUpdatePurchaseOrderResponse>;
  /** Delete defines a method to delete a purchase order. */
  Delete(
    request: MsgDeletePurchaseOrderRequest
  ): Promise<MsgDeletePurchaseOrderResponse>;
  /** Complete defines a method to complete a purchase order */
  Complete(
    request: MsgCompletePurchaseOrderRequest
  ): Promise<MsgCompletePurchaseOrderResponse>;
  /** Cancel defines a method to cancel a purchase order */
  Cancel(
    request: MsgCancelPurchaseOrderRequest
  ): Promise<MsgCancelPurchaseOrderResponse>;
  /** Lock defines a method to lock a purchase order */
  Lock(
    request: MsgLockPurchaseOrderRequest
  ): Promise<MsgLockPurchaseOrderResponse>;
  /** Finance defines a method to finance a purchase order */
  Finance(
    request: MsgFinancePurchaseOrderRequest
  ): Promise<MsgFinancePurchaseOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Create(
    request: MsgCreatePurchaseOrderRequest
  ): Promise<MsgCreatePurchaseOrderResponse> {
    const data = MsgCreatePurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Create",
      data
    );
    return promise.then((data) =>
      MsgCreatePurchaseOrderResponse.decode(new Reader(data))
    );
  }

  Update(
    request: MsgUpdatePurchaseOrderRequest
  ): Promise<MsgUpdatePurchaseOrderResponse> {
    const data = MsgUpdatePurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Update",
      data
    );
    return promise.then((data) =>
      MsgUpdatePurchaseOrderResponse.decode(new Reader(data))
    );
  }

  Delete(
    request: MsgDeletePurchaseOrderRequest
  ): Promise<MsgDeletePurchaseOrderResponse> {
    const data = MsgDeletePurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Delete",
      data
    );
    return promise.then((data) =>
      MsgDeletePurchaseOrderResponse.decode(new Reader(data))
    );
  }

  Complete(
    request: MsgCompletePurchaseOrderRequest
  ): Promise<MsgCompletePurchaseOrderResponse> {
    const data = MsgCompletePurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Complete",
      data
    );
    return promise.then((data) =>
      MsgCompletePurchaseOrderResponse.decode(new Reader(data))
    );
  }

  Cancel(
    request: MsgCancelPurchaseOrderRequest
  ): Promise<MsgCancelPurchaseOrderResponse> {
    const data = MsgCancelPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Cancel",
      data
    );
    return promise.then((data) =>
      MsgCancelPurchaseOrderResponse.decode(new Reader(data))
    );
  }

  Lock(
    request: MsgLockPurchaseOrderRequest
  ): Promise<MsgLockPurchaseOrderResponse> {
    const data = MsgLockPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Lock",
      data
    );
    return promise.then((data) =>
      MsgLockPurchaseOrderResponse.decode(new Reader(data))
    );
  }

  Finance(
    request: MsgFinancePurchaseOrderRequest
  ): Promise<MsgFinancePurchaseOrderResponse> {
    const data = MsgFinancePurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.purchaseorder.v1beta1.Msg",
      "Finance",
      data
    );
    return promise.then((data) =>
      MsgFinancePurchaseOrderResponse.decode(new Reader(data))
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
