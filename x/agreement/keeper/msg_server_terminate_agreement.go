package keeper

import (
	"context"
	"fmt"

	"github.com/stateset/stateset-blockchain/x/agreement/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) TerminateAgreement(goCtx context.Context, msg *types.MsgTerminateAgreement) (*types.MsgTerminateAgreementResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	agreement, found := k.GetAgreement(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	if agreement.State != "activated" {
		return nil, sdkerrors.Wrapf(types.ErrWrongAgreementState, "%v", agreement.State)
	}

	agreement.State = "terminated"

	k.SetAgreement(ctx, agreement)

	return &types.MsgTerminatedAgreementResponse{}, nil
}