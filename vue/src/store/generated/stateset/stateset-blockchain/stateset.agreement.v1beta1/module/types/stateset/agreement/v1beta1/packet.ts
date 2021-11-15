/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stateset.agreement.v1beta1";

/** IbcAgreementPacketData defines a struct for the packet payload */
export interface IbcAgreementPacketData {
  creator: string;
  agreementId: string;
  agreementNumber: string;
  agreementName: string;
  agreementType: string;
  agreementStatus: string;
  totalAgreementValue: string;
  party: string;
  counterparty: string;
  startDate: string;
  endDate: string;
}

const baseIbcAgreementPacketData: object = {
  creator: "",
  agreementId: "",
  agreementNumber: "",
  agreementName: "",
  agreementType: "",
  agreementStatus: "",
  totalAgreementValue: "",
  party: "",
  counterparty: "",
  startDate: "",
  endDate: "",
};

export const IbcAgreementPacketData = {
  encode(
    message: IbcAgreementPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    if (message.agreementNumber !== "") {
      writer.uint32(26).string(message.agreementNumber);
    }
    if (message.agreementName !== "") {
      writer.uint32(34).string(message.agreementName);
    }
    if (message.agreementType !== "") {
      writer.uint32(42).string(message.agreementType);
    }
    if (message.agreementStatus !== "") {
      writer.uint32(50).string(message.agreementStatus);
    }
    if (message.totalAgreementValue !== "") {
      writer.uint32(58).string(message.totalAgreementValue);
    }
    if (message.party !== "") {
      writer.uint32(66).string(message.party);
    }
    if (message.counterparty !== "") {
      writer.uint32(74).string(message.counterparty);
    }
    if (message.startDate !== "") {
      writer.uint32(82).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(90).string(message.endDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcAgreementPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcAgreementPacketData } as IbcAgreementPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        case 3:
          message.agreementNumber = reader.string();
          break;
        case 4:
          message.agreementName = reader.string();
          break;
        case 5:
          message.agreementType = reader.string();
          break;
        case 6:
          message.agreementStatus = reader.string();
          break;
        case 7:
          message.totalAgreementValue = reader.string();
          break;
        case 8:
          message.party = reader.string();
          break;
        case 9:
          message.counterparty = reader.string();
          break;
        case 10:
          message.startDate = reader.string();
          break;
        case 11:
          message.endDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcAgreementPacketData {
    const message = { ...baseIbcAgreementPacketData } as IbcAgreementPacketData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    if (
      object.agreementNumber !== undefined &&
      object.agreementNumber !== null
    ) {
      message.agreementNumber = String(object.agreementNumber);
    } else {
      message.agreementNumber = "";
    }
    if (object.agreementName !== undefined && object.agreementName !== null) {
      message.agreementName = String(object.agreementName);
    } else {
      message.agreementName = "";
    }
    if (object.agreementType !== undefined && object.agreementType !== null) {
      message.agreementType = String(object.agreementType);
    } else {
      message.agreementType = "";
    }
    if (
      object.agreementStatus !== undefined &&
      object.agreementStatus !== null
    ) {
      message.agreementStatus = String(object.agreementStatus);
    } else {
      message.agreementStatus = "";
    }
    if (
      object.totalAgreementValue !== undefined &&
      object.totalAgreementValue !== null
    ) {
      message.totalAgreementValue = String(object.totalAgreementValue);
    } else {
      message.totalAgreementValue = "";
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
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = String(object.startDate);
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = String(object.endDate);
    } else {
      message.endDate = "";
    }
    return message;
  },

  toJSON(message: IbcAgreementPacketData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    message.agreementNumber !== undefined &&
      (obj.agreementNumber = message.agreementNumber);
    message.agreementName !== undefined &&
      (obj.agreementName = message.agreementName);
    message.agreementType !== undefined &&
      (obj.agreementType = message.agreementType);
    message.agreementStatus !== undefined &&
      (obj.agreementStatus = message.agreementStatus);
    message.totalAgreementValue !== undefined &&
      (obj.totalAgreementValue = message.totalAgreementValue);
    message.party !== undefined && (obj.party = message.party);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IbcAgreementPacketData>
  ): IbcAgreementPacketData {
    const message = { ...baseIbcAgreementPacketData } as IbcAgreementPacketData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    if (
      object.agreementNumber !== undefined &&
      object.agreementNumber !== null
    ) {
      message.agreementNumber = object.agreementNumber;
    } else {
      message.agreementNumber = "";
    }
    if (object.agreementName !== undefined && object.agreementName !== null) {
      message.agreementName = object.agreementName;
    } else {
      message.agreementName = "";
    }
    if (object.agreementType !== undefined && object.agreementType !== null) {
      message.agreementType = object.agreementType;
    } else {
      message.agreementType = "";
    }
    if (
      object.agreementStatus !== undefined &&
      object.agreementStatus !== null
    ) {
      message.agreementStatus = object.agreementStatus;
    } else {
      message.agreementStatus = "";
    }
    if (
      object.totalAgreementValue !== undefined &&
      object.totalAgreementValue !== null
    ) {
      message.totalAgreementValue = object.totalAgreementValue;
    } else {
      message.totalAgreementValue = "";
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
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = object.startDate;
    } else {
      message.startDate = "";
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = "";
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
