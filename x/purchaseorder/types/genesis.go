package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PurchaseOrders: []PurchaseOrder{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {

	purchaseorderIdMap := make(map[uint64]bool)
	purchaseorderCount := gs.GetPurchaseOrderCount()
	for _, elem := range gs.PurchaseOrders {
		if _, ok := purchaseorderIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for purchaseorder")
		}
		if elem.Id >= purchaseorderCount {
			return fmt.Errorf("purchaseorder id should be lower or equal than the last id")
		}
		purchaseorderIdMap[elem.Id] = true
	}

	return nil
}
