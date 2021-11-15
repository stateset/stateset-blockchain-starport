// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExecuteContract } from "./types/stateset/wasm/v1beta1/tx";
import { MsgMigrateContract } from "./types/stateset/wasm/v1beta1/tx";
import { MsgStoreCode } from "./types/stateset/wasm/v1beta1/tx";
import { MsgInstantiateContract } from "./types/stateset/wasm/v1beta1/tx";


const types = [
  ["/stateset.wasm.v1beta1.MsgExecuteContract", MsgExecuteContract],
  ["/stateset.wasm.v1beta1.MsgMigrateContract", MsgMigrateContract],
  ["/stateset.wasm.v1beta1.MsgStoreCode", MsgStoreCode],
  ["/stateset.wasm.v1beta1.MsgInstantiateContract", MsgInstantiateContract],
  
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
    msgExecuteContract: (data: MsgExecuteContract): EncodeObject => ({ typeUrl: "/stateset.wasm.v1beta1.MsgExecuteContract", value: data }),
    msgMigrateContract: (data: MsgMigrateContract): EncodeObject => ({ typeUrl: "/stateset.wasm.v1beta1.MsgMigrateContract", value: data }),
    msgStoreCode: (data: MsgStoreCode): EncodeObject => ({ typeUrl: "/stateset.wasm.v1beta1.MsgStoreCode", value: data }),
    msgInstantiateContract: (data: MsgInstantiateContract): EncodeObject => ({ typeUrl: "/stateset.wasm.v1beta1.MsgInstantiateContract", value: data }),
    
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
