// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgUpdateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgActivateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgAmendAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgExpireAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgTerminateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgFinanceAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgRenewAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
const types = [
    ["/stateset.agreement.v1beta1.MsgDeleteAgreementRequest", MsgDeleteAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgUpdateAgreementRequest", MsgUpdateAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgActivateAgreementRequest", MsgActivateAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgAmendAgreementRequest", MsgAmendAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgExpireAgreementRequest", MsgExpireAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgTerminateAgreementRequest", MsgTerminateAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgFinanceAgreementRequest", MsgFinanceAgreementRequest],
    ["/stateset.agreement.v1beta1.MsgRenewAgreementRequest", MsgRenewAgreementRequest],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgDeleteAgreementRequest", value: data }),
        msgUpdateAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgUpdateAgreementRequest", value: data }),
        msgActivateAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgActivateAgreementRequest", value: data }),
        msgAmendAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgAmendAgreementRequest", value: data }),
        msgExpireAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgExpireAgreementRequest", value: data }),
        msgTerminateAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgTerminateAgreementRequest", value: data }),
        msgFinanceAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgFinanceAgreementRequest", value: data }),
        msgRenewAgreementRequest: (data) => ({ typeUrl: "/stateset.agreement.v1beta1.MsgRenewAgreementRequest", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
