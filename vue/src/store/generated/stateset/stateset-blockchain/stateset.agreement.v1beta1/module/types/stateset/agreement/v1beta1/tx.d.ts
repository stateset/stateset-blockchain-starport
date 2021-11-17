import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.agreement.v1beta1";
/** State is an enum which refers to state of an agreement */
export declare enum State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    request = 1,
    active = 2,
    amended = 3,
    renewed = 4,
    terminated = 5,
    expired = 6,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
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
export interface MsgDeleteAgreementResponse {
}
/** MsgActivateAgreementRequest is the Msg/ActivateAgreement request type. */
export interface MsgActivateAgreementRequest {
    sneder: string;
    agreementId: string;
    activationDate: string;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgActivateAgreementResponse {
}
/** MsgRenewRenewRequest is the Msg/RenewAgreement request type. */
export interface MsgRenewAgreementRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    agreementId: string;
}
/** MsgRenewAgreementResponse is the Msg/SignData response type. */
export interface MsgRenewAgreementResponse {
}
/** MsgAmendAgreementRequest is the Msg/AmendAgreement request type. */
export interface MsgAmendAgreementRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    agreementId: string;
}
/** MsgAmendResponse is the Msg/AmendAgreement response type. */
export interface MsgAmendAgreementResponse {
}
/** MsgTerminateAgreementRequest is the Msg/TerminateAgreement request type. */
export interface MsgTerminateAgreementRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    agreementId: string;
}
/** MsgTerminateResponse is the Msg/TerminateAgreement response type. */
export interface MsgTerminateAgreementResponse {
}
/** MsgExpireAgreementRequest is the Msg/ExpireAgreement request type. */
export interface MsgExpireAgreementRequest {
    /** sender is the address of the sender of the transaction. */
    sender: string;
    agreementId: string;
}
/** MsgExpireResponse is the Msg/ExpireAgreement response type. */
export interface MsgExpireAgreementResponse {
}
export declare const Agreement: {
    encode(message: Agreement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Agreement;
    fromJSON(object: any): Agreement;
    toJSON(message: Agreement): unknown;
    fromPartial(object: DeepPartial<Agreement>): Agreement;
};
export declare const AgreementFilters: {
    encode(message: AgreementFilters, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AgreementFilters;
    fromJSON(object: any): AgreementFilters;
    toJSON(message: AgreementFilters): unknown;
    fromPartial(object: DeepPartial<AgreementFilters>): AgreementFilters;
};
export declare const MsgCreateAgreementRequest: {
    encode(message: MsgCreateAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAgreementRequest;
    fromJSON(object: any): MsgCreateAgreementRequest;
    toJSON(message: MsgCreateAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateAgreementRequest>): MsgCreateAgreementRequest;
};
export declare const MsgCreateAgreementResponse: {
    encode(message: MsgCreateAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAgreementResponse;
    fromJSON(object: any): MsgCreateAgreementResponse;
    toJSON(message: MsgCreateAgreementResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAgreementResponse>): MsgCreateAgreementResponse;
};
export declare const MsgUpdateAgreementRequest: {
    encode(message: MsgUpdateAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAgreementRequest;
    fromJSON(object: any): MsgUpdateAgreementRequest;
    toJSON(message: MsgUpdateAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAgreementRequest>): MsgUpdateAgreementRequest;
};
export declare const MsgUpdateAgreementResponse: {
    encode(message: MsgUpdateAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAgreementResponse;
    fromJSON(object: any): MsgUpdateAgreementResponse;
    toJSON(message: MsgUpdateAgreementResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAgreementResponse>): MsgUpdateAgreementResponse;
};
export declare const MsgDeleteAgreementRequest: {
    encode(message: MsgDeleteAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAgreementRequest;
    fromJSON(object: any): MsgDeleteAgreementRequest;
    toJSON(message: MsgDeleteAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAgreementRequest>): MsgDeleteAgreementRequest;
};
export declare const MsgDeleteAgreementResponse: {
    encode(_: MsgDeleteAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAgreementResponse;
    fromJSON(_: any): MsgDeleteAgreementResponse;
    toJSON(_: MsgDeleteAgreementResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAgreementResponse>): MsgDeleteAgreementResponse;
};
export declare const MsgActivateAgreementRequest: {
    encode(message: MsgActivateAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgActivateAgreementRequest;
    fromJSON(object: any): MsgActivateAgreementRequest;
    toJSON(message: MsgActivateAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgActivateAgreementRequest>): MsgActivateAgreementRequest;
};
export declare const MsgActivateAgreementResponse: {
    encode(_: MsgActivateAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgActivateAgreementResponse;
    fromJSON(_: any): MsgActivateAgreementResponse;
    toJSON(_: MsgActivateAgreementResponse): unknown;
    fromPartial(_: DeepPartial<MsgActivateAgreementResponse>): MsgActivateAgreementResponse;
};
export declare const MsgRenewAgreementRequest: {
    encode(message: MsgRenewAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRenewAgreementRequest;
    fromJSON(object: any): MsgRenewAgreementRequest;
    toJSON(message: MsgRenewAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgRenewAgreementRequest>): MsgRenewAgreementRequest;
};
export declare const MsgRenewAgreementResponse: {
    encode(_: MsgRenewAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRenewAgreementResponse;
    fromJSON(_: any): MsgRenewAgreementResponse;
    toJSON(_: MsgRenewAgreementResponse): unknown;
    fromPartial(_: DeepPartial<MsgRenewAgreementResponse>): MsgRenewAgreementResponse;
};
export declare const MsgAmendAgreementRequest: {
    encode(message: MsgAmendAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAmendAgreementRequest;
    fromJSON(object: any): MsgAmendAgreementRequest;
    toJSON(message: MsgAmendAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgAmendAgreementRequest>): MsgAmendAgreementRequest;
};
export declare const MsgAmendAgreementResponse: {
    encode(_: MsgAmendAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAmendAgreementResponse;
    fromJSON(_: any): MsgAmendAgreementResponse;
    toJSON(_: MsgAmendAgreementResponse): unknown;
    fromPartial(_: DeepPartial<MsgAmendAgreementResponse>): MsgAmendAgreementResponse;
};
export declare const MsgTerminateAgreementRequest: {
    encode(message: MsgTerminateAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTerminateAgreementRequest;
    fromJSON(object: any): MsgTerminateAgreementRequest;
    toJSON(message: MsgTerminateAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgTerminateAgreementRequest>): MsgTerminateAgreementRequest;
};
export declare const MsgTerminateAgreementResponse: {
    encode(_: MsgTerminateAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTerminateAgreementResponse;
    fromJSON(_: any): MsgTerminateAgreementResponse;
    toJSON(_: MsgTerminateAgreementResponse): unknown;
    fromPartial(_: DeepPartial<MsgTerminateAgreementResponse>): MsgTerminateAgreementResponse;
};
export declare const MsgExpireAgreementRequest: {
    encode(message: MsgExpireAgreementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExpireAgreementRequest;
    fromJSON(object: any): MsgExpireAgreementRequest;
    toJSON(message: MsgExpireAgreementRequest): unknown;
    fromPartial(object: DeepPartial<MsgExpireAgreementRequest>): MsgExpireAgreementRequest;
};
export declare const MsgExpireAgreementResponse: {
    encode(_: MsgExpireAgreementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExpireAgreementResponse;
    fromJSON(_: any): MsgExpireAgreementResponse;
    toJSON(_: MsgExpireAgreementResponse): unknown;
    fromPartial(_: DeepPartial<MsgExpireAgreementResponse>): MsgExpireAgreementResponse;
};
/** Msg is the stateset.agreement.v1beta1 Msg service */
export interface Msg {
    /** Create defines a method to create a new agreement. */
    Create(request: MsgCreateAgreementRequest): Promise<MsgCreateAgreementResponse>;
    /** Update defines a method to update an agreement. */
    Update(request: MsgUpdateAgreementRequest): Promise<MsgUpdateAgreementResponse>;
    /** Delete defines a method to create a new agreement. */
    Delete(request: MsgDeleteAgreementRequest): Promise<MsgDeleteAgreementResponse>;
    /** Activate defines a method to activate an agreement */
    Activate(request: MsgActivateAgreementRequest): Promise<MsgActivateAgreementResponse>;
    /** Renew defines a method to renew an agreement */
    Renew(request: MsgRenewAgreementRequest): Promise<MsgRenewAgreementResponse>;
    /** Amend defines a method to amend an agreement */
    Amend(request: MsgAmendAgreementRequest): Promise<MsgAmendAgreementResponse>;
    /** Terminate defines a method to terminate an agreement */
    Terminate(request: MsgTerminateAgreementRequest): Promise<MsgTerminateAgreementResponse>;
    /** Expire defines a method to expire an agreement */
    Expire(request: MsgExpireAgreementRequest): Promise<MsgExpireAgreementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: MsgCreateAgreementRequest): Promise<MsgCreateAgreementResponse>;
    Update(request: MsgUpdateAgreementRequest): Promise<MsgUpdateAgreementResponse>;
    Delete(request: MsgDeleteAgreementRequest): Promise<MsgDeleteAgreementResponse>;
    Activate(request: MsgActivateAgreementRequest): Promise<MsgActivateAgreementResponse>;
    Renew(request: MsgRenewAgreementRequest): Promise<MsgRenewAgreementResponse>;
    Amend(request: MsgAmendAgreementRequest): Promise<MsgAmendAgreementResponse>;
    Terminate(request: MsgTerminateAgreementRequest): Promise<MsgTerminateAgreementResponse>;
    Expire(request: MsgExpireAgreementRequest): Promise<MsgExpireAgreementResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
