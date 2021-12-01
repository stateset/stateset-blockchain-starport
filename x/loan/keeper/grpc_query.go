package keeper

import (
	"github.com/stateset/stateset-blockchain/x/loan/types"
)

var _ types.QueryServer = Keeper{}
