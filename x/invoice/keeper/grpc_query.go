package keeper

import (
	"github.com/stateset/stateset-blockchain-starport/x/invoice/types"
)

var _ types.QueryServer = Keeper{}
