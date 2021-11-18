package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

// RegisterCodec registers all the necessary types and interfaces for the module
func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(MsgCreateInvoiceRequest{}, "stateset/CreateInvoice", nil)
	cdc.RegisterConcrete(MsgCancelInvoiceRequest{}, "stateset/CancelInvoice", nil)
	cdc.RegisterConcrete(MsgUpdateInvoiceRequest{}, "stateset/EditInvoice", nil)
	cdc.RegisterConcrete(MsgDeleteInvoiceRequest{}, "stateset/DeleteInvoice", nil)
	cdc.RegisterConcrete(MsgFactorInvoiceRequest{}, "stateset/FactorInvoice", nil)
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateInvoiceRequest{},
		&MsgUpdateInvoiceRequest{},
		&MsgDeleteInvoiceRequest{},
		&MsgCompleteInvoiceRequest{},
		&MsgCancelInvoiceRequest{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
