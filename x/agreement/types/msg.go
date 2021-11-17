package types

import (
	time "time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAgreementRequest{}

// NewMsgCreateAgreement creates a new message to create an agreement
func NewMsgCreateAgreement(agreementNumber string, agreementName string, agreementType string, agreementStatus string, totalAgreementValue int32, party string, counterparty string, startDate time.Time, endDate time.Time) *MsgCreateAgreementRequest {
	return &MsgCreateAgreementRequest{
		AgreementNumber:     agreementNumber,
		AgreementName:       agreementName,
		AgreementType:       agreementType,
		AgreementStatus:     agreementStatus,
		TotalAgreementValue: totalAgreementValue,
		Party:               party,
		Counterparty:        counterparty,
		StartDate:           startDate,
		EndDate:             endDate,
	}
}

// Route is the name of the route for agreement
func (msg *MsgCreateAgreementRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgCreateAgreementRequest) Type() string {
	return "CreateAgreement"
}

func (msg *MsgCreateAgreementRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
}

var _ sdk.Msg = &MsgUpdateAgreementRequest{}

func (msg *MsgUpdateAgreementRequest) Route() string { return RouterKey }

func (msg *MsgUpdateAgreementRequest) Type() string { return "UpdateAgreement" }

// Update Agreement
func NewMsgUpdateAgreement(sender string, agreementId string, agreementNumber string, agreementName string, agreementType string, agreementStatus string, totalAgreementValue int32, party string, counterparty string, AgreementStartBlock string, AgreementEndBlock string) *MsgUpdateAgreementRequest {
	return &MsgUpdateAgreementRequest{
		Sender:              sender,
		AgreementId:         agreementId,
		AgreementNumber:     agreementNumber,
		AgreementName:       agreementName,
		AgreementType:       agreementType,
		AgreementStatus:     agreementStatus,
		TotalAgreementValue: totalAgreementValue,
		Party:               party,
		Counterparty:        counterparty,
	}
}

func (msg *MsgUpdateAgreementRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAgreementRequest{}

func (msg *MsgDeleteAgreementRequest) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAgreementRequest) Type() string {
	return "DeleteAgreement"
}

func (msg *MsgDeleteAgreementRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgAmendAgreementRequest{}

// Route is the name of the route for loan
func (msg *MsgAmendAgreementRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgAmendAgreementRequest) Type() string {
	return "AmendAgreement"
}

func (msg *MsgAmendAgreementRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAmendAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgAmendAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

var _ sdk.Msg = &MsgActivateAgreementRequest{}

// Route is the name of the route for an agreement
func (msg *MsgActivateAgreementRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgActivateAgreementRequest) Type() string {
	return "ActivateAgreement"
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgActivateAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// GetSigners gets the signs of the Msg
func (msg *MsgActivateAgreementRequest) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Sender)}
}

func (msg *MsgActivateAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
}

var _ sdk.Msg = &MsgRenewAgreementRequest{}

// Route is the name of the route for an agreement
func (msg *MsgRenewAgreementRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgRenewAgreementRequest) Type() string {
	return "RenewAgreement"
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgRenewAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// GetSigners gets the signs of the Msg
func (msg *MsgRenewAgreementRequest) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Sender)}
}

func (msg *MsgRenewAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
}

// Terminate Agreement
var _ sdk.Msg = &MsgTerminateAgreementRequest{}

// Route is the name of the route for an agreement
func (msg *MsgTerminateAgreementRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgTerminateAgreementRequest) Type() string {
	return "TerminateAgreement"
}

func (msg *MsgTerminateAgreementRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTerminateAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgTerminateAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// Expire Agreement
var _ sdk.Msg = &MsgExpireAgreementRequest{}

// Route is the name of the route for an agreement
func (msg *MsgExpireAgreementRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgExpireAgreementRequest) Type() string {
	return "ExpireAgreeement"
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgExpireAgreementRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// GetSigners gets the signs of the Msg
func (msg *MsgExpireAgreementRequest) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Sender)}
}

func (msg *MsgExpireAgreementRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
}
