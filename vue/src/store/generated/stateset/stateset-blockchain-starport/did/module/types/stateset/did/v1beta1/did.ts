/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "did";

/** Digital identity credential issued to an stateset DID */
export interface DidCredential {
  credType: string[];
  issuer: string;
  issued: string;
  claim: Claim | undefined;
}

/** The claim section of a credential, indicating if the DID is KYC validated */
export interface Claim {
  id: string;
  KYCValidated: boolean;
}

/** A Stateset DID with public and private keys */
export interface StatesetDid {
  did: string;
  verifyKey: string;
  encryptionPublicKey: string;
  secret: Secret | undefined;
}

/** The private section of an stateset DID */
export interface Secret {
  seed: string;
  signKey: string;
  encryptionPrivateKey: string;
}

const baseDidCredential: object = { credType: "", issuer: "", issued: "" };

export const DidCredential = {
  encode(message: DidCredential, writer: Writer = Writer.create()): Writer {
    for (const v of message.credType) {
      writer.uint32(10).string(v!);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.issued !== "") {
      writer.uint32(26).string(message.issued);
    }
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DidCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDidCredential } as DidCredential;
    message.credType = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credType.push(reader.string());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.issued = reader.string();
          break;
        case 4:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidCredential {
    const message = { ...baseDidCredential } as DidCredential;
    message.credType = [];
    if (object.credType !== undefined && object.credType !== null) {
      for (const e of object.credType) {
        message.credType.push(String(e));
      }
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.issued !== undefined && object.issued !== null) {
      message.issued = String(object.issued);
    } else {
      message.issued = "";
    }
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromJSON(object.claim);
    } else {
      message.claim = undefined;
    }
    return message;
  },

  toJSON(message: DidCredential): unknown {
    const obj: any = {};
    if (message.credType) {
      obj.credType = message.credType.map((e) => e);
    } else {
      obj.credType = [];
    }
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.issued !== undefined && (obj.issued = message.issued);
    message.claim !== undefined &&
      (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DidCredential>): DidCredential {
    const message = { ...baseDidCredential } as DidCredential;
    message.credType = [];
    if (object.credType !== undefined && object.credType !== null) {
      for (const e of object.credType) {
        message.credType.push(e);
      }
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.issued !== undefined && object.issued !== null) {
      message.issued = object.issued;
    } else {
      message.issued = "";
    }
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromPartial(object.claim);
    } else {
      message.claim = undefined;
    }
    return message;
  },
};

const baseClaim: object = { id: "", KYCValidated: false };

export const Claim = {
  encode(message: Claim, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.KYCValidated === true) {
      writer.uint32(16).bool(message.KYCValidated);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaim } as Claim;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.KYCValidated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Claim {
    const message = { ...baseClaim } as Claim;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.KYCValidated !== undefined && object.KYCValidated !== null) {
      message.KYCValidated = Boolean(object.KYCValidated);
    } else {
      message.KYCValidated = false;
    }
    return message;
  },

  toJSON(message: Claim): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.KYCValidated !== undefined &&
      (obj.KYCValidated = message.KYCValidated);
    return obj;
  },

  fromPartial(object: DeepPartial<Claim>): Claim {
    const message = { ...baseClaim } as Claim;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.KYCValidated !== undefined && object.KYCValidated !== null) {
      message.KYCValidated = object.KYCValidated;
    } else {
      message.KYCValidated = false;
    }
    return message;
  },
};

const baseStatesetDid: object = {
  did: "",
  verifyKey: "",
  encryptionPublicKey: "",
};

export const StatesetDid = {
  encode(message: StatesetDid, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.verifyKey !== "") {
      writer.uint32(18).string(message.verifyKey);
    }
    if (message.encryptionPublicKey !== "") {
      writer.uint32(26).string(message.encryptionPublicKey);
    }
    if (message.secret !== undefined) {
      Secret.encode(message.secret, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StatesetDid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStatesetDid } as StatesetDid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.verifyKey = reader.string();
          break;
        case 3:
          message.encryptionPublicKey = reader.string();
          break;
        case 4:
          message.secret = Secret.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatesetDid {
    const message = { ...baseStatesetDid } as StatesetDid;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.verifyKey !== undefined && object.verifyKey !== null) {
      message.verifyKey = String(object.verifyKey);
    } else {
      message.verifyKey = "";
    }
    if (
      object.encryptionPublicKey !== undefined &&
      object.encryptionPublicKey !== null
    ) {
      message.encryptionPublicKey = String(object.encryptionPublicKey);
    } else {
      message.encryptionPublicKey = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = Secret.fromJSON(object.secret);
    } else {
      message.secret = undefined;
    }
    return message;
  },

  toJSON(message: StatesetDid): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.verifyKey !== undefined && (obj.verifyKey = message.verifyKey);
    message.encryptionPublicKey !== undefined &&
      (obj.encryptionPublicKey = message.encryptionPublicKey);
    message.secret !== undefined &&
      (obj.secret = message.secret ? Secret.toJSON(message.secret) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StatesetDid>): StatesetDid {
    const message = { ...baseStatesetDid } as StatesetDid;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.verifyKey !== undefined && object.verifyKey !== null) {
      message.verifyKey = object.verifyKey;
    } else {
      message.verifyKey = "";
    }
    if (
      object.encryptionPublicKey !== undefined &&
      object.encryptionPublicKey !== null
    ) {
      message.encryptionPublicKey = object.encryptionPublicKey;
    } else {
      message.encryptionPublicKey = "";
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = Secret.fromPartial(object.secret);
    } else {
      message.secret = undefined;
    }
    return message;
  },
};

const baseSecret: object = { seed: "", signKey: "", encryptionPrivateKey: "" };

export const Secret = {
  encode(message: Secret, writer: Writer = Writer.create()): Writer {
    if (message.seed !== "") {
      writer.uint32(10).string(message.seed);
    }
    if (message.signKey !== "") {
      writer.uint32(18).string(message.signKey);
    }
    if (message.encryptionPrivateKey !== "") {
      writer.uint32(26).string(message.encryptionPrivateKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecret } as Secret;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.string();
          break;
        case 2:
          message.signKey = reader.string();
          break;
        case 3:
          message.encryptionPrivateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Secret {
    const message = { ...baseSecret } as Secret;
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = String(object.seed);
    } else {
      message.seed = "";
    }
    if (object.signKey !== undefined && object.signKey !== null) {
      message.signKey = String(object.signKey);
    } else {
      message.signKey = "";
    }
    if (
      object.encryptionPrivateKey !== undefined &&
      object.encryptionPrivateKey !== null
    ) {
      message.encryptionPrivateKey = String(object.encryptionPrivateKey);
    } else {
      message.encryptionPrivateKey = "";
    }
    return message;
  },

  toJSON(message: Secret): unknown {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = message.seed);
    message.signKey !== undefined && (obj.signKey = message.signKey);
    message.encryptionPrivateKey !== undefined &&
      (obj.encryptionPrivateKey = message.encryptionPrivateKey);
    return obj;
  },

  fromPartial(object: DeepPartial<Secret>): Secret {
    const message = { ...baseSecret } as Secret;
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = object.seed;
    } else {
      message.seed = "";
    }
    if (object.signKey !== undefined && object.signKey !== null) {
      message.signKey = object.signKey;
    } else {
      message.signKey = "";
    }
    if (
      object.encryptionPrivateKey !== undefined &&
      object.encryptionPrivateKey !== null
    ) {
      message.encryptionPrivateKey = object.encryptionPrivateKey;
    } else {
      message.encryptionPrivateKey = "";
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
