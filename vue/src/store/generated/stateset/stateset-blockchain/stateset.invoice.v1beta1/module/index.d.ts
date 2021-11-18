import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgFactorInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgDeleteInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgCreateInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgUpdateInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
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
    msgCancelInvoiceRequest: (data: MsgCancelInvoiceRequest) => EncodeObject;
    msgFactorInvoiceRequest: (data: MsgFactorInvoiceRequest) => EncodeObject;
    msgDeleteInvoiceRequest: (data: MsgDeleteInvoiceRequest) => EncodeObject;
    msgCreateInvoiceRequest: (data: MsgCreateInvoiceRequest) => EncodeObject;
    msgUpdateInvoiceRequest: (data: MsgUpdateInvoiceRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
