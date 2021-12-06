package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/stateset/stateset-blockchain-starport/testutil/keeper"
	"github.com/stateset/stateset-blockchain-starport/x/loan/keeper"
	"github.com/stateset/stateset-blockchain-starport/x/loan/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.LoanKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
