package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePurchaseOrderRequest{}

func NewMsgCreatePurchaseOrder(creator string, purchaseorderId string, purchaseorderNumber string, purchaseorderName string, description string, subtotal string, total string, purchaser string, vendor string, financer string, purchaseDate string, deliveryDate string) *MsgCreatePurchaseOrderRequest {
	return &MsgCreatePurchaseOrderRequest{
		Creator:             creator,
		PurchaseorderId:     purchaseorderId,
		PurchaseorderNumber: purchaseorderNumber,
		PurchaseorderName:   purchaseorderName,
		Description:         description,
		Subtotal:            subtotal,
		Total:               total,
		Purchaser:           purchaser,
		Vendor:              vendor,
		Financer:            financer,
		PurchaseDate:        purchaseDate,
		DeliveryDate:        deliveryDate,
	}
}

func (msg *MsgCreatePurchaseOrderRequest) Route() string {
	return RouterKey
}

func (msg *MsgCreatePurchaseOrderRequest) Type() string {
	return "CreatePurchaseOrder"
}

func (msg *MsgCreatePurchaseOrderRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePurchaseOrderRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePurchaseOrderRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// Update Purchase Order

var _ sdk.Msg = &MsgUpdatePurchaseOrderRequest{}

func NewMsgUpdatePurchaseOrder(creator string, id uint64, purchaseorderId string, purchaseorderNumber string, description string, subtotal string, total string, purchaser string, vendor string, financer string, purchaseDate string, deliveryDate string) *MsgUpdatePurchaseOrderRequest {
	return &MsgUpdatePurchaseOrderRequest{
		Creator:             creator,
		PurchaseorderId:     purchaseorderId,
		PurchaseorderNumber: purchaseorderNumber,
		Description:         description,
		Subtotal:            subtotal,
		Total:               total,
		Purchaser:           purchaser,
		Vendor:              vendor,
		Financer:            financer,
		PurchaseDate:        purchaseDate,
		DeliveryDate:        deliveryDate,
	}
}

func (msg *MsgUpdatePurchaseOrderRequest) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePurchaseOrderRequest) Type() string {
	return "UpdatePurchaseorder"
}

func (msg *MsgUpdatePurchaseOrderRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePurchaseOrderRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePurchaseOrderRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// Cancel Purchase Order Request

var _ sdk.Msg = &MsgCancelPurchaseOrderRequest{}

func NewMsgCancelPurchaseOrder(creator string, id uint64) *MsgCancelPurchaseOrderRequest {
	return &MsgCancelPurchaseOrderRequest{
		Creator: creator,
	}
}

func (msg *MsgCancelPurchaseOrderRequest) Route() string {
	return RouterKey
}

func (msg *MsgCancelPurchaseOrderRequest) Type() string {
	return "CancelPurchaseOrder"
}

func (msg *MsgCancelPurchaseOrderRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCancelPurchaseOrderRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCancelPurchaseOrderRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// Message Delete Purchase Order

var _ sdk.Msg = &MsgDeletePurchaseOrderRequest{}

func NewMsgDeletePurchaseOrder(creator string, id uint64) *MsgDeletePurchaseOrderRequest {
	return &MsgDeletePurchaseOrderRequest{
		Creator: creator,
	}
}

func (msg *MsgDeletePurchaseOrderRequest) Route() string {
	return RouterKey
}

func (msg *MsgDeletePurchaseOrderRequest) Type() string {
	return "DeletePurchaseOrder"
}

func (msg *MsgDeletePurchaseOrderRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePurchaseOrderRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePurchaseOrderRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// Finance Purchase Order Request

var _ sdk.Msg = &MsgFinancePurchaseOrderRequest{}

func NewMsgFinancePurchaseOrder(creator string, id uint64) *MsgFinancePurchaseOrderRequest {
	return &MsgFinancePurchaseOrderRequest{
		Creator: creator,
	}
}

func (msg *MsgFinancePurchaseOrderRequest) Route() string {
	return RouterKey
}

func (msg *MsgFinancePurchaseOrderRequest) Type() string {
	return "FinancePurchaseOrder"
}

func (msg *MsgFinancePurchaseOrderRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFinancePurchaseOrderRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFinancePurchaseOrderRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
