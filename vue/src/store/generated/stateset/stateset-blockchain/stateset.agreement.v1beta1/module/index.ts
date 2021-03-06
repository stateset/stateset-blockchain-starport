// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTerminateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgExpireAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgActivateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgRenewAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgDeleteAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgAmendAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgFinanceAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgUpdateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";


const types = [
  ["/stateset.agreement.v1beta1.MsgTerminateAgreementRequest", MsgTerminateAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgExpireAgreementRequest", MsgExpireAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgActivateAgreementRequest", MsgActivateAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgRenewAgreementRequest", MsgRenewAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgDeleteAgreementRequest", MsgDeleteAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgAmendAgreementRequest", MsgAmendAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgFinanceAgreementRequest", MsgFinanceAgreementRequest],
  ["/stateset.agreement.v1beta1.MsgUpdateAgreementRequest", MsgUpdateAgreementRequest],
  
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
    msgTerminateAgreementRequest: (data: MsgTerminateAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgTerminateAgreementRequest", value: data }),
    msgExpireAgreementRequest: (data: MsgExpireAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgExpireAgreementRequest", value: data }),
    msgActivateAgreementRequest: (data: MsgActivateAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgActivateAgreementRequest", value: data }),
    msgRenewAgreementRequest: (data: MsgRenewAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgRenewAgreementRequest", value: data }),
    msgDeleteAgreementRequest: (data: MsgDeleteAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgDeleteAgreementRequest", value: data }),
    msgAmendAgreementRequest: (data: MsgAmendAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgAmendAgreementRequest", value: data }),
    msgFinanceAgreementRequest: (data: MsgFinanceAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgFinanceAgreementRequest", value: data }),
    msgUpdateAgreementRequest: (data: MsgUpdateAgreementRequest): EncodeObject => ({ typeUrl: "/stateset.agreement.v1beta1.MsgUpdateAgreementRequest", value: data }),
    
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
