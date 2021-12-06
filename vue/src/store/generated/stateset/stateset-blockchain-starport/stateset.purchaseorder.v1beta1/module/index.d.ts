import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelPurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgCreatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgFinancePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgUpdatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgDeletePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
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
    msgCancelPurchaseOrderRequest: (data: MsgCancelPurchaseOrderRequest) => EncodeObject;
    msgCreatePurchaseOrderRequest: (data: MsgCreatePurchaseOrderRequest) => EncodeObject;
    msgFinancePurchaseOrderRequest: (data: MsgFinancePurchaseOrderRequest) => EncodeObject;
    msgUpdatePurchaseOrderRequest: (data: MsgUpdatePurchaseOrderRequest) => EncodeObject;
    msgDeletePurchaseOrderRequest: (data: MsgDeletePurchaseOrderRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
