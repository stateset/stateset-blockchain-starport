import { EventCreatePurchaseOrder } from "./module/types/stateset/purchaseorder/v1beta1/events";
import { EventCompleted } from "./module/types/stateset/purchaseorder/v1beta1/events";
import { EventCancelled } from "./module/types/stateset/purchaseorder/v1beta1/events";
import { EventLocked } from "./module/types/stateset/purchaseorder/v1beta1/events";
import { EventFinanced } from "./module/types/stateset/purchaseorder/v1beta1/events";
import { IbcPurchaseOrderPacketData } from "./module/types/stateset/purchaseorder/v1beta1/packet";
import { PurchaseOrder } from "./module/types/stateset/purchaseorder/v1beta1/tx";
export { EventCreatePurchaseOrder, EventCompleted, EventCancelled, EventLocked, EventFinanced, IbcPurchaseOrderPacketData, PurchaseOrder };
declare const _default: {
    namespaced: boolean;
    state: {
        PurchaseOrders: {};
        PurchaseOrder: {};
        _Structure: {
            EventCreatePurchaseOrder: {
                fields: any[];
            };
            EventCompleted: {
                fields: any[];
            };
            EventCancelled: {
                fields: any[];
            };
            EventLocked: {
                fields: any[];
            };
            EventFinanced: {
                fields: any[];
            };
            IbcPurchaseOrderPacketData: {
                fields: any[];
            };
            PurchaseOrder: {
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
        getPurchaseOrders: (state: any) => (params?: {
            params: {};
        }) => any;
        getPurchaseOrder: (state: any) => (params?: {
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
        QueryPurchaseOrders({ commit, rootGetters, getters }: {
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
        QueryPurchaseOrder({ commit, rootGetters, getters }: {
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
