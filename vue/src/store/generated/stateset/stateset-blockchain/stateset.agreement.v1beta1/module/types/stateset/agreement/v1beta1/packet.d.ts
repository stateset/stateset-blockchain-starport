import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.agreement.v1beta1";
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
export declare const IbcAgreementPacketData: {
    encode(message: IbcAgreementPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcAgreementPacketData;
    fromJSON(object: any): IbcAgreementPacketData;
    toJSON(message: IbcAgreementPacketData): unknown;
    fromPartial(object: DeepPartial<IbcAgreementPacketData>): IbcAgreementPacketData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
