/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stateset.invoice.v1beta1";

/** IbcInvoicePacketData defines a struct for the packet payload */
export interface IbcInvoicePacketData {
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

const baseIbcInvoicePacketData: object = {
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

export const IbcInvoicePacketData = {
  encode(
    message: IbcInvoicePacketData,
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

  decode(input: Reader | Uint8Array, length?: number): IbcInvoicePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcInvoicePacketData } as IbcInvoicePacketData;
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

  fromJSON(object: any): IbcInvoicePacketData {
    const message = { ...baseIbcInvoicePacketData } as IbcInvoicePacketData;
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

  toJSON(message: IbcInvoicePacketData): unknown {
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

  fromPartial(object: DeepPartial<IbcInvoicePacketData>): IbcInvoicePacketData {
    const message = { ...baseIbcInvoicePacketData } as IbcInvoicePacketData;
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
