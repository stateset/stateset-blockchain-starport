import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgUpdateInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgFactorInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgCancelInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
import { MsgDeleteInvoiceRequest } from "./types/stateset/invoice/v1beta1/tx";
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
    msgCreateInvoiceRequest: (data: MsgCreateInvoiceRequest) => EncodeObject;
    msgUpdateInvoiceRequest: (data: MsgUpdateInvoiceRequest) => EncodeObject;
    msgFactorInvoiceRequest: (data: MsgFactorInvoiceRequest) => EncodeObject;
    msgCancelInvoiceRequest: (data: MsgCancelInvoiceRequest) => EncodeObject;
    msgDeleteInvoiceRequest: (data: MsgDeleteInvoiceRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
