import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "stateset.agreement.v1beta1";
/** EventCreateAgreement is an event emitted when an agreement is created. */
export interface EventCreateAgreement {
    /** agreement_id is the unique ID of agreement */
    agreementId: string;
    /** creator is the account address creator of the agreement */
    creator: string;
    /** counterparty is the account address of the counterparty of the agreement. */
    counterparty: string;
    /** total_amount is the total number of credits in the credit batch. */
    totalAmount: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate: string;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate: string;
}
/** EventActivated is an event emitted when an agreement is activated. */
export interface EventActivated {
    /** agreement_id is the unique ID of agreement */
    agreementId: string;
    /** activator is the activator of the agreement */
    activator: string;
    /**
     * activation_date is the beginning of the period during which this agreement
     * was activated.
     */
    activationDate: string;
}
/** EventRenewed is an event emitted when an agreement is renewed. */
export interface EventRenewed {
    /** agreement_id is the unique ID of agreement */
    agreementId: string;
    /** renewer is the renewer of the agreement */
    renewer: string;
    /** renewal_date is the beginning of the period during which this agreement was renewed */
    renewalDate: string;
}
/** EventTerminated is an event emitted when an agreement is terminated. */
export interface EventTerminated {
    /** agreement_id is the unique ID of agreement */
    agreementId: string;
    /** terminator is the terminator of the agreement */
    terminator: string;
    /** termination_date is the when this agreement was terminated */
    terminationDate: string;
}
/** EventAmended is an event emitted when an agreement is amended. */
export interface EventAmended {
    /** agreement_id is the unique ID of agreement */
    agreementId: string;
    /** amender is the renewer of the amender */
    amender: string;
    /** amendment_date is the beginning of the period during which this agreement was amended */
    amendmentDate: string;
}
/** EventExpired is an event emitted when an agreement is expired. */
export interface EventExpired {
    /** agreement_id is the unique ID of agreement */
    agreementId: string;
    /** expirer is the renewer of the expirer */
    expirer: string;
    /** expirer_date is the beginning of the period during which this agreement was expired */
    expirationDate: string;
}
export interface EventFinanced {
    agreementId: string;
    financer: string;
    financeDate: string;
}
export declare const EventCreateAgreement: {
    encode(message: EventCreateAgreement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCreateAgreement;
    fromJSON(object: any): EventCreateAgreement;
    toJSON(message: EventCreateAgreement): unknown;
    fromPartial(object: DeepPartial<EventCreateAgreement>): EventCreateAgreement;
};
export declare const EventActivated: {
    encode(message: EventActivated, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventActivated;
    fromJSON(object: any): EventActivated;
    toJSON(message: EventActivated): unknown;
    fromPartial(object: DeepPartial<EventActivated>): EventActivated;
};
export declare const EventRenewed: {
    encode(message: EventRenewed, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventRenewed;
    fromJSON(object: any): EventRenewed;
    toJSON(message: EventRenewed): unknown;
    fromPartial(object: DeepPartial<EventRenewed>): EventRenewed;
};
export declare const EventTerminated: {
    encode(message: EventTerminated, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventTerminated;
    fromJSON(object: any): EventTerminated;
    toJSON(message: EventTerminated): unknown;
    fromPartial(object: DeepPartial<EventTerminated>): EventTerminated;
};
export declare const EventAmended: {
    encode(message: EventAmended, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventAmended;
    fromJSON(object: any): EventAmended;
    toJSON(message: EventAmended): unknown;
    fromPartial(object: DeepPartial<EventAmended>): EventAmended;
};
export declare const EventExpired: {
    encode(message: EventExpired, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventExpired;
    fromJSON(object: any): EventExpired;
    toJSON(message: EventExpired): unknown;
    fromPartial(object: DeepPartial<EventExpired>): EventExpired;
};
export declare const EventFinanced: {
    encode(message: EventFinanced, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventFinanced;
    fromJSON(object: any): EventFinanced;
    toJSON(message: EventFinanced): unknown;
    fromPartial(object: DeepPartial<EventFinanced>): EventFinanced;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
