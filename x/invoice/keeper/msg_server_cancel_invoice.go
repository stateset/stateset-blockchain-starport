package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stateset/stateset-blockchain-starport/x/invoice/types"
)

// Cancel Invoice
func (server msgServer) CancelInvoice(goCtx context.Context, msg *types.MsgCancelInvoiceRequest) (*types.MsgCancelInvoiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return nil, err
	}

	err = server.keeper.CancelInvoice(ctx, sender, msg.InvoiceId, msg.amount)
	if err != nil {
		return nil, err
	}

	// Burn a NFT that represents the Invoice DID and Value of the Invoice
	k.bankKeeper.BurnCoins(ctx, did)

	invoice, found := k.GetInvoice(ctx, msg.Id)
	invoice.InvoiceStatus = "cancelled"

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.TypeEvtInvoiceCanceled,
			sdk.NewAttribute(types.AttributeKeyInvoiceId, strconv.FormatUint(msg.InvoiceId, 10)),
		),
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Sender),
		),
	})

	return &types.MsgCancelInvoiceResponse{}, nil
}
