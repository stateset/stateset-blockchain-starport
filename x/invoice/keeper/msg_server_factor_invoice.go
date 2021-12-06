package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stateset/stateset-blockchain-starport/x/invoice/types"
)

// Factor Invoice
func (server msgServer) FactorInvoice(goCtx context.Context, msg *types.MsgFactorInvoiceRequest) (*types.MsgFactorInvoiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return nil, err
	}

	err = server.keeper.FactorInvoice(ctx, sender, msg.InvoiceId, msg.Amount)
	if err != nil {
		return nil, err
	}

	invoice, found := k.GetInvoice(ctx, msg.Id)
	invoice.InvoiceStatus = "factored"

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.TypeEvtInvoiceFactored,
			sdk.NewAttribute(types.AttributeKeyInvoiceId, strconv.FormatUint(msg.InvoiceId, 10)),
		),
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Sender),
		),
	})

	return &types.MsgFinanceInvoiceResponse{}, nil
}
