import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { DidCredential } from "./module/types/stateset/did/v1beta1/did";
import { Claim } from "./module/types/stateset/did/v1beta1/did";
import { StatesetDid } from "./module/types/stateset/did/v1beta1/did";
import { Secret } from "./module/types/stateset/did/v1beta1/did";
import { BaseDidDoc } from "./module/types/stateset/did/v1beta1/diddoc";
export { DidCredential, Claim, StatesetDid, Secret, BaseDidDoc };
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
        DidDoc: {},
        AllDids: {},
        AllDidDocs: {},
        AddressFromDid: {},
        AddressFromBase58EncodedPubkey: {},
        _Structure: {
            DidCredential: getStructure(DidCredential.fromPartial({})),
            Claim: getStructure(Claim.fromPartial({})),
            StatesetDid: getStructure(StatesetDid.fromPartial({})),
            Secret: getStructure(Secret.fromPartial({})),
            BaseDidDoc: getStructure(BaseDidDoc.fromPartial({})),
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
        getDidDoc: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DidDoc[JSON.stringify(params)] ?? {};
        },
        getAllDids: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AllDids[JSON.stringify(params)] ?? {};
        },
        getAllDidDocs: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AllDidDocs[JSON.stringify(params)] ?? {};
        },
        getAddressFromDid: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AddressFromDid[JSON.stringify(params)] ?? {};
        },
        getAddressFromBase58EncodedPubkey: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AddressFromBase58EncodedPubkey[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: did initialized!');
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
        async QueryDidDoc({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDidDoc(key.did)).data;
                commit('QUERY', { query: 'DidDoc', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDidDoc', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDidDoc']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryDidDoc', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAllDids({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAllDids()).data;
                commit('QUERY', { query: 'AllDids', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAllDids', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAllDids']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAllDids', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAllDidDocs({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAllDidDocs()).data;
                commit('QUERY', { query: 'AllDidDocs', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAllDidDocs', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAllDidDocs']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAllDidDocs', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAddressFromDid({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAddressFromDid(key.did)).data;
                commit('QUERY', { query: 'AddressFromDid', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAddressFromDid', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAddressFromDid']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAddressFromDid', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAddressFromBase58EncodedPubkey({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAddressFromBase58EncodedPubkey(key.pubKey)).data;
                commit('QUERY', { query: 'AddressFromBase58EncodedPubkey', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAddressFromBase58EncodedPubkey', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAddressFromBase58EncodedPubkey']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAddressFromBase58EncodedPubkey', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgAddDid({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgAddDid(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgAddDid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgAddDid:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgAddCredential({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgAddCredential(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgAddCredential:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgAddCredential:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgAddDid({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgAddDid(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgAddDid:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgAddDid:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgAddCredential({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgAddCredential(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgAddCredential:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgAddCredential:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
