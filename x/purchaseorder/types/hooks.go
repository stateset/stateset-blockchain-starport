package types

import sdk "github.com/cosmos/cosmos-sdk/types"

type PurchaseOrderHooks interface {
	AfterPurchaseOrderCreated(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins)
	AfterFinancePurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins)
	AfterCompletePurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins)
	AfterCancelPurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins)
	AfterLockPurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins)
}

var _ PurchaseOrderHooks = MultiPurchaseOrderHooks{}

// combine multiple hooks, all hook functions are run in array sequence
type MultiPurchaseOrderHooks []PurchaseOrderHooks

// Creates hooks for the PurchaseOrder Module
func NewPurchaseOrderHooks(hooks ...PurchaseOrderHooks) MultiPurchaseOrderHooks {
	return hooks
}

func (h MultiPurchaseOrderHooks) AfterPurchaseOrderCreated(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterPurchaseOrderCreated(ctx, sender, purchaseOrderId, amount)
	}
}

func (h MultiPurchaseOrderHooks) AfterFinancePurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterFinancePurchaseOrder(ctx, sender, purchaseOrderId, amount)
	}
}

func (h MultiPurchaseOrderHooks) AfterCompletePurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterCompletePurchaseOrder(ctx, sender, purchaseOrderId, amount)
	}
}

func (h MultiPurchaseOrderHooks) AfterCancelPurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterCancelPurchaseOrder(ctx, sender, purchaseOrderId, amount)
	}
}

func (h MultiPurchaseOrderHooks) AfterLockPurchaseOrder(ctx sdk.Context, sender sdk.AccAddress, purchaseOrderId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterLockPurchaseOrder(ctx, sender, purchaseOrderId, amount)
	}
}
