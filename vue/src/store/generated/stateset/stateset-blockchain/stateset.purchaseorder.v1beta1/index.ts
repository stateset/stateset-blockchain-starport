import { txClient, queryClient, MissingWalletError } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { EventCreatePurchaseOrder } from "./module/types/stateset/purchaseorder/v1beta1/events"
import { EventCompleted } from "./module/types/stateset/purchaseorder/v1beta1/events"
import { EventCancelled } from "./module/types/stateset/purchaseorder/v1beta1/events"
import { EventLocked } from "./module/types/stateset/purchaseorder/v1beta1/events"
import { EventFinanced } from "./module/types/stateset/purchaseorder/v1beta1/events"
import { IbcPurchaseOrderPacketData } from "./module/types/stateset/purchaseorder/v1beta1/packet"
import { PurchaseOrder } from "./module/types/stateset/purchaseorder/v1beta1/tx"
import { PurchaseOrderFilters } from "./module/types/stateset/purchaseorder/v1beta1/tx"


export { EventCreatePurchaseOrder, EventCompleted, EventCancelled, EventLocked, EventFinanced, IbcPurchaseOrderPacketData, PurchaseOrder, PurchaseOrderFilters };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				PurchaseOrders: {},
				PurchaseOrder: {},
				
				_Structure: {
						EventCreatePurchaseOrder: getStructure(EventCreatePurchaseOrder.fromPartial({})),
						EventCompleted: getStructure(EventCompleted.fromPartial({})),
						EventCancelled: getStructure(EventCancelled.fromPartial({})),
						EventLocked: getStructure(EventLocked.fromPartial({})),
						EventFinanced: getStructure(EventFinanced.fromPartial({})),
						IbcPurchaseOrderPacketData: getStructure(IbcPurchaseOrderPacketData.fromPartial({})),
						PurchaseOrder: getStructure(PurchaseOrder.fromPartial({})),
						PurchaseOrderFilters: getStructure(PurchaseOrderFilters.fromPartial({})),
						
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
				getPurchaseOrders: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PurchaseOrders[JSON.stringify(params)] ?? {}
		},
				getPurchaseOrder: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PurchaseOrder[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: stateset.purchaseorder.v1beta1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					await dispatch(subscription.action, subscription.payload)
				}catch(e) {
					throw new SpVuexError('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryPurchaseOrders({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPurchaseOrders(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryPurchaseOrders({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PurchaseOrders', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPurchaseOrders', payload: { options: { all }, params: {...key},query }})
				return getters['getPurchaseOrders']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPurchaseOrders', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPurchaseOrder({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPurchaseOrder( key.purchaseorder_id)).data
				
					
				commit('QUERY', { query: 'PurchaseOrder', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPurchaseOrder', payload: { options: { all }, params: {...key},query }})
				return getters['getPurchaseOrder']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPurchaseOrder', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgUpdatePurchaseOrderRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePurchaseOrderRequest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgUpdatePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePurchaseOrderRequest:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePurchaseOrderRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePurchaseOrderRequest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCreatePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePurchaseOrderRequest:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgFinancePurchaseOrderRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgFinancePurchaseOrderRequest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgFinancePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgFinancePurchaseOrderRequest:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCancelPurchaseOrderRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCancelPurchaseOrderRequest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCancelPurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCancelPurchaseOrderRequest:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePurchaseOrderRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePurchaseOrderRequest(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgDeletePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePurchaseOrderRequest:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgUpdatePurchaseOrderRequest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePurchaseOrderRequest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgUpdatePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePurchaseOrderRequest:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgCreatePurchaseOrderRequest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePurchaseOrderRequest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCreatePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePurchaseOrderRequest:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgFinancePurchaseOrderRequest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgFinancePurchaseOrderRequest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgFinancePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgFinancePurchaseOrderRequest:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgCancelPurchaseOrderRequest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCancelPurchaseOrderRequest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCancelPurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCancelPurchaseOrderRequest:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgDeletePurchaseOrderRequest({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePurchaseOrderRequest(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgDeletePurchaseOrderRequest:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePurchaseOrderRequest:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		
	}
}
