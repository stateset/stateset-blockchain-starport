package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// verify interface at compile time
var _ sdk.Msg = &MsgCreateInvoiceRequest{}

// NewMsgCreateInvoice creates a new message to create a invoice
func NewMsgCreateInvoice(creator string, invoiceId string, invoiceNumber string, invoiceName string, billingReason string, amountDue string, amountPaid string, amountRemaining string, subtotal string, total string, party string, counterparty string, dueDate string, periodStartDate string, periodEndDate string) *MsgCreateInvoiceRequest {
	return &MsgCreateInvoiceRequest{
		Creator:         creator,
		InvoiceId:       invoiceId,
		InvoiceNumber:   invoiceNumber,
		InvoiceName:     invoiceName,
		BillingReason:   billingReason,
		AmountDue:       amountDue,
		AmountPaid:      amountPaid,
		AmountRemaining: amountRemaining,
		Subtotal:        subtotal,
		Total:           total,
		Party:           party,
		Counterparty:    counterparty,
		DueDate:         dueDate,
		PeriodStartDate: periodStartDate,
		PeriodEndDate:   periodEndDate,
	}
}

// Route is the name of the route for invoice
func (msg *MsgCreateInvoiceRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgCreateInvoiceRequest) Type() string {
	return "CreateInvoice"
}

func (msg *MsgCreateInvoiceRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgCreateInvoiceRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// GetSigners gets the signs of the Msg
func (msg *MsgCreateInvoiceRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// UpdateInvoice
var _ sdk.Msg = &MsgUpdateInvoiceRequest{}

func NewMsgUpdateInvoiceRequest(creator string, invoiceId string, invoiceNumber string, invoiceName string, billingReason string, amountDue string, amountPaid string, amountRemaining string, subtotal string, total string, party string, counterparty string, dueDate string, periodStartDate string, periodEndDate string) *MsgUpdateInvoiceRequest {
	return &MsgUpdateInvoiceRequest{
		Creator:         creator,
		InvoiceId:       invoiceId,
		InvoiceNumber:   invoiceNumber,
		InvoiceName:     invoiceName,
		BillingReason:   billingReason,
		AmountDue:       amountDue,
		AmountPaid:      amountPaid,
		AmountRemaining: amountRemaining,
		Subtotal:        subtotal,
		Total:           total,
		Party:           party,
		Counterparty:    counterparty,
		DueDate:         dueDate,
		PeriodStartDate: periodStartDate,
		PeriodEndDate:   periodEndDate,
	}
}

func (msg *MsgUpdateInvoiceRequest) Route() string {
	return RouterKey
}

func (msg *MsgUpdateInvoiceRequest) Type() string {
	return "UpdateInvoice"
}

func (msg *MsgUpdateInvoiceRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInvoiceRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInvoiceRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteInvoiceRequest{}

func (msg *MsgDeleteInvoiceRequest) Route() string {
	return RouterKey
}

func (msg *MsgDeleteInvoiceRequest) Type() string {
	return "DeleteInvoice"
}

func (msg *MsgDeleteInvoiceRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInvoiceRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInvoiceRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCancelInvoiceRequest{}

// Route is the name of the route for invoice
func (msg *MsgCancelInvoiceRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg *MsgCancelInvoiceRequest) Type() string {
	return "CancelInvoice"
}

// ValidateBasic validates basic fields of the Msg
func (msg *MsgCancelInvoiceRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgCancelInvoiceRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// GetSigners gets the signs of the Msg
func (msg *MsgCancelInvoiceRequest) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Sender)}
}

var _ sdk.Msg = &MsgFactorInvoiceRequest{}

func (msg MsgFactorInvoiceRequest) Route() string {
	return RouterKey
}

// Type is the name for the Msg
func (msg MsgFactorInvoiceRequest) Type() string {
	return "FactorInvoice"
}

// ValidateBasic validates basic fields of the Msg
func (msg *MsgFactorInvoiceRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// GetSignBytes gets the bytes for Msg signer to sign on
func (msg *MsgFactorInvoiceRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// GetSigners gets the signs of the Msg
func (msg *MsgFactorInvoiceRequest) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Sender)}
}
