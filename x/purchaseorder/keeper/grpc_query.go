package keeper

import (
	"github.com/stateset/stateset-blockchain-starport/x/purchaseorder/types"
)

var _ types.QueryServer = Keeper{}
