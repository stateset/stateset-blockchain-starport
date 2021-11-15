import { EventCreateInvoice } from "./module/types/stateset/invoice/v1beta1/events";
import { EventCompleted } from "./module/types/stateset/invoice/v1beta1/events";
import { EventCancelled } from "./module/types/stateset/invoice/v1beta1/events";
import { EventFactored } from "./module/types/stateset/invoice/v1beta1/events";
import { IbcInvoicePacketData } from "./module/types/stateset/invoice/v1beta1/packet";
import { Invoice } from "./module/types/stateset/invoice/v1beta1/tx";
export { EventCreateInvoice, EventCompleted, EventCancelled, EventFactored, IbcInvoicePacketData, Invoice };
declare const _default: {
    namespaced: boolean;
    state: {
        Invoices: {};
        Invoice: {};
        _Structure: {
            EventCreateInvoice: {
                fields: any[];
            };
            EventCompleted: {
                fields: any[];
            };
            EventCancelled: {
                fields: any[];
            };
            EventFactored: {
                fields: any[];
            };
            IbcInvoicePacketData: {
                fields: any[];
            };
            Invoice: {
                fields: any[];
            };
        };
        _Subscriptions: Set<unknown>;
    };
    mutations: {
        RESET_STATE(state: any): void;
        QUERY(state: any, { query, key, value }: {
            query: any;
            key: any;
            value: any;
        }): void;
        SUBSCRIBE(state: any, subscription: any): void;
        UNSUBSCRIBE(state: any, subscription: any): void;
    };
    getters: {
        getInvoices: (state: any) => (params?: {
            params: {};
        }) => any;
        getInvoice: (state: any) => (params?: {
            params: {};
        }) => any;
        getTypeStructure: (state: any) => (type: any) => any;
    };
    actions: {
        init({ dispatch, rootGetters }: {
            dispatch: any;
            rootGetters: any;
        }): void;
        resetState({ commit }: {
            commit: any;
        }): void;
        unsubscribe({ commit }: {
            commit: any;
        }, subscription: any): void;
        StoreUpdate({ state, dispatch }: {
            state: any;
            dispatch: any;
        }): Promise<void>;
        QueryInvoices({ commit, rootGetters, getters }: {
            commit: any;
            rootGetters: any;
            getters: any;
        }, { options: { subscribe, all }, params: { ...key }, query }: {
            options?: {
                subscribe: boolean;
                all: boolean;
            };
            params: {
                [x: string]: any;
            };
            query?: any;
        }): Promise<any>;
        QueryInvoice({ commit, rootGetters, getters }: {
            commit: any;
            rootGetters: any;
            getters: any;
        }, { options: { subscribe, all }, params: { ...key }, query }: {
            options?: {
                subscribe: boolean;
                all: boolean;
            };
            params: {
                [x: string]: any;
            };
            query?: any;
        }): Promise<any>;
    };
};
export default _default;
