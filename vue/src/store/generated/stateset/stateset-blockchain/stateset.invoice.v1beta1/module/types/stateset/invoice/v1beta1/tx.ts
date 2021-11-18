/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "stateset.invoice.v1beta1";

/** State is an enum which refers to state of an ourchase order */
export enum State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  request = 1,
  paid = 2,
  canceled = 3,
  factored = 4,
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
    case "paid":
      return State.paid;
    case 3:
    case "canceled":
      return State.canceled;
    case 4:
    case "factored":
      return State.factored;
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
    case State.paid:
      return "paid";
    case State.canceled:
      return "canceled";
    case State.factored:
      return "factored";
    default:
      return "UNKNOWN";
  }
}

export interface Invoice {
  creator: string;
  invoiceId: string;
  invoiceNumber: string;
  invoiceName: string;
  billingReason: string;
  amountDue: string;
  amountPaid: string;
  amountRemaining: string;
  subtotal: string;
  total: string;
  party: string;
  counterparty: string;
  factor: string;
  dueDate: string;
  periodStartDate: string;
  periodEndDate: string;
}

/** MsgCreateInvoiceRequest is the Msg/CreateInvoice request type. */
export interface MsgCreateInvoiceRequest {
  /** sender is the address of the sender of the transaction. */
  creator: string;
  invoiceId: string;
  invoiceNumber: string;
  invoiceName: string;
  billingReason: string;
  amountDue: string;
  amountPaid: string;
  amountRemaining: string;
  subtotal: string;
  total: string;
  party: string;
  counterparty: string;
  factor: string;
  dueDate: string;
  periodStartDate: string;
  periodEndDate: string;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgCreateInvoiceResponse {}

/** MsgCreateInvoiceRequest is the Msg/CreateInvoice request type. */
export interface MsgUpdateInvoiceRequest {
  creator: string;
  invoiceId: string;
  invoiceNumber: string;
  invoiceName: string;
  billingReason: string;
  amountDue: string;
  amountPaid: string;
  amountRemaining: string;
  subtotal: string;
  total: string;
  party: string;
  counterparty: string;
  factor: string;
  dueDate: string;
  periodStartDate: string;
  periodEndDate: string;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgUpdateInvoiceResponse {}

/** MsgActivateInvoiceRequest is the Msg/ActivateInvoice request type. */
export interface MsgCancelInvoiceRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  invoiceId: string;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgCancelInvoiceResponse {}

/** MsgActivateInvoiceRequest is the Msg/ActivateInvoice request type. */
export interface MsgDeleteInvoiceRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  invoiceId: string;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgDeleteInvoiceResponse {}

/** MsgActivateInvoiceRequest is the Msg/ActivateInvoice request type. */
export interface MsgCompleteInvoiceRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  invoiceId: string;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgCompleteInvoiceResponse {}

export interface MsgFactorInvoiceRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  invoiceId: string;
}

export interface MsgFactorInvoiceResponse {}

const baseInvoice: object = {
  creator: "",
  invoiceId: "",
  invoiceNumber: "",
  invoiceName: "",
  billingReason: "",
  amountDue: "",
  amountPaid: "",
  amountRemaining: "",
  subtotal: "",
  total: "",
  party: "",
  counterparty: "",
  factor: "",
  dueDate: "",
  periodStartDate: "",
  periodEndDate: "",
};

export const Invoice = {
  encode(message: Invoice, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    if (message.invoiceNumber !== "") {
      writer.uint32(26).string(message.invoiceNumber);
    }
    if (message.invoiceName !== "") {
      writer.uint32(34).string(message.invoiceName);
    }
    if (message.billingReason !== "") {
      writer.uint32(42).string(message.billingReason);
    }
    if (message.amountDue !== "") {
      writer.uint32(50).string(message.amountDue);
    }
    if (message.amountPaid !== "") {
      writer.uint32(58).string(message.amountPaid);
    }
    if (message.amountRemaining !== "") {
      writer.uint32(66).string(message.amountRemaining);
    }
    if (message.subtotal !== "") {
      writer.uint32(74).string(message.subtotal);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    if (message.party !== "") {
      writer.uint32(90).string(message.party);
    }
    if (message.counterparty !== "") {
      writer.uint32(98).string(message.counterparty);
    }
    if (message.factor !== "") {
      writer.uint32(106).string(message.factor);
    }
    if (message.dueDate !== "") {
      writer.uint32(114).string(message.dueDate);
    }
    if (message.periodStartDate !== "") {
      writer.uint32(122).string(message.periodStartDate);
    }
    if (message.periodEndDate !== "") {
      writer.uint32(130).string(message.periodEndDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Invoice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvoice } as Invoice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        case 3:
          message.invoiceNumber = reader.string();
          break;
        case 4:
          message.invoiceName = reader.string();
          break;
        case 5:
          message.billingReason = reader.string();
          break;
        case 6:
          message.amountDue = reader.string();
          break;
        case 7:
          message.amountPaid = reader.string();
          break;
        case 8:
          message.amountRemaining = reader.string();
          break;
        case 9:
          message.subtotal = reader.string();
          break;
        case 10:
          message.total = reader.string();
          break;
        case 11:
          message.party = reader.string();
          break;
        case 12:
          message.counterparty = reader.string();
          break;
        case 13:
          message.factor = reader.string();
          break;
        case 14:
          message.dueDate = reader.string();
          break;
        case 15:
          message.periodStartDate = reader.string();
          break;
        case 16:
          message.periodEndDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Invoice {
    const message = { ...baseInvoice } as Invoice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = String(object.invoiceNumber);
    } else {
      message.invoiceNumber = "";
    }
    if (object.invoiceName !== undefined && object.invoiceName !== null) {
      message.invoiceName = String(object.invoiceName);
    } else {
      message.invoiceName = "";
    }
    if (object.billingReason !== undefined && object.billingReason !== null) {
      message.billingReason = String(object.billingReason);
    } else {
      message.billingReason = "";
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = String(object.amountDue);
    } else {
      message.amountDue = "";
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = String(object.amountPaid);
    } else {
      message.amountPaid = "";
    }
    if (
      object.amountRemaining !== undefined &&
      object.amountRemaining !== null
    ) {
      message.amountRemaining = String(object.amountRemaining);
    } else {
      message.amountRemaining = "";
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
    if (object.party !== undefined && object.party !== null) {
      message.party = String(object.party);
    } else {
      message.party = "";
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = String(object.counterparty);
    } else {
      message.counterparty = "";
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = String(object.factor);
    } else {
      message.factor = "";
    }
    if (object.dueDate !== undefined && object.dueDate !== null) {
      message.dueDate = String(object.dueDate);
    } else {
      message.dueDate = "";
    }
    if (
      object.periodStartDate !== undefined &&
      object.periodStartDate !== null
    ) {
      message.periodStartDate = String(object.periodStartDate);
    } else {
      message.periodStartDate = "";
    }
    if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
      message.periodEndDate = String(object.periodEndDate);
    } else {
      message.periodEndDate = "";
    }
    return message;
  },

  toJSON(message: Invoice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    message.invoiceNumber !== undefined &&
      (obj.invoiceNumber = message.invoiceNumber);
    message.invoiceName !== undefined &&
      (obj.invoiceName = message.invoiceName);
    message.billingReason !== undefined &&
      (obj.billingReason = message.billingReason);
    message.amountDue !== undefined && (obj.amountDue = message.amountDue);
    message.amountPaid !== undefined && (obj.amountPaid = message.amountPaid);
    message.amountRemaining !== undefined &&
      (obj.amountRemaining = message.amountRemaining);
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.total !== undefined && (obj.total = message.total);
    message.party !== undefined && (obj.party = message.party);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.factor !== undefined && (obj.factor = message.factor);
    message.dueDate !== undefined && (obj.dueDate = message.dueDate);
    message.periodStartDate !== undefined &&
      (obj.periodStartDate = message.periodStartDate);
    message.periodEndDate !== undefined &&
      (obj.periodEndDate = message.periodEndDate);
    return obj;
  },

  fromPartial(object: DeepPartial<Invoice>): Invoice {
    const message = { ...baseInvoice } as Invoice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = object.invoiceNumber;
    } else {
      message.invoiceNumber = "";
    }
    if (object.invoiceName !== undefined && object.invoiceName !== null) {
      message.invoiceName = object.invoiceName;
    } else {
      message.invoiceName = "";
    }
    if (object.billingReason !== undefined && object.billingReason !== null) {
      message.billingReason = object.billingReason;
    } else {
      message.billingReason = "";
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = object.amountDue;
    } else {
      message.amountDue = "";
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = object.amountPaid;
    } else {
      message.amountPaid = "";
    }
    if (
      object.amountRemaining !== undefined &&
      object.amountRemaining !== null
    ) {
      message.amountRemaining = object.amountRemaining;
    } else {
      message.amountRemaining = "";
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
    if (object.party !== undefined && object.party !== null) {
      message.party = object.party;
    } else {
      message.party = "";
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = object.counterparty;
    } else {
      message.counterparty = "";
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = object.factor;
    } else {
      message.factor = "";
    }
    if (object.dueDate !== undefined && object.dueDate !== null) {
      message.dueDate = object.dueDate;
    } else {
      message.dueDate = "";
    }
    if (
      object.periodStartDate !== undefined &&
      object.periodStartDate !== null
    ) {
      message.periodStartDate = object.periodStartDate;
    } else {
      message.periodStartDate = "";
    }
    if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
      message.periodEndDate = object.periodEndDate;
    } else {
      message.periodEndDate = "";
    }
    return message;
  },
};

const baseMsgCreateInvoiceRequest: object = {
  creator: "",
  invoiceId: "",
  invoiceNumber: "",
  invoiceName: "",
  billingReason: "",
  amountDue: "",
  amountPaid: "",
  amountRemaining: "",
  subtotal: "",
  total: "",
  party: "",
  counterparty: "",
  factor: "",
  dueDate: "",
  periodStartDate: "",
  periodEndDate: "",
};

export const MsgCreateInvoiceRequest = {
  encode(
    message: MsgCreateInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    if (message.invoiceNumber !== "") {
      writer.uint32(26).string(message.invoiceNumber);
    }
    if (message.invoiceName !== "") {
      writer.uint32(34).string(message.invoiceName);
    }
    if (message.billingReason !== "") {
      writer.uint32(42).string(message.billingReason);
    }
    if (message.amountDue !== "") {
      writer.uint32(50).string(message.amountDue);
    }
    if (message.amountPaid !== "") {
      writer.uint32(58).string(message.amountPaid);
    }
    if (message.amountRemaining !== "") {
      writer.uint32(66).string(message.amountRemaining);
    }
    if (message.subtotal !== "") {
      writer.uint32(74).string(message.subtotal);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    if (message.party !== "") {
      writer.uint32(90).string(message.party);
    }
    if (message.counterparty !== "") {
      writer.uint32(98).string(message.counterparty);
    }
    if (message.factor !== "") {
      writer.uint32(106).string(message.factor);
    }
    if (message.dueDate !== "") {
      writer.uint32(114).string(message.dueDate);
    }
    if (message.periodStartDate !== "") {
      writer.uint32(122).string(message.periodStartDate);
    }
    if (message.periodEndDate !== "") {
      writer.uint32(130).string(message.periodEndDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInvoiceRequest,
    } as MsgCreateInvoiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        case 3:
          message.invoiceNumber = reader.string();
          break;
        case 4:
          message.invoiceName = reader.string();
          break;
        case 5:
          message.billingReason = reader.string();
          break;
        case 6:
          message.amountDue = reader.string();
          break;
        case 7:
          message.amountPaid = reader.string();
          break;
        case 8:
          message.amountRemaining = reader.string();
          break;
        case 9:
          message.subtotal = reader.string();
          break;
        case 10:
          message.total = reader.string();
          break;
        case 11:
          message.party = reader.string();
          break;
        case 12:
          message.counterparty = reader.string();
          break;
        case 13:
          message.factor = reader.string();
          break;
        case 14:
          message.dueDate = reader.string();
          break;
        case 15:
          message.periodStartDate = reader.string();
          break;
        case 16:
          message.periodEndDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInvoiceRequest {
    const message = {
      ...baseMsgCreateInvoiceRequest,
    } as MsgCreateInvoiceRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = String(object.invoiceNumber);
    } else {
      message.invoiceNumber = "";
    }
    if (object.invoiceName !== undefined && object.invoiceName !== null) {
      message.invoiceName = String(object.invoiceName);
    } else {
      message.invoiceName = "";
    }
    if (object.billingReason !== undefined && object.billingReason !== null) {
      message.billingReason = String(object.billingReason);
    } else {
      message.billingReason = "";
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = String(object.amountDue);
    } else {
      message.amountDue = "";
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = String(object.amountPaid);
    } else {
      message.amountPaid = "";
    }
    if (
      object.amountRemaining !== undefined &&
      object.amountRemaining !== null
    ) {
      message.amountRemaining = String(object.amountRemaining);
    } else {
      message.amountRemaining = "";
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
    if (object.party !== undefined && object.party !== null) {
      message.party = String(object.party);
    } else {
      message.party = "";
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = String(object.counterparty);
    } else {
      message.counterparty = "";
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = String(object.factor);
    } else {
      message.factor = "";
    }
    if (object.dueDate !== undefined && object.dueDate !== null) {
      message.dueDate = String(object.dueDate);
    } else {
      message.dueDate = "";
    }
    if (
      object.periodStartDate !== undefined &&
      object.periodStartDate !== null
    ) {
      message.periodStartDate = String(object.periodStartDate);
    } else {
      message.periodStartDate = "";
    }
    if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
      message.periodEndDate = String(object.periodEndDate);
    } else {
      message.periodEndDate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateInvoiceRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    message.invoiceNumber !== undefined &&
      (obj.invoiceNumber = message.invoiceNumber);
    message.invoiceName !== undefined &&
      (obj.invoiceName = message.invoiceName);
    message.billingReason !== undefined &&
      (obj.billingReason = message.billingReason);
    message.amountDue !== undefined && (obj.amountDue = message.amountDue);
    message.amountPaid !== undefined && (obj.amountPaid = message.amountPaid);
    message.amountRemaining !== undefined &&
      (obj.amountRemaining = message.amountRemaining);
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.total !== undefined && (obj.total = message.total);
    message.party !== undefined && (obj.party = message.party);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.factor !== undefined && (obj.factor = message.factor);
    message.dueDate !== undefined && (obj.dueDate = message.dueDate);
    message.periodStartDate !== undefined &&
      (obj.periodStartDate = message.periodStartDate);
    message.periodEndDate !== undefined &&
      (obj.periodEndDate = message.periodEndDate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInvoiceRequest>
  ): MsgCreateInvoiceRequest {
    const message = {
      ...baseMsgCreateInvoiceRequest,
    } as MsgCreateInvoiceRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = object.invoiceNumber;
    } else {
      message.invoiceNumber = "";
    }
    if (object.invoiceName !== undefined && object.invoiceName !== null) {
      message.invoiceName = object.invoiceName;
    } else {
      message.invoiceName = "";
    }
    if (object.billingReason !== undefined && object.billingReason !== null) {
      message.billingReason = object.billingReason;
    } else {
      message.billingReason = "";
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = object.amountDue;
    } else {
      message.amountDue = "";
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = object.amountPaid;
    } else {
      message.amountPaid = "";
    }
    if (
      object.amountRemaining !== undefined &&
      object.amountRemaining !== null
    ) {
      message.amountRemaining = object.amountRemaining;
    } else {
      message.amountRemaining = "";
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
    if (object.party !== undefined && object.party !== null) {
      message.party = object.party;
    } else {
      message.party = "";
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = object.counterparty;
    } else {
      message.counterparty = "";
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = object.factor;
    } else {
      message.factor = "";
    }
    if (object.dueDate !== undefined && object.dueDate !== null) {
      message.dueDate = object.dueDate;
    } else {
      message.dueDate = "";
    }
    if (
      object.periodStartDate !== undefined &&
      object.periodStartDate !== null
    ) {
      message.periodStartDate = object.periodStartDate;
    } else {
      message.periodStartDate = "";
    }
    if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
      message.periodEndDate = object.periodEndDate;
    } else {
      message.periodEndDate = "";
    }
    return message;
  },
};

const baseMsgCreateInvoiceResponse: object = {};

export const MsgCreateInvoiceResponse = {
  encode(
    _: MsgCreateInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInvoiceResponse,
    } as MsgCreateInvoiceResponse;
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

  fromJSON(_: any): MsgCreateInvoiceResponse {
    const message = {
      ...baseMsgCreateInvoiceResponse,
    } as MsgCreateInvoiceResponse;
    return message;
  },

  toJSON(_: MsgCreateInvoiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateInvoiceResponse>
  ): MsgCreateInvoiceResponse {
    const message = {
      ...baseMsgCreateInvoiceResponse,
    } as MsgCreateInvoiceResponse;
    return message;
  },
};

const baseMsgUpdateInvoiceRequest: object = {
  creator: "",
  invoiceId: "",
  invoiceNumber: "",
  invoiceName: "",
  billingReason: "",
  amountDue: "",
  amountPaid: "",
  amountRemaining: "",
  subtotal: "",
  total: "",
  party: "",
  counterparty: "",
  factor: "",
  dueDate: "",
  periodStartDate: "",
  periodEndDate: "",
};

export const MsgUpdateInvoiceRequest = {
  encode(
    message: MsgUpdateInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    if (message.invoiceNumber !== "") {
      writer.uint32(26).string(message.invoiceNumber);
    }
    if (message.invoiceName !== "") {
      writer.uint32(34).string(message.invoiceName);
    }
    if (message.billingReason !== "") {
      writer.uint32(42).string(message.billingReason);
    }
    if (message.amountDue !== "") {
      writer.uint32(50).string(message.amountDue);
    }
    if (message.amountPaid !== "") {
      writer.uint32(58).string(message.amountPaid);
    }
    if (message.amountRemaining !== "") {
      writer.uint32(66).string(message.amountRemaining);
    }
    if (message.subtotal !== "") {
      writer.uint32(74).string(message.subtotal);
    }
    if (message.total !== "") {
      writer.uint32(82).string(message.total);
    }
    if (message.party !== "") {
      writer.uint32(90).string(message.party);
    }
    if (message.counterparty !== "") {
      writer.uint32(98).string(message.counterparty);
    }
    if (message.factor !== "") {
      writer.uint32(106).string(message.factor);
    }
    if (message.dueDate !== "") {
      writer.uint32(114).string(message.dueDate);
    }
    if (message.periodStartDate !== "") {
      writer.uint32(122).string(message.periodStartDate);
    }
    if (message.periodEndDate !== "") {
      writer.uint32(130).string(message.periodEndDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInvoiceRequest,
    } as MsgUpdateInvoiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        case 3:
          message.invoiceNumber = reader.string();
          break;
        case 4:
          message.invoiceName = reader.string();
          break;
        case 5:
          message.billingReason = reader.string();
          break;
        case 6:
          message.amountDue = reader.string();
          break;
        case 7:
          message.amountPaid = reader.string();
          break;
        case 8:
          message.amountRemaining = reader.string();
          break;
        case 9:
          message.subtotal = reader.string();
          break;
        case 10:
          message.total = reader.string();
          break;
        case 11:
          message.party = reader.string();
          break;
        case 12:
          message.counterparty = reader.string();
          break;
        case 13:
          message.factor = reader.string();
          break;
        case 14:
          message.dueDate = reader.string();
          break;
        case 15:
          message.periodStartDate = reader.string();
          break;
        case 16:
          message.periodEndDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInvoiceRequest {
    const message = {
      ...baseMsgUpdateInvoiceRequest,
    } as MsgUpdateInvoiceRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = String(object.invoiceNumber);
    } else {
      message.invoiceNumber = "";
    }
    if (object.invoiceName !== undefined && object.invoiceName !== null) {
      message.invoiceName = String(object.invoiceName);
    } else {
      message.invoiceName = "";
    }
    if (object.billingReason !== undefined && object.billingReason !== null) {
      message.billingReason = String(object.billingReason);
    } else {
      message.billingReason = "";
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = String(object.amountDue);
    } else {
      message.amountDue = "";
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = String(object.amountPaid);
    } else {
      message.amountPaid = "";
    }
    if (
      object.amountRemaining !== undefined &&
      object.amountRemaining !== null
    ) {
      message.amountRemaining = String(object.amountRemaining);
    } else {
      message.amountRemaining = "";
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
    if (object.party !== undefined && object.party !== null) {
      message.party = String(object.party);
    } else {
      message.party = "";
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = String(object.counterparty);
    } else {
      message.counterparty = "";
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = String(object.factor);
    } else {
      message.factor = "";
    }
    if (object.dueDate !== undefined && object.dueDate !== null) {
      message.dueDate = String(object.dueDate);
    } else {
      message.dueDate = "";
    }
    if (
      object.periodStartDate !== undefined &&
      object.periodStartDate !== null
    ) {
      message.periodStartDate = String(object.periodStartDate);
    } else {
      message.periodStartDate = "";
    }
    if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
      message.periodEndDate = String(object.periodEndDate);
    } else {
      message.periodEndDate = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateInvoiceRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    message.invoiceNumber !== undefined &&
      (obj.invoiceNumber = message.invoiceNumber);
    message.invoiceName !== undefined &&
      (obj.invoiceName = message.invoiceName);
    message.billingReason !== undefined &&
      (obj.billingReason = message.billingReason);
    message.amountDue !== undefined && (obj.amountDue = message.amountDue);
    message.amountPaid !== undefined && (obj.amountPaid = message.amountPaid);
    message.amountRemaining !== undefined &&
      (obj.amountRemaining = message.amountRemaining);
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.total !== undefined && (obj.total = message.total);
    message.party !== undefined && (obj.party = message.party);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.factor !== undefined && (obj.factor = message.factor);
    message.dueDate !== undefined && (obj.dueDate = message.dueDate);
    message.periodStartDate !== undefined &&
      (obj.periodStartDate = message.periodStartDate);
    message.periodEndDate !== undefined &&
      (obj.periodEndDate = message.periodEndDate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateInvoiceRequest>
  ): MsgUpdateInvoiceRequest {
    const message = {
      ...baseMsgUpdateInvoiceRequest,
    } as MsgUpdateInvoiceRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
      message.invoiceNumber = object.invoiceNumber;
    } else {
      message.invoiceNumber = "";
    }
    if (object.invoiceName !== undefined && object.invoiceName !== null) {
      message.invoiceName = object.invoiceName;
    } else {
      message.invoiceName = "";
    }
    if (object.billingReason !== undefined && object.billingReason !== null) {
      message.billingReason = object.billingReason;
    } else {
      message.billingReason = "";
    }
    if (object.amountDue !== undefined && object.amountDue !== null) {
      message.amountDue = object.amountDue;
    } else {
      message.amountDue = "";
    }
    if (object.amountPaid !== undefined && object.amountPaid !== null) {
      message.amountPaid = object.amountPaid;
    } else {
      message.amountPaid = "";
    }
    if (
      object.amountRemaining !== undefined &&
      object.amountRemaining !== null
    ) {
      message.amountRemaining = object.amountRemaining;
    } else {
      message.amountRemaining = "";
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
    if (object.party !== undefined && object.party !== null) {
      message.party = object.party;
    } else {
      message.party = "";
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = object.counterparty;
    } else {
      message.counterparty = "";
    }
    if (object.factor !== undefined && object.factor !== null) {
      message.factor = object.factor;
    } else {
      message.factor = "";
    }
    if (object.dueDate !== undefined && object.dueDate !== null) {
      message.dueDate = object.dueDate;
    } else {
      message.dueDate = "";
    }
    if (
      object.periodStartDate !== undefined &&
      object.periodStartDate !== null
    ) {
      message.periodStartDate = object.periodStartDate;
    } else {
      message.periodStartDate = "";
    }
    if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
      message.periodEndDate = object.periodEndDate;
    } else {
      message.periodEndDate = "";
    }
    return message;
  },
};

const baseMsgUpdateInvoiceResponse: object = {};

export const MsgUpdateInvoiceResponse = {
  encode(
    _: MsgUpdateInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInvoiceResponse,
    } as MsgUpdateInvoiceResponse;
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

  fromJSON(_: any): MsgUpdateInvoiceResponse {
    const message = {
      ...baseMsgUpdateInvoiceResponse,
    } as MsgUpdateInvoiceResponse;
    return message;
  },

  toJSON(_: MsgUpdateInvoiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateInvoiceResponse>
  ): MsgUpdateInvoiceResponse {
    const message = {
      ...baseMsgUpdateInvoiceResponse,
    } as MsgUpdateInvoiceResponse;
    return message;
  },
};

const baseMsgCancelInvoiceRequest: object = { sender: "", invoiceId: "" };

export const MsgCancelInvoiceRequest = {
  encode(
    message: MsgCancelInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelInvoiceRequest,
    } as MsgCancelInvoiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelInvoiceRequest {
    const message = {
      ...baseMsgCancelInvoiceRequest,
    } as MsgCancelInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    return message;
  },

  toJSON(message: MsgCancelInvoiceRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelInvoiceRequest>
  ): MsgCancelInvoiceRequest {
    const message = {
      ...baseMsgCancelInvoiceRequest,
    } as MsgCancelInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    return message;
  },
};

const baseMsgCancelInvoiceResponse: object = {};

export const MsgCancelInvoiceResponse = {
  encode(
    _: MsgCancelInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelInvoiceResponse,
    } as MsgCancelInvoiceResponse;
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

  fromJSON(_: any): MsgCancelInvoiceResponse {
    const message = {
      ...baseMsgCancelInvoiceResponse,
    } as MsgCancelInvoiceResponse;
    return message;
  },

  toJSON(_: MsgCancelInvoiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelInvoiceResponse>
  ): MsgCancelInvoiceResponse {
    const message = {
      ...baseMsgCancelInvoiceResponse,
    } as MsgCancelInvoiceResponse;
    return message;
  },
};

const baseMsgDeleteInvoiceRequest: object = { sender: "", invoiceId: "" };

export const MsgDeleteInvoiceRequest = {
  encode(
    message: MsgDeleteInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInvoiceRequest,
    } as MsgDeleteInvoiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteInvoiceRequest {
    const message = {
      ...baseMsgDeleteInvoiceRequest,
    } as MsgDeleteInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteInvoiceRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteInvoiceRequest>
  ): MsgDeleteInvoiceRequest {
    const message = {
      ...baseMsgDeleteInvoiceRequest,
    } as MsgDeleteInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    return message;
  },
};

const baseMsgDeleteInvoiceResponse: object = {};

export const MsgDeleteInvoiceResponse = {
  encode(
    _: MsgDeleteInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInvoiceResponse,
    } as MsgDeleteInvoiceResponse;
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

  fromJSON(_: any): MsgDeleteInvoiceResponse {
    const message = {
      ...baseMsgDeleteInvoiceResponse,
    } as MsgDeleteInvoiceResponse;
    return message;
  },

  toJSON(_: MsgDeleteInvoiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteInvoiceResponse>
  ): MsgDeleteInvoiceResponse {
    const message = {
      ...baseMsgDeleteInvoiceResponse,
    } as MsgDeleteInvoiceResponse;
    return message;
  },
};

const baseMsgCompleteInvoiceRequest: object = { sender: "", invoiceId: "" };

export const MsgCompleteInvoiceRequest = {
  encode(
    message: MsgCompleteInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompleteInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteInvoiceRequest,
    } as MsgCompleteInvoiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCompleteInvoiceRequest {
    const message = {
      ...baseMsgCompleteInvoiceRequest,
    } as MsgCompleteInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    return message;
  },

  toJSON(message: MsgCompleteInvoiceRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCompleteInvoiceRequest>
  ): MsgCompleteInvoiceRequest {
    const message = {
      ...baseMsgCompleteInvoiceRequest,
    } as MsgCompleteInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    return message;
  },
};

const baseMsgCompleteInvoiceResponse: object = {};

export const MsgCompleteInvoiceResponse = {
  encode(
    _: MsgCompleteInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCompleteInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteInvoiceResponse,
    } as MsgCompleteInvoiceResponse;
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

  fromJSON(_: any): MsgCompleteInvoiceResponse {
    const message = {
      ...baseMsgCompleteInvoiceResponse,
    } as MsgCompleteInvoiceResponse;
    return message;
  },

  toJSON(_: MsgCompleteInvoiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCompleteInvoiceResponse>
  ): MsgCompleteInvoiceResponse {
    const message = {
      ...baseMsgCompleteInvoiceResponse,
    } as MsgCompleteInvoiceResponse;
    return message;
  },
};

const baseMsgFactorInvoiceRequest: object = { sender: "", invoiceId: "" };

export const MsgFactorInvoiceRequest = {
  encode(
    message: MsgFactorInvoiceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invoiceId !== "") {
      writer.uint32(18).string(message.invoiceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFactorInvoiceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFactorInvoiceRequest,
    } as MsgFactorInvoiceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invoiceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFactorInvoiceRequest {
    const message = {
      ...baseMsgFactorInvoiceRequest,
    } as MsgFactorInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = String(object.invoiceId);
    } else {
      message.invoiceId = "";
    }
    return message;
  },

  toJSON(message: MsgFactorInvoiceRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgFactorInvoiceRequest>
  ): MsgFactorInvoiceRequest {
    const message = {
      ...baseMsgFactorInvoiceRequest,
    } as MsgFactorInvoiceRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.invoiceId !== undefined && object.invoiceId !== null) {
      message.invoiceId = object.invoiceId;
    } else {
      message.invoiceId = "";
    }
    return message;
  },
};

const baseMsgFactorInvoiceResponse: object = {};

export const MsgFactorInvoiceResponse = {
  encode(
    _: MsgFactorInvoiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgFactorInvoiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFactorInvoiceResponse,
    } as MsgFactorInvoiceResponse;
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

  fromJSON(_: any): MsgFactorInvoiceResponse {
    const message = {
      ...baseMsgFactorInvoiceResponse,
    } as MsgFactorInvoiceResponse;
    return message;
  },

  toJSON(_: MsgFactorInvoiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgFactorInvoiceResponse>
  ): MsgFactorInvoiceResponse {
    const message = {
      ...baseMsgFactorInvoiceResponse,
    } as MsgFactorInvoiceResponse;
    return message;
  },
};

/** Msg is the stateset.invoice.v1beta1 Msg service */
export interface Msg {
  /** Create defines a method to create a new invoice. */
  Create(request: MsgCreateInvoiceRequest): Promise<MsgCreateInvoiceResponse>;
  /** Update defines a method to update an invoice. */
  Update(request: MsgUpdateInvoiceRequest): Promise<MsgUpdateInvoiceResponse>;
  /** Delete defines a method to create a new invoice. */
  Delete(request: MsgDeleteInvoiceRequest): Promise<MsgDeleteInvoiceResponse>;
  /** Cancel defines a method to cancel an invoice */
  Cancel(request: MsgCancelInvoiceRequest): Promise<MsgCancelInvoiceResponse>;
  /** Complete defines a method to complete an invoice */
  Complete(
    request: MsgCompleteInvoiceRequest
  ): Promise<MsgCompleteInvoiceResponse>;
  /** Factor defines a method to factor an invoice */
  Factor(request: MsgFactorInvoiceRequest): Promise<MsgFactorInvoiceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Create(request: MsgCreateInvoiceRequest): Promise<MsgCreateInvoiceResponse> {
    const data = MsgCreateInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Msg",
      "Create",
      data
    );
    return promise.then((data) =>
      MsgCreateInvoiceResponse.decode(new Reader(data))
    );
  }

  Update(request: MsgUpdateInvoiceRequest): Promise<MsgUpdateInvoiceResponse> {
    const data = MsgUpdateInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Msg",
      "Update",
      data
    );
    return promise.then((data) =>
      MsgUpdateInvoiceResponse.decode(new Reader(data))
    );
  }

  Delete(request: MsgDeleteInvoiceRequest): Promise<MsgDeleteInvoiceResponse> {
    const data = MsgDeleteInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Msg",
      "Delete",
      data
    );
    return promise.then((data) =>
      MsgDeleteInvoiceResponse.decode(new Reader(data))
    );
  }

  Cancel(request: MsgCancelInvoiceRequest): Promise<MsgCancelInvoiceResponse> {
    const data = MsgCancelInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Msg",
      "Cancel",
      data
    );
    return promise.then((data) =>
      MsgCancelInvoiceResponse.decode(new Reader(data))
    );
  }

  Complete(
    request: MsgCompleteInvoiceRequest
  ): Promise<MsgCompleteInvoiceResponse> {
    const data = MsgCompleteInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Msg",
      "Complete",
      data
    );
    return promise.then((data) =>
      MsgCompleteInvoiceResponse.decode(new Reader(data))
    );
  }

  Factor(request: MsgFactorInvoiceRequest): Promise<MsgFactorInvoiceResponse> {
    const data = MsgFactorInvoiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.invoice.v1beta1.Msg",
      "Factor",
      data
    );
    return promise.then((data) =>
      MsgFactorInvoiceResponse.decode(new Reader(data))
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
