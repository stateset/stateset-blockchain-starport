/* eslint-disable */
import { Agreement } from "../../../stateset/agreement/v1beta1/tx";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stateset.agreement.v1beta1";

/** GenesisState defines the genesis state used by agreement module */
export interface GenesisState {
  agreements: Agreement[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.agreements) {
      Agreement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.agreements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agreements.push(Agreement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.agreements = [];
    if (object.agreements !== undefined && object.agreements !== null) {
      for (const e of object.agreements) {
        message.agreements.push(Agreement.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.agreements) {
      obj.agreements = message.agreements.map((e) =>
        e ? Agreement.toJSON(e) : undefined
      );
    } else {
      obj.agreements = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.agreements = [];
    if (object.agreements !== undefined && object.agreements !== null) {
      for (const e of object.agreements) {
        message.agreements.push(Agreement.fromPartial(e));
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