// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelPurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgCreatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgFinancePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgUpdatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgDeletePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";


const types = [
  ["/stateset.purchaseorder.v1beta1.MsgCancelPurchaseOrderRequest", MsgCancelPurchaseOrderRequest],
  ["/stateset.purchaseorder.v1beta1.MsgCreatePurchaseOrderRequest", MsgCreatePurchaseOrderRequest],
  ["/stateset.purchaseorder.v1beta1.MsgFinancePurchaseOrderRequest", MsgFinancePurchaseOrderRequest],
  ["/stateset.purchaseorder.v1beta1.MsgUpdatePurchaseOrderRequest", MsgUpdatePurchaseOrderRequest],
  ["/stateset.purchaseorder.v1beta1.MsgDeletePurchaseOrderRequest", MsgDeletePurchaseOrderRequest],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCancelPurchaseOrderRequest: (data: MsgCancelPurchaseOrderRequest): EncodeObject => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgCancelPurchaseOrderRequest", value: data }),
    msgCreatePurchaseOrderRequest: (data: MsgCreatePurchaseOrderRequest): EncodeObject => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgCreatePurchaseOrderRequest", value: data }),
    msgFinancePurchaseOrderRequest: (data: MsgFinancePurchaseOrderRequest): EncodeObject => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgFinancePurchaseOrderRequest", value: data }),
    msgUpdatePurchaseOrderRequest: (data: MsgUpdatePurchaseOrderRequest): EncodeObject => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgUpdatePurchaseOrderRequest", value: data }),
    msgDeletePurchaseOrderRequest: (data: MsgDeletePurchaseOrderRequest): EncodeObject => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgDeletePurchaseOrderRequest", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
