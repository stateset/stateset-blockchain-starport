/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stateset.purchaseorder.v1beta1";

/** IbcPurchaseOrderPacketData defines a struct for the packet payload */
export interface IbcPurchaseOrderPacketData {
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

const baseIbcPurchaseOrderPacketData: object = {
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

export const IbcPurchaseOrderPacketData = {
  encode(
    message: IbcPurchaseOrderPacketData,
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
  ): IbcPurchaseOrderPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIbcPurchaseOrderPacketData,
    } as IbcPurchaseOrderPacketData;
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

  fromJSON(object: any): IbcPurchaseOrderPacketData {
    const message = {
      ...baseIbcPurchaseOrderPacketData,
    } as IbcPurchaseOrderPacketData;
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

  toJSON(message: IbcPurchaseOrderPacketData): unknown {
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
    object: DeepPartial<IbcPurchaseOrderPacketData>
  ): IbcPurchaseOrderPacketData {
    const message = {
      ...baseIbcPurchaseOrderPacketData,
    } as IbcPurchaseOrderPacketData;
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
