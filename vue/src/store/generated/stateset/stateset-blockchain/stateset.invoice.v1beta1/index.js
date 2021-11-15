import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { EventCreateInvoice } from "./module/types/stateset/invoice/v1beta1/events";
import { EventCompleted } from "./module/types/stateset/invoice/v1beta1/events";
import { EventCancelled } from "./module/types/stateset/invoice/v1beta1/events";
import { EventFactored } from "./module/types/stateset/invoice/v1beta1/events";
import { IbcInvoicePacketData } from "./module/types/stateset/invoice/v1beta1/packet";
import { Invoice } from "./module/types/stateset/invoice/v1beta1/tx";
export { EventCreateInvoice, EventCompleted, EventCancelled, EventFactored, IbcInvoicePacketData, Invoice };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Invoices: {},
        Invoice: {},
        _Structure: {
            EventCreateInvoice: getStructure(EventCreateInvoice.fromPartial({})),
            EventCompleted: getStructure(EventCompleted.fromPartial({})),
            EventCancelled: getStructure(EventCancelled.fromPartial({})),
            EventFactored: getStructure(EventFactored.fromPartial({})),
            IbcInvoicePacketData: getStructure(IbcInvoicePacketData.fromPartial({})),
            Invoice: getStructure(Invoice.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getInvoices: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Invoices[JSON.stringify(params)] ?? {};
        },
        getInvoice: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Invoice[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: stateset.invoice.v1beta1 initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    await dispatch(subscription.action, subscription.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryInvoices({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryInvoices()).data;
                commit('QUERY', { query: 'Invoices', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryInvoices', payload: { options: { all }, params: { ...key }, query } });
                return getters['getInvoices']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryInvoices', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryInvoice({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryInvoice(key.invoice_id)).data;
                commit('QUERY', { query: 'Invoice', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryInvoice', payload: { options: { all }, params: { ...key }, query } });
                return getters['getInvoice']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryInvoice', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
    }
};
