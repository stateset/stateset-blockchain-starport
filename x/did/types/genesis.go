package types

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/gogo/protobuf/proto"
	"github.com/stateset/stateset-blockchain/x/did/exported"
)

func NewGenesisState(dd []exported.DidDoc) *GenesisState {
	didDocs := make([]*types.Any, len(dd))

	for i, diddoc := range dd {
		msg, ok := diddoc.(proto.Message)
		if !ok {
			panic(fmt.Errorf("cannot proto marshal %T", diddoc))
		}
		any, err := types.NewAnyWithValue(msg)
		if err != nil {
			didDocs[i] = any
		}
	}

	return &GenesisState{
		DidDocs: didDocs,
	}
}

// DefaultGenesisState - Return a default genesis state
func DefaultGenesisState() *GenesisState {
	return NewGenesisState(nil)
}

// ValidateGenesis performs no inspection
func ValidateGenesis(data *GenesisState) error {
	return nil
}

var _ types.UnpackInterfacesMessage = GenesisState{}

// UnpackInterfaces implements UnpackInterfacesMessage.UnpackInterfaces
func (data GenesisState) UnpackInterfaces(unpacker types.AnyUnpacker) error {
	for _, genesisDidDoc := range data.DidDocs {
		var didDoc exported.DidDoc
		err := unpacker.UnpackAny(genesisDidDoc, &didDoc)
		if err != nil {
			return err
		}
	}

	return nil
}
