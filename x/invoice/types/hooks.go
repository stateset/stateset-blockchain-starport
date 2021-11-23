package types

import sdk "github.com/cosmos/cosmos-sdk/types"

type InvoiceHooks interface {
	AfterInvoiceCreated(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins)
	AfterFactorInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins)
	AfterCompleteInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins)
	AfterCancelInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins)
	AfterLockInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins)
}

var _ InvoiceHooks = MultiInvoiceHooks{}

// combine multiple gamm hooks, all hook functions are run in array sequence
type MultiInvoiceHooks []InvoiceHooks

// Creates hooks for the Invoice Module
func NewInvoiceHooks(hooks ...InvoiceHooks) MultiInvoiceHooks {
	return hooks
}

func (h MultiInvoiceHooks) AfterInvoiceCreated(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterInvoiceCreated(ctx, sender, invoiceId, amount)
	}
}

func (h MultiInvoiceHooks) AfterFactorInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterFactorInvoice(ctx, sender, invoiceId, amount)
	}
}

func (h MultiInvoiceHooks) AfterCompleteInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterCompleteInvoice(ctx, sender, invoiceId, amount)
	}
}

func (h MultiInvoiceHooks) AfterCancelInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterCancelInvoice(ctx, sender, invoiceId, amount)
	}
}

func (h MultiInvoiceHooks) AfterLockInvoice(ctx sdk.Context, sender sdk.AccAddress, invoiceId uint64, amount sdk.Coins) {
	for i := range h {
		h[i].AfterLockInvoice(ctx, sender, invoiceId, amount)
	}
}
