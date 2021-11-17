package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/agreement module sentinel errors
var (
	ErrSample               = sdkerrors.Register("agreement", 1100, "sample error")
	ErrInvalidPacketTimeout = sdkerrors.Register("agreement", 1500, "invalid packet timeout")
	ErrInvalidVersion       = sdkerrors.Register("agreement", 1501, "invalid version")
	ErrWrongAgreementState = sdkerrors.Register("agreement", 6, "invalid agreement state")
)
