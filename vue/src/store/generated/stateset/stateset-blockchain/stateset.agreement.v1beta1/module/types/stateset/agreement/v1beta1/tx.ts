/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "stateset.agreement.v1beta1";

/** State is an enum which refers to state of an agreement */
export enum State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  request = 1,
  active = 2,
  amended = 3,
  renewed = 4,
  terminated = 5,
  expired = 6,
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
    case "active":
      return State.active;
    case 3:
    case "amended":
      return State.amended;
    case 4:
    case "renewed":
      return State.renewed;
    case 5:
    case "terminated":
      return State.terminated;
    case 6:
    case "expired":
      return State.expired;
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
    case State.active:
      return "active";
    case State.amended:
      return "amended";
    case State.renewed:
      return "renewed";
    case State.terminated:
      return "terminated";
    case State.expired:
      return "expired";
    default:
      return "UNKNOWN";
  }
}

export interface Agreement {
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

export interface AgreementFilters {
  owner: string;
  state: string;
}

/** MsgCreateAgreementRequest is the Msg/CreateAgreement request type. */
export interface MsgCreateAgreementRequest {
  creator: string;
  agreementId: string;
  agreementNumber: string;
  agreementName: string;
  agreementType: string;
  agreementStatus: string;
  totalAgreementValue: number;
  party: string;
  counterparty: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

/** MsgCreateAgreementResponse is the Msg/CreateAgreement response type. */
export interface MsgCreateAgreementResponse {
  /** agreement_id is the unique ID of the newly created agreement class. */
  agreementId: string;
}

/** MsgCreateAgreementRequest is the Msg/CreateAgreement request type. */
export interface MsgUpdateAgreementRequest {
  sender: string;
  agreementId: string;
  agreementNumber: string;
  agreementName: string;
  agreementType: string;
  agreementStatus: string;
  totalAgreementValue: number;
  party: string;
  counterparty: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgUpdateAgreementResponse {
  /** agreement_id is the unique ID of the newly created agreement class. */
  agreementId: string;
}

/** MsgDeleteAgreementRequest is the Msg/DeleteAgreement request type. */
export interface MsgDeleteAgreementRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  agreementId: string;
}

export interface MsgDeleteAgreementResponse {}

/** MsgActivateAgreementRequest is the Msg/ActivateAgreement request type. */
export interface MsgActivateAgreementRequest {
  sneder: string;
  agreementId: string;
  activationDate: string;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgActivateAgreementResponse {}

/** MsgRenewRenewRequest is the Msg/RenewAgreement request type. */
export interface MsgRenewAgreementRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  agreementId: string;
}

/** MsgRenewAgreementResponse is the Msg/SignData response type. */
export interface MsgRenewAgreementResponse {}

/** MsgAmendAgreementRequest is the Msg/AmendAgreement request type. */
export interface MsgAmendAgreementRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  agreementId: string;
}

/** MsgAmendResponse is the Msg/AmendAgreement response type. */
export interface MsgAmendAgreementResponse {}

/** MsgTerminateAgreementRequest is the Msg/TerminateAgreement request type. */
export interface MsgTerminateAgreementRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  agreementId: string;
}

/** MsgTerminateResponse is the Msg/TerminateAgreement response type. */
export interface MsgTerminateAgreementResponse {}

/** MsgExpireAgreementRequest is the Msg/ExpireAgreement request type. */
export interface MsgExpireAgreementRequest {
  /** sender is the address of the sender of the transaction. */
  sender: string;
  agreementId: string;
}

/** MsgExpireResponse is the Msg/ExpireAgreement response type. */
export interface MsgExpireAgreementResponse {}

