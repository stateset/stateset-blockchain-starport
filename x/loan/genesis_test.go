package loan_test

import (
	"testing"

	keepertest "github.com/stateset/stateset-blockchain-starport/testutil/keeper"
	"github.com/stateset/stateset-blockchain-starport/x/loan"
	"github.com/stateset/stateset-blockchain-starport/x/loan/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LoanKeeper(t)
	loan.InitGenesis(ctx, *k, genesisState)
	got := loan.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
