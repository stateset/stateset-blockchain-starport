package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/invoice module sentinel errors
var (
	ErrInvoiceNotFound      = sdkerrors.Register("invoice", 1, "invoice not found")
	ErrInvoiceAlreadyExist  = sdkerrors.Register("invoice", 2, "invoice already exist")
	ErrInvoiceLocked        = sdkerrors.Register("invoice", 3, "invoice is locked")
	ErrInvalidPacketTimeout = sdkerrors.Register("invoice", 4, "invalid packet timeout")
	ErrInvalidVersion       = sdkerrors.Register("invoice", 5, "invalid version")
)
