/* eslint-disable */
import { Invoice } from "../../../stateset/invoice/v1beta1/tx";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "stateset.invoice.v1beta1";

/** GenesisState defines the genesis state used by agreement module */
export interface GenesisState {
  invoices: Invoice[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.invoices) {
      Invoice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.invoices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invoices.push(Invoice.decode(reader, reader.uint32()));
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
    message.invoices = [];
    if (object.invoices !== undefined && object.invoices !== null) {
      for (const e of object.invoices) {
        message.invoices.push(Invoice.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.invoices) {
      obj.invoices = message.invoices.map((e) =>
        e ? Invoice.toJSON(e) : undefined
      );
    } else {
      obj.invoices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.invoices = [];
    if (object.invoices !== undefined && object.invoices !== null) {
      for (const e of object.invoices) {
        message.invoices.push(Invoice.fromPartial(e));
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
