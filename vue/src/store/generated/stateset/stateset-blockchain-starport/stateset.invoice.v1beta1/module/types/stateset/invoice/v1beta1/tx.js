/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "stateset.invoice.v1beta1";
/** State is an enum which refers to state of an ourchase order */
export var State;
(function (State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    State[State["invalid"] = 0] = "invalid";
    State[State["request"] = 1] = "request";
    State[State["paid"] = 2] = "paid";
    State[State["canceled"] = 3] = "canceled";
    State[State["factored"] = 4] = "factored";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));
export function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return State.invalid;
        case 1:
        case "request":
            return State.request;
        case 2:
        case "paid":
            return State.paid;
        case 3:
        case "canceled":
            return State.canceled;
        case 4:
        case "factored":
            return State.factored;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
export function stateToJSON(object) {
    switch (object) {
        case State.invalid:
            return "invalid";
        case State.request:
            return "request";
        case State.paid:
            return "paid";
        case State.canceled:
            return "canceled";
        case State.factored:
            return "factored";
        default:
            return "UNKNOWN";
    }
}
const baseInvoice = {
    creator: "",
    invoiceId: "",
    invoiceNumber: "",
    invoiceName: "",
    billingReason: "",
    amountDue: "",
    amountPaid: "",
    amountRemaining: "",
    subtotal: "",
    total: "",
    party: "",
    counterparty: "",
    factor: "",
    dueDate: "",
    periodStartDate: "",
    periodEndDate: "",
};
export const Invoice = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        if (message.invoiceNumber !== "") {
            writer.uint32(26).string(message.invoiceNumber);
        }
        if (message.invoiceName !== "") {
            writer.uint32(34).string(message.invoiceName);
        }
        if (message.billingReason !== "") {
            writer.uint32(42).string(message.billingReason);
        }
        if (message.amountDue !== "") {
            writer.uint32(50).string(message.amountDue);
        }
        if (message.amountPaid !== "") {
            writer.uint32(58).string(message.amountPaid);
        }
        if (message.amountRemaining !== "") {
            writer.uint32(66).string(message.amountRemaining);
        }
        if (message.subtotal !== "") {
            writer.uint32(74).string(message.subtotal);
        }
        if (message.total !== "") {
            writer.uint32(82).string(message.total);
        }
        if (message.party !== "") {
            writer.uint32(90).string(message.party);
        }
        if (message.counterparty !== "") {
            writer.uint32(98).string(message.counterparty);
        }
        if (message.factor !== "") {
            writer.uint32(106).string(message.factor);
        }
        if (message.dueDate !== "") {
            writer.uint32(114).string(message.dueDate);
        }
        if (message.periodStartDate !== "") {
            writer.uint32(122).string(message.periodStartDate);
        }
        if (message.periodEndDate !== "") {
            writer.uint32(130).string(message.periodEndDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInvoice };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
                    break;
                case 3:
                    message.invoiceNumber = reader.string();
                    break;
                case 4:
                    message.invoiceName = reader.string();
                    break;
                case 5:
                    message.billingReason = reader.string();
                    break;
                case 6:
                    message.amountDue = reader.string();
                    break;
                case 7:
                    message.amountPaid = reader.string();
                    break;
                case 8:
                    message.amountRemaining = reader.string();
                    break;
                case 9:
                    message.subtotal = reader.string();
                    break;
                case 10:
                    message.total = reader.string();
                    break;
                case 11:
                    message.party = reader.string();
                    break;
                case 12:
                    message.counterparty = reader.string();
                    break;
                case 13:
                    message.factor = reader.string();
                    break;
                case 14:
                    message.dueDate = reader.string();
                    break;
                case 15:
                    message.periodStartDate = reader.string();
                    break;
                case 16:
                    message.periodEndDate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInvoice };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
            message.invoiceNumber = String(object.invoiceNumber);
        }
        else {
            message.invoiceNumber = "";
        }
        if (object.invoiceName !== undefined && object.invoiceName !== null) {
            message.invoiceName = String(object.invoiceName);
        }
        else {
            message.invoiceName = "";
        }
        if (object.billingReason !== undefined && object.billingReason !== null) {
            message.billingReason = String(object.billingReason);
        }
        else {
            message.billingReason = "";
        }
        if (object.amountDue !== undefined && object.amountDue !== null) {
            message.amountDue = String(object.amountDue);
        }
        else {
            message.amountDue = "";
        }
        if (object.amountPaid !== undefined && object.amountPaid !== null) {
            message.amountPaid = String(object.amountPaid);
        }
        else {
            message.amountPaid = "";
        }
        if (object.amountRemaining !== undefined &&
            object.amountRemaining !== null) {
            message.amountRemaining = String(object.amountRemaining);
        }
        else {
            message.amountRemaining = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = String(object.subtotal);
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = String(object.total);
        }
        else {
            message.total = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = String(object.party);
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
        }
        if (object.factor !== undefined && object.factor !== null) {
            message.factor = String(object.factor);
        }
        else {
            message.factor = "";
        }
        if (object.dueDate !== undefined && object.dueDate !== null) {
            message.dueDate = String(object.dueDate);
        }
        else {
            message.dueDate = "";
        }
        if (object.periodStartDate !== undefined &&
            object.periodStartDate !== null) {
            message.periodStartDate = String(object.periodStartDate);
        }
        else {
            message.periodStartDate = "";
        }
        if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
            message.periodEndDate = String(object.periodEndDate);
        }
        else {
            message.periodEndDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        message.invoiceNumber !== undefined &&
            (obj.invoiceNumber = message.invoiceNumber);
        message.invoiceName !== undefined &&
            (obj.invoiceName = message.invoiceName);
        message.billingReason !== undefined &&
            (obj.billingReason = message.billingReason);
        message.amountDue !== undefined && (obj.amountDue = message.amountDue);
        message.amountPaid !== undefined && (obj.amountPaid = message.amountPaid);
        message.amountRemaining !== undefined &&
            (obj.amountRemaining = message.amountRemaining);
        message.subtotal !== undefined && (obj.subtotal = message.subtotal);
        message.total !== undefined && (obj.total = message.total);
        message.party !== undefined && (obj.party = message.party);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.factor !== undefined && (obj.factor = message.factor);
        message.dueDate !== undefined && (obj.dueDate = message.dueDate);
        message.periodStartDate !== undefined &&
            (obj.periodStartDate = message.periodStartDate);
        message.periodEndDate !== undefined &&
            (obj.periodEndDate = message.periodEndDate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInvoice };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
            message.invoiceNumber = object.invoiceNumber;
        }
        else {
            message.invoiceNumber = "";
        }
        if (object.invoiceName !== undefined && object.invoiceName !== null) {
            message.invoiceName = object.invoiceName;
        }
        else {
            message.invoiceName = "";
        }
        if (object.billingReason !== undefined && object.billingReason !== null) {
            message.billingReason = object.billingReason;
        }
        else {
            message.billingReason = "";
        }
        if (object.amountDue !== undefined && object.amountDue !== null) {
            message.amountDue = object.amountDue;
        }
        else {
            message.amountDue = "";
        }
        if (object.amountPaid !== undefined && object.amountPaid !== null) {
            message.amountPaid = object.amountPaid;
        }
        else {
            message.amountPaid = "";
        }
        if (object.amountRemaining !== undefined &&
            object.amountRemaining !== null) {
            message.amountRemaining = object.amountRemaining;
        }
        else {
            message.amountRemaining = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = object.subtotal;
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = object.party;
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
        }
        if (object.factor !== undefined && object.factor !== null) {
            message.factor = object.factor;
        }
        else {
            message.factor = "";
        }
        if (object.dueDate !== undefined && object.dueDate !== null) {
            message.dueDate = object.dueDate;
        }
        else {
            message.dueDate = "";
        }
        if (object.periodStartDate !== undefined &&
            object.periodStartDate !== null) {
            message.periodStartDate = object.periodStartDate;
        }
        else {
            message.periodStartDate = "";
        }
        if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
            message.periodEndDate = object.periodEndDate;
        }
        else {
            message.periodEndDate = "";
        }
        return message;
    },
};
const baseInvoiceFilters = { owner: "", state: "" };
export const InvoiceFilters = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.state !== "") {
            writer.uint32(18).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInvoiceFilters };
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
    fromJSON(object) {
        const message = { ...baseInvoiceFilters };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        else {
            message.state = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInvoiceFilters };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        else {
            message.state = "";
        }
        return message;
    },
};
const baseMsgCreateInvoiceRequest = {
    creator: "",
    invoiceId: "",
    invoiceNumber: "",
    invoiceName: "",
    billingReason: "",
    amountDue: "",
    amountPaid: "",
    amountRemaining: "",
    subtotal: "",
    total: "",
    party: "",
    counterparty: "",
    factor: "",
    dueDate: "",
    periodStartDate: "",
    periodEndDate: "",
};
export const MsgCreateInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        if (message.invoiceNumber !== "") {
            writer.uint32(26).string(message.invoiceNumber);
        }
        if (message.invoiceName !== "") {
            writer.uint32(34).string(message.invoiceName);
        }
        if (message.billingReason !== "") {
            writer.uint32(42).string(message.billingReason);
        }
        if (message.amountDue !== "") {
            writer.uint32(50).string(message.amountDue);
        }
        if (message.amountPaid !== "") {
            writer.uint32(58).string(message.amountPaid);
        }
        if (message.amountRemaining !== "") {
            writer.uint32(66).string(message.amountRemaining);
        }
        if (message.subtotal !== "") {
            writer.uint32(74).string(message.subtotal);
        }
        if (message.total !== "") {
            writer.uint32(82).string(message.total);
        }
        if (message.party !== "") {
            writer.uint32(90).string(message.party);
        }
        if (message.counterparty !== "") {
            writer.uint32(98).string(message.counterparty);
        }
        if (message.factor !== "") {
            writer.uint32(106).string(message.factor);
        }
        if (message.dueDate !== "") {
            writer.uint32(114).string(message.dueDate);
        }
        if (message.periodStartDate !== "") {
            writer.uint32(122).string(message.periodStartDate);
        }
        if (message.periodEndDate !== "") {
            writer.uint32(130).string(message.periodEndDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateInvoiceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
                    break;
                case 3:
                    message.invoiceNumber = reader.string();
                    break;
                case 4:
                    message.invoiceName = reader.string();
                    break;
                case 5:
                    message.billingReason = reader.string();
                    break;
                case 6:
                    message.amountDue = reader.string();
                    break;
                case 7:
                    message.amountPaid = reader.string();
                    break;
                case 8:
                    message.amountRemaining = reader.string();
                    break;
                case 9:
                    message.subtotal = reader.string();
                    break;
                case 10:
                    message.total = reader.string();
                    break;
                case 11:
                    message.party = reader.string();
                    break;
                case 12:
                    message.counterparty = reader.string();
                    break;
                case 13:
                    message.factor = reader.string();
                    break;
                case 14:
                    message.dueDate = reader.string();
                    break;
                case 15:
                    message.periodStartDate = reader.string();
                    break;
                case 16:
                    message.periodEndDate = reader.string();
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
            ...baseMsgCreateInvoiceRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
            message.invoiceNumber = String(object.invoiceNumber);
        }
        else {
            message.invoiceNumber = "";
        }
        if (object.invoiceName !== undefined && object.invoiceName !== null) {
            message.invoiceName = String(object.invoiceName);
        }
        else {
            message.invoiceName = "";
        }
        if (object.billingReason !== undefined && object.billingReason !== null) {
            message.billingReason = String(object.billingReason);
        }
        else {
            message.billingReason = "";
        }
        if (object.amountDue !== undefined && object.amountDue !== null) {
            message.amountDue = String(object.amountDue);
        }
        else {
            message.amountDue = "";
        }
        if (object.amountPaid !== undefined && object.amountPaid !== null) {
            message.amountPaid = String(object.amountPaid);
        }
        else {
            message.amountPaid = "";
        }
        if (object.amountRemaining !== undefined &&
            object.amountRemaining !== null) {
            message.amountRemaining = String(object.amountRemaining);
        }
        else {
            message.amountRemaining = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = String(object.subtotal);
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = String(object.total);
        }
        else {
            message.total = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = String(object.party);
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
        }
        if (object.factor !== undefined && object.factor !== null) {
            message.factor = String(object.factor);
        }
        else {
            message.factor = "";
        }
        if (object.dueDate !== undefined && object.dueDate !== null) {
            message.dueDate = String(object.dueDate);
        }
        else {
            message.dueDate = "";
        }
        if (object.periodStartDate !== undefined &&
            object.periodStartDate !== null) {
            message.periodStartDate = String(object.periodStartDate);
        }
        else {
            message.periodStartDate = "";
        }
        if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
            message.periodEndDate = String(object.periodEndDate);
        }
        else {
            message.periodEndDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        message.invoiceNumber !== undefined &&
            (obj.invoiceNumber = message.invoiceNumber);
        message.invoiceName !== undefined &&
            (obj.invoiceName = message.invoiceName);
        message.billingReason !== undefined &&
            (obj.billingReason = message.billingReason);
        message.amountDue !== undefined && (obj.amountDue = message.amountDue);
        message.amountPaid !== undefined && (obj.amountPaid = message.amountPaid);
        message.amountRemaining !== undefined &&
            (obj.amountRemaining = message.amountRemaining);
        message.subtotal !== undefined && (obj.subtotal = message.subtotal);
        message.total !== undefined && (obj.total = message.total);
        message.party !== undefined && (obj.party = message.party);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.factor !== undefined && (obj.factor = message.factor);
        message.dueDate !== undefined && (obj.dueDate = message.dueDate);
        message.periodStartDate !== undefined &&
            (obj.periodStartDate = message.periodStartDate);
        message.periodEndDate !== undefined &&
            (obj.periodEndDate = message.periodEndDate);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateInvoiceRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
            message.invoiceNumber = object.invoiceNumber;
        }
        else {
            message.invoiceNumber = "";
        }
        if (object.invoiceName !== undefined && object.invoiceName !== null) {
            message.invoiceName = object.invoiceName;
        }
        else {
            message.invoiceName = "";
        }
        if (object.billingReason !== undefined && object.billingReason !== null) {
            message.billingReason = object.billingReason;
        }
        else {
            message.billingReason = "";
        }
        if (object.amountDue !== undefined && object.amountDue !== null) {
            message.amountDue = object.amountDue;
        }
        else {
            message.amountDue = "";
        }
        if (object.amountPaid !== undefined && object.amountPaid !== null) {
            message.amountPaid = object.amountPaid;
        }
        else {
            message.amountPaid = "";
        }
        if (object.amountRemaining !== undefined &&
            object.amountRemaining !== null) {
            message.amountRemaining = object.amountRemaining;
        }
        else {
            message.amountRemaining = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = object.subtotal;
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = object.party;
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
        }
        if (object.factor !== undefined && object.factor !== null) {
            message.factor = object.factor;
        }
        else {
            message.factor = "";
        }
        if (object.dueDate !== undefined && object.dueDate !== null) {
            message.dueDate = object.dueDate;
        }
        else {
            message.dueDate = "";
        }
        if (object.periodStartDate !== undefined &&
            object.periodStartDate !== null) {
            message.periodStartDate = object.periodStartDate;
        }
        else {
            message.periodStartDate = "";
        }
        if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
            message.periodEndDate = object.periodEndDate;
        }
        else {
            message.periodEndDate = "";
        }
        return message;
    },
};
const baseMsgCreateInvoiceResponse = { invoiceId: "" };
export const MsgCreateInvoiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.invoiceId !== "") {
            writer.uint32(10).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateInvoiceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invoiceId = reader.string();
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
            ...baseMsgCreateInvoiceResponse,
        };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateInvoiceResponse,
        };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseMsgUpdateInvoiceRequest = {
    sender: "",
    invoiceId: "",
    invoiceNumber: "",
    invoiceName: "",
    billingReason: "",
    amountDue: "",
    amountPaid: "",
    amountRemaining: "",
    subtotal: "",
    total: "",
    party: "",
    counterparty: "",
    factor: "",
    dueDate: "",
    periodStartDate: "",
    periodEndDate: "",
};
export const MsgUpdateInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        if (message.invoiceNumber !== "") {
            writer.uint32(26).string(message.invoiceNumber);
        }
        if (message.invoiceName !== "") {
            writer.uint32(34).string(message.invoiceName);
        }
        if (message.billingReason !== "") {
            writer.uint32(42).string(message.billingReason);
        }
        if (message.amountDue !== "") {
            writer.uint32(50).string(message.amountDue);
        }
        if (message.amountPaid !== "") {
            writer.uint32(58).string(message.amountPaid);
        }
        if (message.amountRemaining !== "") {
            writer.uint32(66).string(message.amountRemaining);
        }
        if (message.subtotal !== "") {
            writer.uint32(74).string(message.subtotal);
        }
        if (message.total !== "") {
            writer.uint32(82).string(message.total);
        }
        if (message.party !== "") {
            writer.uint32(90).string(message.party);
        }
        if (message.counterparty !== "") {
            writer.uint32(98).string(message.counterparty);
        }
        if (message.factor !== "") {
            writer.uint32(106).string(message.factor);
        }
        if (message.dueDate !== "") {
            writer.uint32(114).string(message.dueDate);
        }
        if (message.periodStartDate !== "") {
            writer.uint32(122).string(message.periodStartDate);
        }
        if (message.periodEndDate !== "") {
            writer.uint32(130).string(message.periodEndDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateInvoiceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
                    break;
                case 3:
                    message.invoiceNumber = reader.string();
                    break;
                case 4:
                    message.invoiceName = reader.string();
                    break;
                case 5:
                    message.billingReason = reader.string();
                    break;
                case 6:
                    message.amountDue = reader.string();
                    break;
                case 7:
                    message.amountPaid = reader.string();
                    break;
                case 8:
                    message.amountRemaining = reader.string();
                    break;
                case 9:
                    message.subtotal = reader.string();
                    break;
                case 10:
                    message.total = reader.string();
                    break;
                case 11:
                    message.party = reader.string();
                    break;
                case 12:
                    message.counterparty = reader.string();
                    break;
                case 13:
                    message.factor = reader.string();
                    break;
                case 14:
                    message.dueDate = reader.string();
                    break;
                case 15:
                    message.periodStartDate = reader.string();
                    break;
                case 16:
                    message.periodEndDate = reader.string();
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
            ...baseMsgUpdateInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
            message.invoiceNumber = String(object.invoiceNumber);
        }
        else {
            message.invoiceNumber = "";
        }
        if (object.invoiceName !== undefined && object.invoiceName !== null) {
            message.invoiceName = String(object.invoiceName);
        }
        else {
            message.invoiceName = "";
        }
        if (object.billingReason !== undefined && object.billingReason !== null) {
            message.billingReason = String(object.billingReason);
        }
        else {
            message.billingReason = "";
        }
        if (object.amountDue !== undefined && object.amountDue !== null) {
            message.amountDue = String(object.amountDue);
        }
        else {
            message.amountDue = "";
        }
        if (object.amountPaid !== undefined && object.amountPaid !== null) {
            message.amountPaid = String(object.amountPaid);
        }
        else {
            message.amountPaid = "";
        }
        if (object.amountRemaining !== undefined &&
            object.amountRemaining !== null) {
            message.amountRemaining = String(object.amountRemaining);
        }
        else {
            message.amountRemaining = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = String(object.subtotal);
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = String(object.total);
        }
        else {
            message.total = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = String(object.party);
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = String(object.counterparty);
        }
        else {
            message.counterparty = "";
        }
        if (object.factor !== undefined && object.factor !== null) {
            message.factor = String(object.factor);
        }
        else {
            message.factor = "";
        }
        if (object.dueDate !== undefined && object.dueDate !== null) {
            message.dueDate = String(object.dueDate);
        }
        else {
            message.dueDate = "";
        }
        if (object.periodStartDate !== undefined &&
            object.periodStartDate !== null) {
            message.periodStartDate = String(object.periodStartDate);
        }
        else {
            message.periodStartDate = "";
        }
        if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
            message.periodEndDate = String(object.periodEndDate);
        }
        else {
            message.periodEndDate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        message.invoiceNumber !== undefined &&
            (obj.invoiceNumber = message.invoiceNumber);
        message.invoiceName !== undefined &&
            (obj.invoiceName = message.invoiceName);
        message.billingReason !== undefined &&
            (obj.billingReason = message.billingReason);
        message.amountDue !== undefined && (obj.amountDue = message.amountDue);
        message.amountPaid !== undefined && (obj.amountPaid = message.amountPaid);
        message.amountRemaining !== undefined &&
            (obj.amountRemaining = message.amountRemaining);
        message.subtotal !== undefined && (obj.subtotal = message.subtotal);
        message.total !== undefined && (obj.total = message.total);
        message.party !== undefined && (obj.party = message.party);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty);
        message.factor !== undefined && (obj.factor = message.factor);
        message.dueDate !== undefined && (obj.dueDate = message.dueDate);
        message.periodStartDate !== undefined &&
            (obj.periodStartDate = message.periodStartDate);
        message.periodEndDate !== undefined &&
            (obj.periodEndDate = message.periodEndDate);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        if (object.invoiceNumber !== undefined && object.invoiceNumber !== null) {
            message.invoiceNumber = object.invoiceNumber;
        }
        else {
            message.invoiceNumber = "";
        }
        if (object.invoiceName !== undefined && object.invoiceName !== null) {
            message.invoiceName = object.invoiceName;
        }
        else {
            message.invoiceName = "";
        }
        if (object.billingReason !== undefined && object.billingReason !== null) {
            message.billingReason = object.billingReason;
        }
        else {
            message.billingReason = "";
        }
        if (object.amountDue !== undefined && object.amountDue !== null) {
            message.amountDue = object.amountDue;
        }
        else {
            message.amountDue = "";
        }
        if (object.amountPaid !== undefined && object.amountPaid !== null) {
            message.amountPaid = object.amountPaid;
        }
        else {
            message.amountPaid = "";
        }
        if (object.amountRemaining !== undefined &&
            object.amountRemaining !== null) {
            message.amountRemaining = object.amountRemaining;
        }
        else {
            message.amountRemaining = "";
        }
        if (object.subtotal !== undefined && object.subtotal !== null) {
            message.subtotal = object.subtotal;
        }
        else {
            message.subtotal = "";
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = "";
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = object.party;
        }
        else {
            message.party = "";
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = object.counterparty;
        }
        else {
            message.counterparty = "";
        }
        if (object.factor !== undefined && object.factor !== null) {
            message.factor = object.factor;
        }
        else {
            message.factor = "";
        }
        if (object.dueDate !== undefined && object.dueDate !== null) {
            message.dueDate = object.dueDate;
        }
        else {
            message.dueDate = "";
        }
        if (object.periodStartDate !== undefined &&
            object.periodStartDate !== null) {
            message.periodStartDate = object.periodStartDate;
        }
        else {
            message.periodStartDate = "";
        }
        if (object.periodEndDate !== undefined && object.periodEndDate !== null) {
            message.periodEndDate = object.periodEndDate;
        }
        else {
            message.periodEndDate = "";
        }
        return message;
    },
};
const baseMsgUpdateInvoiceResponse = { invoiceId: "" };
export const MsgUpdateInvoiceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.invoiceId !== "") {
            writer.uint32(10).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateInvoiceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invoiceId = reader.string();
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
            ...baseMsgUpdateInvoiceResponse,
        };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateInvoiceResponse,
        };
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseMsgCancelInvoiceRequest = { sender: "", invoiceId: "" };
export const MsgCancelInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelInvoiceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
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
            ...baseMsgCancelInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCancelInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseMsgCancelInvoiceResponse = {};
