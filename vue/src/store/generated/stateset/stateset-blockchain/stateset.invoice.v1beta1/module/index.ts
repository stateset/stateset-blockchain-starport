// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgFactorInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgDeleteInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgUpdateInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgCreateInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgCancelInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";


const types = [
  ["/stateset.invoice.v1beta1.MsgFactorInvoiceRequest", MsgFactorInvoiceRequest],
  ["/stateset.invoice.v1beta1.MsgDeleteInvoiceRequest", MsgDeleteInvoiceRequest],
  ["/stateset.invoice.v1beta1.MsgUpdateInvoiceRequest", MsgUpdateInvoiceRequest],
  ["/stateset.invoice.v1beta1.MsgCreateInvoiceRequest", MsgCreateInvoiceRequest],
  ["/stateset.invoice.v1beta1.MsgCancelInvoiceRequest", MsgCancelInvoiceRequest],
  
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
    msgFactorInvoiceRequest: (data: MsgFactorInvoiceRequest): EncodeObject => ({ typeUrl: "/stateset.invoice.v1beta1.MsgFactorInvoiceRequest", value: data }),
    msgDeleteInvoiceRequest: (data: MsgDeleteInvoiceRequest): EncodeObject => ({ typeUrl: "/stateset.invoice.v1beta1.MsgDeleteInvoiceRequest", value: data }),
    msgUpdateInvoiceRequest: (data: MsgUpdateInvoiceRequest): EncodeObject => ({ typeUrl: "/stateset.invoice.v1beta1.MsgUpdateInvoiceRequest", value: data }),
    msgCreateInvoiceRequest: (data: MsgCreateInvoiceRequest): EncodeObject => ({ typeUrl: "/stateset.invoice.v1beta1.MsgCreateInvoiceRequest", value: data }),
    msgCancelInvoiceRequest: (data: MsgCancelInvoiceRequest): EncodeObject => ({ typeUrl: "/stateset.invoice.v1beta1.MsgCancelInvoiceRequest", value: data }),
    
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
