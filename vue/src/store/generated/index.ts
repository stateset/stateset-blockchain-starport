// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CosmosCosmosSdkCosmosAuthzV1Beta1 from './cosmos/cosmos-sdk/cosmos.authz.v1beta1'
import CosmosCosmosSdkCosmosBankV1Beta1 from './cosmos/cosmos-sdk/cosmos.bank.v1beta1'
import CosmosCosmosSdkCosmosCrisisV1Beta1 from './cosmos/cosmos-sdk/cosmos.crisis.v1beta1'
import CosmosCosmosSdkCosmosDistributionV1Beta1 from './cosmos/cosmos-sdk/cosmos.distribution.v1beta1'
import CosmosCosmosSdkCosmosEvidenceV1Beta1 from './cosmos/cosmos-sdk/cosmos.evidence.v1beta1'
import CosmosCosmosSdkCosmosFeegrantV1Beta1 from './cosmos/cosmos-sdk/cosmos.feegrant.v1beta1'
import CosmosCosmosSdkCosmosGovV1Beta1 from './cosmos/cosmos-sdk/cosmos.gov.v1beta1'
import CosmosCosmosSdkCosmosSlashingV1Beta1 from './cosmos/cosmos-sdk/cosmos.slashing.v1beta1'
import CosmosCosmosSdkCosmosStakingV1Beta1 from './cosmos/cosmos-sdk/cosmos.staking.v1beta1'
import CosmosCosmosSdkCosmosVestingV1Beta1 from './cosmos/cosmos-sdk/cosmos.vesting.v1beta1'
import CosmosIbcGoIbcApplicationsTransferV1 from './cosmos/ibc-go/ibc.applications.transfer.v1'
import StatesetStatesetBlockchainStarportDid from './stateset/stateset-blockchain-starport/did'
import StatesetStatesetBlockchainStarportStatesetAgreementV1Beta1 from './stateset/stateset-blockchain-starport/stateset.agreement.v1beta1'
import StatesetStatesetBlockchainStarportStatesetInvoiceV1Beta1 from './stateset/stateset-blockchain-starport/stateset.invoice.v1beta1'
import StatesetStatesetBlockchainStarportStatesetPurchaseorderV1Beta1 from './stateset/stateset-blockchain-starport/stateset.purchaseorder.v1beta1'
import StatesetStatesetBlockchainDid from './stateset/stateset-blockchain/did'
import StatesetStatesetBlockchainStatesetAgreementV1Beta1 from './stateset/stateset-blockchain/stateset.agreement.v1beta1'
import StatesetStatesetBlockchainStatesetInoviceV1Beta1 from './stateset/stateset-blockchain/stateset.inovice.v1beta1'
import StatesetStatesetBlockchainStatesetInvoiceV1Beta1 from './stateset/stateset-blockchain/stateset.invoice.v1beta1'
import StatesetStatesetBlockchainStatesetPurchaseorderV1Beta1 from './stateset/stateset-blockchain/stateset.purchaseorder.v1beta1'
import StatesetStatesetBlockchainStatesetWasmV1Beta1 from './stateset/stateset-blockchain/stateset.wasm.v1beta1'


export default { 
  CosmosCosmosSdkCosmosAuthzV1Beta1: load(CosmosCosmosSdkCosmosAuthzV1Beta1, 'cosmos.authz.v1beta1'),
  CosmosCosmosSdkCosmosBankV1Beta1: load(CosmosCosmosSdkCosmosBankV1Beta1, 'cosmos.bank.v1beta1'),
  CosmosCosmosSdkCosmosCrisisV1Beta1: load(CosmosCosmosSdkCosmosCrisisV1Beta1, 'cosmos.crisis.v1beta1'),
  CosmosCosmosSdkCosmosDistributionV1Beta1: load(CosmosCosmosSdkCosmosDistributionV1Beta1, 'cosmos.distribution.v1beta1'),
  CosmosCosmosSdkCosmosEvidenceV1Beta1: load(CosmosCosmosSdkCosmosEvidenceV1Beta1, 'cosmos.evidence.v1beta1'),
  CosmosCosmosSdkCosmosFeegrantV1Beta1: load(CosmosCosmosSdkCosmosFeegrantV1Beta1, 'cosmos.feegrant.v1beta1'),
  CosmosCosmosSdkCosmosGovV1Beta1: load(CosmosCosmosSdkCosmosGovV1Beta1, 'cosmos.gov.v1beta1'),
  CosmosCosmosSdkCosmosSlashingV1Beta1: load(CosmosCosmosSdkCosmosSlashingV1Beta1, 'cosmos.slashing.v1beta1'),
  CosmosCosmosSdkCosmosStakingV1Beta1: load(CosmosCosmosSdkCosmosStakingV1Beta1, 'cosmos.staking.v1beta1'),
  CosmosCosmosSdkCosmosVestingV1Beta1: load(CosmosCosmosSdkCosmosVestingV1Beta1, 'cosmos.vesting.v1beta1'),
  CosmosIbcGoIbcApplicationsTransferV1: load(CosmosIbcGoIbcApplicationsTransferV1, 'ibc.applications.transfer.v1'),
  StatesetStatesetBlockchainStarportDid: load(StatesetStatesetBlockchainStarportDid, 'did'),
  StatesetStatesetBlockchainStarportStatesetAgreementV1Beta1: load(StatesetStatesetBlockchainStarportStatesetAgreementV1Beta1, 'stateset.agreement.v1beta1'),
  StatesetStatesetBlockchainStarportStatesetInvoiceV1Beta1: load(StatesetStatesetBlockchainStarportStatesetInvoiceV1Beta1, 'stateset.invoice.v1beta1'),
  StatesetStatesetBlockchainStarportStatesetPurchaseorderV1Beta1: load(StatesetStatesetBlockchainStarportStatesetPurchaseorderV1Beta1, 'stateset.purchaseorder.v1beta1'),
  StatesetStatesetBlockchainDid: load(StatesetStatesetBlockchainDid, 'did'),
  StatesetStatesetBlockchainStatesetAgreementV1Beta1: load(StatesetStatesetBlockchainStatesetAgreementV1Beta1, 'stateset.agreement.v1beta1'),
  StatesetStatesetBlockchainStatesetInoviceV1Beta1: load(StatesetStatesetBlockchainStatesetInoviceV1Beta1, 'stateset.inovice.v1beta1'),
  StatesetStatesetBlockchainStatesetInvoiceV1Beta1: load(StatesetStatesetBlockchainStatesetInvoiceV1Beta1, 'stateset.invoice.v1beta1'),
  StatesetStatesetBlockchainStatesetPurchaseorderV1Beta1: load(StatesetStatesetBlockchainStatesetPurchaseorderV1Beta1, 'stateset.purchaseorder.v1beta1'),
  StatesetStatesetBlockchainStatesetWasmV1Beta1: load(StatesetStatesetBlockchainStatesetWasmV1Beta1, 'stateset.wasm.v1beta1'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