export const MsgCancelInvoiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelInvoiceResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgCancelInvoiceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCancelInvoiceResponse,
        };
        return message;
    },
};
const baseMsgDeleteInvoiceRequest = { sender: "", invoiceId: "" };
export const MsgDeleteInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteInvoiceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
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
            ...baseMsgDeleteInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDeleteInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseMsgDeleteInvoiceResponse = {};
export const MsgDeleteInvoiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteInvoiceResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteInvoiceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteInvoiceResponse,
        };
        return message;
    },
};
const baseMsgCompleteInvoiceRequest = { sender: "", invoiceId: "" };
export const MsgCompleteInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCompleteInvoiceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
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
            ...baseMsgCompleteInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCompleteInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseMsgCompleteInvoiceResponse = {};
export const MsgCompleteInvoiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCompleteInvoiceResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgCompleteInvoiceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCompleteInvoiceResponse,
        };
        return message;
    },
};
const baseMsgFactorInvoiceRequest = { sender: "", invoiceId: "" };
export const MsgFactorInvoiceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invoiceId !== "") {
            writer.uint32(18).string(message.invoiceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgFactorInvoiceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invoiceId = reader.string();
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
            ...baseMsgFactorInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = String(object.invoiceId);
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invoiceId !== undefined && (obj.invoiceId = message.invoiceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgFactorInvoiceRequest,
        };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.invoiceId !== undefined && object.invoiceId !== null) {
            message.invoiceId = object.invoiceId;
        }
        else {
            message.invoiceId = "";
        }
        return message;
    },
};
const baseMsgFactorInvoiceResponse = {};
export const MsgFactorInvoiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgFactorInvoiceResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgFactorInvoiceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgFactorInvoiceResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Create(request) {
        const data = MsgCreateInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Msg", "Create", data);
        return promise.then((data) => MsgCreateInvoiceResponse.decode(new Reader(data)));
    }
    Update(request) {
        const data = MsgUpdateInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Msg", "Update", data);
        return promise.then((data) => MsgUpdateInvoiceResponse.decode(new Reader(data)));
    }
    Delete(request) {
        const data = MsgDeleteInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Msg", "Delete", data);
        return promise.then((data) => MsgDeleteInvoiceResponse.decode(new Reader(data)));
    }
    Cancel(request) {
        const data = MsgCancelInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Msg", "Cancel", data);
        return promise.then((data) => MsgCancelInvoiceResponse.decode(new Reader(data)));
    }
    Complete(request) {
        const data = MsgCompleteInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Msg", "Complete", data);
        return promise.then((data) => MsgCompleteInvoiceResponse.decode(new Reader(data)));
    }
    Factor(request) {
        const data = MsgFactorInvoiceRequest.encode(request).finish();
        const promise = this.rpc.request("stateset.invoice.v1beta1.Msg", "Factor", data);
        return promise.then((data) => MsgFactorInvoiceResponse.decode(new Reader(data)));
    }
}
