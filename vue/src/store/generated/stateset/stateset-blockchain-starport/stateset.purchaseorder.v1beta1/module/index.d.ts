import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgFinancePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgCancelPurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgDeletePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgCreatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgUpdatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
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
    msgFinancePurchaseOrderRequest: (data: MsgFinancePurchaseOrderRequest) => EncodeObject;
    msgCancelPurchaseOrderRequest: (data: MsgCancelPurchaseOrderRequest) => EncodeObject;
    msgDeletePurchaseOrderRequest: (data: MsgDeletePurchaseOrderRequest) => EncodeObject;
    msgCreatePurchaseOrderRequest: (data: MsgCreatePurchaseOrderRequest) => EncodeObject;
    msgUpdatePurchaseOrderRequest: (data: MsgUpdatePurchaseOrderRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
