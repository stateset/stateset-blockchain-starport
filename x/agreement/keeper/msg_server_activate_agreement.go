package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stateset/stateset-blockchain-starport/x/agreement/types"
)

func (k msgServer) ActivateAgreement(goCtx context.Context, msg *types.MsgActivateAgreementRequest) (*types.MsgActivateAgreementResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	agreement, found := k.GetAgreement(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	if agreement.State != "requested" {
		return nil, sdkerrors.Wrapf(types.ErrWrongAgreementState, "%v", agreement.State)
	}

	borrower, _ := sdk.AccAddressFromBech32(loan.Borrower)
	collateral, _ := sdk.ParseCoinsNormalized(loan.Collateral)
	k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, borrower, collateral)

	agreement.State = "activated"

	k.SetAgreement(ctx, agreement)

	return &types.MsgActivateAgreementResponse{}, nil
}
