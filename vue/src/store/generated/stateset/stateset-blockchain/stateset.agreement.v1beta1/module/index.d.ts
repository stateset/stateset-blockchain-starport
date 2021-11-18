import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgActivateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgTerminateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgAmendAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgDeleteAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgRenewAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgExpireAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
import { MsgUpdateAgreementRequest } from "./types/stateset/agreement/v1beta1/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgActivateAgreementRequest: (data: MsgActivateAgreementRequest) => EncodeObject;
    msgTerminateAgreementRequest: (data: MsgTerminateAgreementRequest) => EncodeObject;
    msgAmendAgreementRequest: (data: MsgAmendAgreementRequest) => EncodeObject;
    msgDeleteAgreementRequest: (data: MsgDeleteAgreementRequest) => EncodeObject;
    msgRenewAgreementRequest: (data: MsgRenewAgreementRequest) => EncodeObject;
    msgExpireAgreementRequest: (data: MsgExpireAgreementRequest) => EncodeObject;
    msgUpdateAgreementRequest: (data: MsgUpdateAgreementRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
