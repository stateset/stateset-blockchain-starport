/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { DidCredential } from "../../../stateset/did/v1beta1/did";

export const protobufPackage = "did";

/** MsgAddDid defines a message for adding a DID. */
export interface MsgAddDid {
  did: string;
  pubKey: string;
}

/** MsgAddDidResponse defines the Msg/AddDid response type. */
export interface MsgAddDidResponse {}

/** MsgAddCredential defines a message for adding a credential to the signer's DID. */
export interface MsgAddCredential {
  didCredential: DidCredential | undefined;
}

/** MsgAddCredentialResponse defines the Msg/AddCredential response type. */
export interface MsgAddCredentialResponse {}

const baseMsgAddDid: object = { did: "", pubKey: "" };

export const MsgAddDid = {
  encode(message: MsgAddDid, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddDid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddDid } as MsgAddDid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddDid {
    const message = { ...baseMsgAddDid } as MsgAddDid;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey);
    } else {
      message.pubKey = "";
    }
    return message;
  },

  toJSON(message: MsgAddDid): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddDid>): MsgAddDid {
    const message = { ...baseMsgAddDid } as MsgAddDid;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey;
    } else {
      message.pubKey = "";
    }
    return message;
  },
};

const baseMsgAddDidResponse: object = {};

export const MsgAddDidResponse = {
  encode(_: MsgAddDidResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddDidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddDidResponse } as MsgAddDidResponse;
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

  fromJSON(_: any): MsgAddDidResponse {
    const message = { ...baseMsgAddDidResponse } as MsgAddDidResponse;
    return message;
  },

  toJSON(_: MsgAddDidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddDidResponse>): MsgAddDidResponse {
    const message = { ...baseMsgAddDidResponse } as MsgAddDidResponse;
    return message;
  },
};

const baseMsgAddCredential: object = {};

export const MsgAddCredential = {
  encode(message: MsgAddCredential, writer: Writer = Writer.create()): Writer {
    if (message.didCredential !== undefined) {
      DidCredential.encode(
        message.didCredential,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddCredential } as MsgAddCredential;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didCredential = DidCredential.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddCredential {
    const message = { ...baseMsgAddCredential } as MsgAddCredential;
    if (object.didCredential !== undefined && object.didCredential !== null) {
      message.didCredential = DidCredential.fromJSON(object.didCredential);
    } else {
      message.didCredential = undefined;
    }
    return message;
  },

  toJSON(message: MsgAddCredential): unknown {
    const obj: any = {};
    message.didCredential !== undefined &&
      (obj.didCredential = message.didCredential
        ? DidCredential.toJSON(message.didCredential)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddCredential>): MsgAddCredential {
    const message = { ...baseMsgAddCredential } as MsgAddCredential;
    if (object.didCredential !== undefined && object.didCredential !== null) {
      message.didCredential = DidCredential.fromPartial(object.didCredential);
    } else {
      message.didCredential = undefined;
    }
    return message;
  },
};

const baseMsgAddCredentialResponse: object = {};

export const MsgAddCredentialResponse = {
  encode(
    _: MsgAddCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddCredentialResponse,
    } as MsgAddCredentialResponse;
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

  fromJSON(_: any): MsgAddCredentialResponse {
    const message = {
      ...baseMsgAddCredentialResponse,
    } as MsgAddCredentialResponse;
    return message;
  },

  toJSON(_: MsgAddCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddCredentialResponse>
  ): MsgAddCredentialResponse {
    const message = {
      ...baseMsgAddCredentialResponse,
    } as MsgAddCredentialResponse;
    return message;
  },
};

/** Msg defines the did Msg service. */
export interface Msg {
  /** AddDid defines a method for adding a DID. */
  AddDid(request: MsgAddDid): Promise<MsgAddDidResponse>;
  /** AddCredential defines a method for adding a credential to the signer's DID. */
  AddCredential(request: MsgAddCredential): Promise<MsgAddCredentialResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AddDid(request: MsgAddDid): Promise<MsgAddDidResponse> {
    const data = MsgAddDid.encode(request).finish();
    const promise = this.rpc.request("did.Msg", "AddDid", data);
    return promise.then((data) => MsgAddDidResponse.decode(new Reader(data)));
  }

  AddCredential(request: MsgAddCredential): Promise<MsgAddCredentialResponse> {
    const data = MsgAddCredential.encode(request).finish();
    const promise = this.rpc.request("did.Msg", "AddCredential", data);
    return promise.then((data) =>
      MsgAddCredentialResponse.decode(new Reader(data))
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
