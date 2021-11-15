import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Model } from "./module/types/stateset/wasm/v1beta1/genesis";
import { Code } from "./module/types/stateset/wasm/v1beta1/genesis";
import { Contract } from "./module/types/stateset/wasm/v1beta1/genesis";
import { Params } from "./module/types/stateset/wasm/v1beta1/wasm";
import { CodeInfo } from "./module/types/stateset/wasm/v1beta1/wasm";
import { ContractInfo } from "./module/types/stateset/wasm/v1beta1/wasm";
export { Model, Code, Contract, Params, CodeInfo, ContractInfo };
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
        CodeInfo: {},
        ByteCode: {},
        ContractInfo: {},
        ContractStore: {},
        RawStore: {},
        Params: {},
        _Structure: {
            Model: getStructure(Model.fromPartial({})),
            Code: getStructure(Code.fromPartial({})),
            Contract: getStructure(Contract.fromPartial({})),
            Params: getStructure(Params.fromPartial({})),
            CodeInfo: getStructure(CodeInfo.fromPartial({})),
            ContractInfo: getStructure(ContractInfo.fromPartial({})),
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
        getCodeInfo: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CodeInfo[JSON.stringify(params)] ?? {};
        },
        getByteCode: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ByteCode[JSON.stringify(params)] ?? {};
        },
        getContractInfo: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ContractInfo[JSON.stringify(params)] ?? {};
        },
        getContractStore: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ContractStore[JSON.stringify(params)] ?? {};
        },
        getRawStore: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.RawStore[JSON.stringify(params)] ?? {};
        },
        getParams: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: stateset.wasm.v1beta1 initialized!');
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
        async QueryCodeInfo({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCodeInfo(key.code_id)).data;
                commit('QUERY', { query: 'CodeInfo', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCodeInfo', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCodeInfo']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCodeInfo', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryByteCode({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryByteCode(key.code_id)).data;
                commit('QUERY', { query: 'ByteCode', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryByteCode', payload: { options: { all }, params: { ...key }, query } });
                return getters['getByteCode']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryByteCode', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryContractInfo({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryContractInfo(key.contract_address)).data;
                commit('QUERY', { query: 'ContractInfo', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryContractInfo', payload: { options: { all }, params: { ...key }, query } });
                return getters['getContractInfo']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryContractInfo', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryContractStore({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryContractStore(key.contract_address, query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryContractStore(key.contract_address, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ContractStore', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryContractStore', payload: { options: { all }, params: { ...key }, query } });
                return getters['getContractStore']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryContractStore', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryRawStore({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryRawStore(key.contract_address, query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryRawStore(key.contract_address, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'RawStore', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryRawStore', payload: { options: { all }, params: { ...key }, query } });
                return getters['getRawStore']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryRawStore', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryParams()).data;
                commit('QUERY', { query: 'Params', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: { ...key }, query } });
                return getters['getParams']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgStoreCode({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgStoreCode(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgStoreCode:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgStoreCode:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInstantiateContract({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInstantiateContract(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInstantiateContract:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInstantiateContract:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgExecuteContract({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgExecuteContract(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgExecuteContract:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgExecuteContract:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgMigrateContract({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMigrateContract(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgMigrateContract:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgMigrateContract:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgStoreCode({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgStoreCode(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgStoreCode:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgStoreCode:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInstantiateContract({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInstantiateContract(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInstantiateContract:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInstantiateContract:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgExecuteContract({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgExecuteContract(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgExecuteContract:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgExecuteContract:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgMigrateContract({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMigrateContract(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgMigrateContract:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgMigrateContract:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
