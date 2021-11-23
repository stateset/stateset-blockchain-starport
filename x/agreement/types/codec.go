package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

// RegisterLegacyAminoCodec registers all the necessary agreements module concrete types and interfaces with
// the provided codec reference. These types are used for Amino JSON serialization.
func RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(MsgCreateAgreementRequest{}, "stateset/CreateAgreement", nil)
	cdc.RegisterConcrete(MsgUpdateAgreementRequest{}, "stateset/UpdateAgreement", nil)
	cdc.RegisterConcrete(MsgDeleteAgreementRequest{}, "stateset/DeleteAgreement", nil)
	cdc.RegisterConcrete(MsgAmendAgreementRequest{}, "stateset/AmendAgreement", nil)
	cdc.RegisterConcrete(MsgRenewAgreementRequest{}, "stateset/RenewAgreement", nil)
	cdc.RegisterConcrete(MsgTerminateAgreementRequest{}, "stateset/TerminateAgreement", nil)
	cdc.RegisterConcrete(MsgExpireAgreementRequest{}, "stateset/ExpireAgreement", nil)
	csc.RegisterConcrete(MsgFinanceAgreementRequest{}, "stateset/FinanceAgreement", nil)
}

// RegisterInterfaces registers the agreement interfaces types with the interface registry
func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAgreementRequest{},
		&MsgUpdateAgreementRequest{},
		&MsgDeleteAgreementRequest{},
		&MsgAmendAgreementRequest{},
		&MsgRenewAgreementRequest{},
		&MsgTerminateAgreementRequest{},
		&MsgExpireAgreementRequest{},
		&MsgFinanceAgreementRequest{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