const baseAgreement: object = {
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

export const Agreement = {
  encode(message: Agreement, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Agreement {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgreement } as Agreement;
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

  fromJSON(object: any): Agreement {
    const message = { ...baseAgreement } as Agreement;
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

  toJSON(message: Agreement): unknown {
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

  fromPartial(object: DeepPartial<Agreement>): Agreement {
    const message = { ...baseAgreement } as Agreement;
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

const baseAgreementFilters: object = { owner: "", state: "" };

export const AgreementFilters = {
  encode(message: AgreementFilters, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AgreementFilters {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgreementFilters } as AgreementFilters;
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

  fromJSON(object: any): AgreementFilters {
    const message = { ...baseAgreementFilters } as AgreementFilters;
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

  toJSON(message: AgreementFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<AgreementFilters>): AgreementFilters {
    const message = { ...baseAgreementFilters } as AgreementFilters;
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

const baseMsgCreateAgreementRequest: object = {
  creator: "",
  agreementId: "",
  agreementNumber: "",
  agreementName: "",
  agreementType: "",
  agreementStatus: "",
  totalAgreementValue: 0,
  party: "",
  counterparty: "",
};

export const MsgCreateAgreementRequest = {
  encode(
    message: MsgCreateAgreementRequest,
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
    if (message.totalAgreementValue !== 0) {
      writer.uint32(56).int32(message.totalAgreementValue);
    }
    if (message.party !== "") {
      writer.uint32(66).string(message.party);
    }
    if (message.counterparty !== "") {
      writer.uint32(74).string(message.counterparty);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAgreementRequest,
    } as MsgCreateAgreementRequest;
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
          message.totalAgreementValue = reader.int32();
          break;
        case 8:
          message.party = reader.string();
          break;
        case 9:
          message.counterparty = reader.string();
          break;
        case 10:
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAgreementRequest {
    const message = {
      ...baseMsgCreateAgreementRequest,
    } as MsgCreateAgreementRequest;
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
      message.totalAgreementValue = Number(object.totalAgreementValue);
    } else {
      message.totalAgreementValue = 0;
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
      message.startDate = fromJsonTimestamp(object.startDate);
    } else {
      message.startDate = undefined;
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = fromJsonTimestamp(object.endDate);
    } else {
      message.endDate = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateAgreementRequest): unknown {
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
    message.startDate !== undefined &&
      (obj.startDate =
        message.startDate !== undefined
          ? message.startDate.toISOString()
          : null);
    message.endDate !== undefined &&
      (obj.endDate =
        message.endDate !== undefined ? message.endDate.toISOString() : null);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAgreementRequest>
  ): MsgCreateAgreementRequest {
    const message = {
      ...baseMsgCreateAgreementRequest,
    } as MsgCreateAgreementRequest;
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
      message.totalAgreementValue = 0;
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
      message.startDate = undefined;
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = undefined;
    }
    return message;
  },
};

const baseMsgCreateAgreementResponse: object = { agreementId: "" };

export const MsgCreateAgreementResponse = {
  encode(
    message: MsgCreateAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.agreementId !== "") {
      writer.uint32(10).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAgreementResponse,
    } as MsgCreateAgreementResponse;
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

  fromJSON(object: any): MsgCreateAgreementResponse {
    const message = {
      ...baseMsgCreateAgreementResponse,
    } as MsgCreateAgreementResponse;
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAgreementResponse): unknown {
    const obj: any = {};
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAgreementResponse>
  ): MsgCreateAgreementResponse {
    const message = {
      ...baseMsgCreateAgreementResponse,
    } as MsgCreateAgreementResponse;
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgUpdateAgreementRequest: object = {
  sender: "",
  agreementId: "",
  agreementNumber: "",
  agreementName: "",
  agreementType: "",
  agreementStatus: "",
  totalAgreementValue: 0,
  party: "",
  counterparty: "",
};

export const MsgUpdateAgreementRequest = {
  encode(
    message: MsgUpdateAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
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
    if (message.totalAgreementValue !== 0) {
      writer.uint32(56).int32(message.totalAgreementValue);
    }
    if (message.party !== "") {
      writer.uint32(66).string(message.party);
    }
    if (message.counterparty !== "") {
      writer.uint32(74).string(message.counterparty);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAgreementRequest,
    } as MsgUpdateAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
          message.totalAgreementValue = reader.int32();
          break;
        case 8:
          message.party = reader.string();
          break;
        case 9:
          message.counterparty = reader.string();
          break;
        case 10:
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAgreementRequest {
    const message = {
      ...baseMsgUpdateAgreementRequest,
    } as MsgUpdateAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
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
      message.totalAgreementValue = Number(object.totalAgreementValue);
    } else {
      message.totalAgreementValue = 0;
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
      message.startDate = fromJsonTimestamp(object.startDate);
    } else {
      message.startDate = undefined;
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = fromJsonTimestamp(object.endDate);
    } else {
      message.endDate = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateAgreementRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
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
    message.startDate !== undefined &&
      (obj.startDate =
        message.startDate !== undefined
          ? message.startDate.toISOString()
          : null);
    message.endDate !== undefined &&
      (obj.endDate =
        message.endDate !== undefined ? message.endDate.toISOString() : null);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAgreementRequest>
  ): MsgUpdateAgreementRequest {
    const message = {
      ...baseMsgUpdateAgreementRequest,
    } as MsgUpdateAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
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
      message.totalAgreementValue = 0;
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
      message.startDate = undefined;
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = undefined;
    }
    return message;
  },
};

const baseMsgUpdateAgreementResponse: object = { agreementId: "" };

export const MsgUpdateAgreementResponse = {
  encode(
    message: MsgUpdateAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.agreementId !== "") {
      writer.uint32(10).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAgreementResponse,
    } as MsgUpdateAgreementResponse;
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

  fromJSON(object: any): MsgUpdateAgreementResponse {
    const message = {
      ...baseMsgUpdateAgreementResponse,
    } as MsgUpdateAgreementResponse;
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAgreementResponse): unknown {
    const obj: any = {};
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAgreementResponse>
  ): MsgUpdateAgreementResponse {
    const message = {
      ...baseMsgUpdateAgreementResponse,
    } as MsgUpdateAgreementResponse;
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgDeleteAgreementRequest: object = { sender: "", agreementId: "" };

export const MsgDeleteAgreementRequest = {
  encode(
    message: MsgDeleteAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAgreementRequest,
    } as MsgDeleteAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAgreementRequest {
    const message = {
      ...baseMsgDeleteAgreementRequest,
    } as MsgDeleteAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteAgreementRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteAgreementRequest>
  ): MsgDeleteAgreementRequest {
    const message = {
      ...baseMsgDeleteAgreementRequest,
    } as MsgDeleteAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgDeleteAgreementResponse: object = {};

export const MsgDeleteAgreementResponse = {
  encode(
    _: MsgDeleteAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAgreementResponse,
    } as MsgDeleteAgreementResponse;
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

  fromJSON(_: any): MsgDeleteAgreementResponse {
    const message = {
      ...baseMsgDeleteAgreementResponse,
    } as MsgDeleteAgreementResponse;
    return message;
  },

  toJSON(_: MsgDeleteAgreementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAgreementResponse>
  ): MsgDeleteAgreementResponse {
    const message = {
      ...baseMsgDeleteAgreementResponse,
    } as MsgDeleteAgreementResponse;
    return message;
  },
};

const baseMsgActivateAgreementRequest: object = {
  sneder: "",
  agreementId: "",
  activationDate: "",
};

export const MsgActivateAgreementRequest = {
  encode(
    message: MsgActivateAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sneder !== "") {
      writer.uint32(10).string(message.sneder);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    if (message.activationDate !== "") {
      writer.uint32(26).string(message.activationDate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgActivateAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgActivateAgreementRequest,
    } as MsgActivateAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sneder = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        case 3:
          message.activationDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgActivateAgreementRequest {
    const message = {
      ...baseMsgActivateAgreementRequest,
    } as MsgActivateAgreementRequest;
    if (object.sneder !== undefined && object.sneder !== null) {
      message.sneder = String(object.sneder);
    } else {
      message.sneder = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    if (object.activationDate !== undefined && object.activationDate !== null) {
      message.activationDate = String(object.activationDate);
    } else {
      message.activationDate = "";
    }
    return message;
  },

  toJSON(message: MsgActivateAgreementRequest): unknown {
    const obj: any = {};
    message.sneder !== undefined && (obj.sneder = message.sneder);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    message.activationDate !== undefined &&
      (obj.activationDate = message.activationDate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgActivateAgreementRequest>
  ): MsgActivateAgreementRequest {
    const message = {
      ...baseMsgActivateAgreementRequest,
    } as MsgActivateAgreementRequest;
    if (object.sneder !== undefined && object.sneder !== null) {
      message.sneder = object.sneder;
    } else {
      message.sneder = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    if (object.activationDate !== undefined && object.activationDate !== null) {
      message.activationDate = object.activationDate;
    } else {
      message.activationDate = "";
    }
    return message;
  },
};

const baseMsgActivateAgreementResponse: object = {};

export const MsgActivateAgreementResponse = {
  encode(
    _: MsgActivateAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgActivateAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgActivateAgreementResponse,
    } as MsgActivateAgreementResponse;
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

  fromJSON(_: any): MsgActivateAgreementResponse {
    const message = {
      ...baseMsgActivateAgreementResponse,
    } as MsgActivateAgreementResponse;
    return message;
  },

  toJSON(_: MsgActivateAgreementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgActivateAgreementResponse>
  ): MsgActivateAgreementResponse {
    const message = {
      ...baseMsgActivateAgreementResponse,
    } as MsgActivateAgreementResponse;
    return message;
  },
};

const baseMsgRenewAgreementRequest: object = { sender: "", agreementId: "" };

export const MsgRenewAgreementRequest = {
  encode(
    message: MsgRenewAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRenewAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRenewAgreementRequest,
    } as MsgRenewAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRenewAgreementRequest {
    const message = {
      ...baseMsgRenewAgreementRequest,
    } as MsgRenewAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgRenewAgreementRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRenewAgreementRequest>
  ): MsgRenewAgreementRequest {
    const message = {
      ...baseMsgRenewAgreementRequest,
    } as MsgRenewAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgRenewAgreementResponse: object = {};

export const MsgRenewAgreementResponse = {
  encode(
    _: MsgRenewAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRenewAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRenewAgreementResponse,
    } as MsgRenewAgreementResponse;
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

  fromJSON(_: any): MsgRenewAgreementResponse {
    const message = {
      ...baseMsgRenewAgreementResponse,
    } as MsgRenewAgreementResponse;
    return message;
  },

  toJSON(_: MsgRenewAgreementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRenewAgreementResponse>
  ): MsgRenewAgreementResponse {
    const message = {
      ...baseMsgRenewAgreementResponse,
    } as MsgRenewAgreementResponse;
    return message;
  },
};

const baseMsgAmendAgreementRequest: object = { sender: "", agreementId: "" };

export const MsgAmendAgreementRequest = {
  encode(
    message: MsgAmendAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAmendAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAmendAgreementRequest,
    } as MsgAmendAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAmendAgreementRequest {
    const message = {
      ...baseMsgAmendAgreementRequest,
    } as MsgAmendAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgAmendAgreementRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAmendAgreementRequest>
  ): MsgAmendAgreementRequest {
    const message = {
      ...baseMsgAmendAgreementRequest,
    } as MsgAmendAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgAmendAgreementResponse: object = {};

export const MsgAmendAgreementResponse = {
  encode(
    _: MsgAmendAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAmendAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAmendAgreementResponse,
    } as MsgAmendAgreementResponse;
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

  fromJSON(_: any): MsgAmendAgreementResponse {
    const message = {
      ...baseMsgAmendAgreementResponse,
    } as MsgAmendAgreementResponse;
    return message;
  },

  toJSON(_: MsgAmendAgreementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAmendAgreementResponse>
  ): MsgAmendAgreementResponse {
    const message = {
      ...baseMsgAmendAgreementResponse,
    } as MsgAmendAgreementResponse;
    return message;
  },
};

const baseMsgTerminateAgreementRequest: object = {
  sender: "",
  agreementId: "",
};

export const MsgTerminateAgreementRequest = {
  encode(
    message: MsgTerminateAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTerminateAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTerminateAgreementRequest,
    } as MsgTerminateAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTerminateAgreementRequest {
    const message = {
      ...baseMsgTerminateAgreementRequest,
    } as MsgTerminateAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgTerminateAgreementRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgTerminateAgreementRequest>
  ): MsgTerminateAgreementRequest {
    const message = {
      ...baseMsgTerminateAgreementRequest,
    } as MsgTerminateAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgTerminateAgreementResponse: object = {};

export const MsgTerminateAgreementResponse = {
  encode(
    _: MsgTerminateAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTerminateAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTerminateAgreementResponse,
    } as MsgTerminateAgreementResponse;
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

  fromJSON(_: any): MsgTerminateAgreementResponse {
    const message = {
      ...baseMsgTerminateAgreementResponse,
    } as MsgTerminateAgreementResponse;
    return message;
  },

  toJSON(_: MsgTerminateAgreementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTerminateAgreementResponse>
  ): MsgTerminateAgreementResponse {
    const message = {
      ...baseMsgTerminateAgreementResponse,
    } as MsgTerminateAgreementResponse;
    return message;
  },
};

const baseMsgExpireAgreementRequest: object = { sender: "", agreementId: "" };

export const MsgExpireAgreementRequest = {
  encode(
    message: MsgExpireAgreementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.agreementId !== "") {
      writer.uint32(18).string(message.agreementId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExpireAgreementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExpireAgreementRequest,
    } as MsgExpireAgreementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.agreementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExpireAgreementRequest {
    const message = {
      ...baseMsgExpireAgreementRequest,
    } as MsgExpireAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = String(object.agreementId);
    } else {
      message.agreementId = "";
    }
    return message;
  },

  toJSON(message: MsgExpireAgreementRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.agreementId !== undefined &&
      (obj.agreementId = message.agreementId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExpireAgreementRequest>
  ): MsgExpireAgreementRequest {
    const message = {
      ...baseMsgExpireAgreementRequest,
    } as MsgExpireAgreementRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.agreementId !== undefined && object.agreementId !== null) {
      message.agreementId = object.agreementId;
    } else {
      message.agreementId = "";
    }
    return message;
  },
};

const baseMsgExpireAgreementResponse: object = {};

export const MsgExpireAgreementResponse = {
  encode(
    _: MsgExpireAgreementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExpireAgreementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExpireAgreementResponse,
    } as MsgExpireAgreementResponse;
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

  fromJSON(_: any): MsgExpireAgreementResponse {
    const message = {
      ...baseMsgExpireAgreementResponse,
    } as MsgExpireAgreementResponse;
    return message;
  },

  toJSON(_: MsgExpireAgreementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExpireAgreementResponse>
  ): MsgExpireAgreementResponse {
    const message = {
      ...baseMsgExpireAgreementResponse,
    } as MsgExpireAgreementResponse;
    return message;
  },
};

/** Msg is the stateset.agreement.v1beta1 Msg service */
export interface Msg {
  /** Create defines a method to create a new agreement. */
  Create(
    request: MsgCreateAgreementRequest
  ): Promise<MsgCreateAgreementResponse>;
  /** Update defines a method to update an agreement. */
  Update(
    request: MsgUpdateAgreementRequest
  ): Promise<MsgUpdateAgreementResponse>;
  /** Delete defines a method to create a new agreement. */
  Delete(
    request: MsgDeleteAgreementRequest
  ): Promise<MsgDeleteAgreementResponse>;
  /** Activate defines a method to activate an agreement */
  Activate(
    request: MsgActivateAgreementRequest
  ): Promise<MsgActivateAgreementResponse>;
  /** Renew defines a method to renew an agreement */
  Renew(request: MsgRenewAgreementRequest): Promise<MsgRenewAgreementResponse>;
  /** Amend defines a method to amend an agreement */
  Amend(request: MsgAmendAgreementRequest): Promise<MsgAmendAgreementResponse>;
  /** Terminate defines a method to terminate an agreement */
  Terminate(
    request: MsgTerminateAgreementRequest
  ): Promise<MsgTerminateAgreementResponse>;
  /** Expire defines a method to expire an agreement */
  Expire(
    request: MsgExpireAgreementRequest
  ): Promise<MsgExpireAgreementResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Create(
    request: MsgCreateAgreementRequest
  ): Promise<MsgCreateAgreementResponse> {
    const data = MsgCreateAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Create",
      data
    );
    return promise.then((data) =>
      MsgCreateAgreementResponse.decode(new Reader(data))
    );
  }

  Update(
    request: MsgUpdateAgreementRequest
  ): Promise<MsgUpdateAgreementResponse> {
    const data = MsgUpdateAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Update",
      data
    );
    return promise.then((data) =>
      MsgUpdateAgreementResponse.decode(new Reader(data))
    );
  }

  Delete(
    request: MsgDeleteAgreementRequest
  ): Promise<MsgDeleteAgreementResponse> {
    const data = MsgDeleteAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Delete",
      data
    );
    return promise.then((data) =>
      MsgDeleteAgreementResponse.decode(new Reader(data))
    );
  }

  Activate(
    request: MsgActivateAgreementRequest
  ): Promise<MsgActivateAgreementResponse> {
    const data = MsgActivateAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Activate",
      data
    );
    return promise.then((data) =>
      MsgActivateAgreementResponse.decode(new Reader(data))
    );
  }

  Renew(request: MsgRenewAgreementRequest): Promise<MsgRenewAgreementResponse> {
    const data = MsgRenewAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Renew",
      data
    );
    return promise.then((data) =>
      MsgRenewAgreementResponse.decode(new Reader(data))
    );
  }

  Amend(request: MsgAmendAgreementRequest): Promise<MsgAmendAgreementResponse> {
    const data = MsgAmendAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Amend",
      data
    );
    return promise.then((data) =>
      MsgAmendAgreementResponse.decode(new Reader(data))
    );
  }

  Terminate(
    request: MsgTerminateAgreementRequest
  ): Promise<MsgTerminateAgreementResponse> {
    const data = MsgTerminateAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Terminate",
      data
    );
    return promise.then((data) =>
      MsgTerminateAgreementResponse.decode(new Reader(data))
    );
  }

  Expire(
    request: MsgExpireAgreementRequest
  ): Promise<MsgExpireAgreementResponse> {
    const data = MsgExpireAgreementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "stateset.agreement.v1beta1.Msg",
      "Expire",
      data
    );
    return promise.then((data) =>
      MsgExpireAgreementResponse.decode(new Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
