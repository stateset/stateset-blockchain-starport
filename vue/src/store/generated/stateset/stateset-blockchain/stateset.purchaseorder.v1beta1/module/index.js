// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgUpdatePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
import { MsgDeletePurchaseOrderRequest } from "./types/stateset/purchaseorder/v1beta1/tx";
const types = [
    ["/stateset.purchaseorder.v1beta1.MsgCreatePurchaseOrderRequest", MsgCreatePurchaseOrderRequest],
    ["/stateset.purchaseorder.v1beta1.MsgUpdatePurchaseOrderRequest", MsgUpdatePurchaseOrderRequest],
    ["/stateset.purchaseorder.v1beta1.MsgDeletePurchaseOrderRequest", MsgDeletePurchaseOrderRequest],
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
        msgCreatePurchaseOrderRequest: (data) => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgCreatePurchaseOrderRequest", value: data }),
        msgUpdatePurchaseOrderRequest: (data) => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgUpdatePurchaseOrderRequest", value: data }),
        msgDeletePurchaseOrderRequest: (data) => ({ typeUrl: "/stateset.purchaseorder.v1beta1.MsgDeletePurchaseOrderRequest", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
