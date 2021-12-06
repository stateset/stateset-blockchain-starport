package keeper

import (
	"github.com/stateset/stateset-blockchain-starport/x/loan/types"
)

var _ types.QueryServer = Keeper{}
