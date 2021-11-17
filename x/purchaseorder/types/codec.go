package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

// RegisterCodec register concrete types on codec
func RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePurchaseOrderRequest{}, "stateset/CreatePurchaseOrder", nil)
	cdc.RegisterConcrete(&MsgUpdatePurchaseOrderRequest{}, "stateset/UpdatePurchaseOrder", nil)
	cdc.RegisterConcrete(&MsgDeletePurchaseOrderRequest{}, "stateset/DeletePurchaseOrder", nil)
	cdc.RegisterConcrete(&MsgCompletePurchaseOrderRequest{}, "stateset/CompletePurchaseOrder", nil)
	cdc.RegisterConcrete(&MsgCancelPurchaseOrderRequest{}, "stateset/CancelPurchaseOrder", nil)
	cdc.RegisterConcrete(&MsgLockPurchaseOrderRequest{}, "stateset/LockPurchaseOrder", nil)
	cdc.RegisterConcrete(&MsgFinancePurchaseOrderRequest{}, "stateset/FinancePurchaseOrder", nil)

}

// RegisterInterfaces registers the x/purchaseorder interfaces types with the interface registry
func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePurchaseOrderRequest{},
		&MsgUpdatePurchaseOrderRequest{},
		&MsgDeletePurchaseOrderRequest{},
		&MsgCompletePurchaseOrderRequest{},
		&MsgCancelPurchaseOrderRequest{},
		&MsgLockPurchaseOrderRequest{},
		&MsgFinancePurchaseOrderRequest{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
