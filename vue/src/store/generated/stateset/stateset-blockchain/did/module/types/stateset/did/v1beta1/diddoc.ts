/* eslint-disable */
import { DidCredential } from "../../../stateset/did/v1beta1/did";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "did";

/** BaseDidDoc defines a base DID document type. It implements the DidDoc interface. */
export interface BaseDidDoc {
  did: string;
  pubKey: string;
  credentials: DidCredential[];
}

const baseBaseDidDoc: object = { did: "", pubKey: "" };

export const BaseDidDoc = {
  encode(message: BaseDidDoc, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    for (const v of message.credentials) {
      DidCredential.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BaseDidDoc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseDidDoc } as BaseDidDoc;
    message.credentials = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        case 3:
          message.credentials.push(
            DidCredential.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseDidDoc {
    const message = { ...baseBaseDidDoc } as BaseDidDoc;
    message.credentials = [];
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
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(DidCredential.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BaseDidDoc): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    if (message.credentials) {
      obj.credentials = message.credentials.map((e) =>
        e ? DidCredential.toJSON(e) : undefined
      );
    } else {
      obj.credentials = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BaseDidDoc>): BaseDidDoc {
    const message = { ...baseBaseDidDoc } as BaseDidDoc;
    message.credentials = [];
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
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(DidCredential.fromPartial(e));
      }
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
