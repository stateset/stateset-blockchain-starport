/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { AgreementFilters, Agreement, } from "../../../stateset/agreement/v1beta1/tx";
import { PageRequest } from "../../../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "stateset.agreement.v1beta1";
const baseQueryAgreementsRequest = {};
export const QueryAgreementsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.filters !== undefined) {
            AgreementFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAgreementsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filters = AgreementFilters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAgreementsRequest };
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = AgreementFilters.fromJSON(object.filters);
        }
        else {
            message.filters = undefined;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filters !== undefined &&
            (obj.filters = message.filters
                ? AgreementFilters.toJSON(message.filters)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAgreementsRequest };
        if (object.filters !== undefined && object.filters !== null) {
            message.filters = AgreementFilters.fromPartial(object.filters);
        }
        else {
            message.filters = undefined;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAgreementsResponse = {};
export const QueryAgreementsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.agreements) {
            Agreement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAgreementsResponse,
        };
        message.agreements = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreements.push(Agreement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAgreementsResponse,
        };
        message.agreements = [];
        if (object.agreements !== undefined && object.agreements !== null) {
            for (const e of object.agreements) {
                message.agreements.push(Agreement.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.agreements) {
            obj.agreements = message.agreements.map((e) => e ? Agreement.toJSON(e) : undefined);
        }
        else {
            obj.agreements = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAgreementsResponse,
        };
        message.agreements = [];
        if (object.agreements !== undefined && object.agreements !== null) {
            for (const e of object.agreements) {
                message.agreements.push(Agreement.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAgreementRequest = { agreementId: "" };
export const QueryAgreementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.agreementId !== "") {
            writer.uint32(10).string(message.agreementId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAgreementRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAgreementRequest };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = String(object.agreementId);
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreementId !== undefined &&
            (obj.agreementId = message.agreementId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAgreementRequest };
        if (object.agreementId !== undefined && object.agreementId !== null) {
            message.agreementId = object.agreementId;
        }
        else {
            message.agreementId = "";
        }
        return message;
    },
};
const baseQueryAgreementResponse = {};
export const QueryAgreementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.agreement !== undefined) {
            Agreement.encode(message.agreement, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAgreementResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agreement = Agreement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAgreementResponse };
        if (object.agreement !== undefined && object.agreement !== null) {
            message.agreement = Agreement.fromJSON(object.agreement);
        }
        else {
            message.agreement = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agreement !== undefined &&
            (obj.agreement = message.agreement
                ? Agreement.toJSON(message.agreement)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAgreementResponse };
        if (object.agreement !== undefined && object.agreement !== null) {
            message.agreement = Agreement.fromPartial(object.agreement);
        }
        else {
            message.agreement = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Agreements(request) {
        const data = QueryAgreementsRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Query", "Agreements", data);
        return promise.then((data) => QueryAgreementsResponse.decode(new Reader(data)));
    }
    Agreement(request) {
        const data = QueryAgreementRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.agreement.v1beta1.Query", "Agreement", data);
        return promise.then((data) => QueryAgreementResponse.decode(new Reader(data)));
    }
}
