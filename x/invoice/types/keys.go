package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	ModuleName = "invoice"

	StoreKey = ModuleName

	RouterKey = ModuleName

	QuerierRoute = ModuleName
)

var (
	// KeyNextGlobalPurchaseOrderNumber defines key to store the next Purchase Order ID to be used
	KeyNextGlobalInvoiceNumber = []byte{0x01}
	// KeyPrefixPurchasOrders defines prefix to store purchaseorders
	KeyPrefixInvoices = []byte{0x02}
	// KeyTotalLiquidity defines key to store total liquidity
	KeyTotalLiquidity = []byte{0x03}
)

func GetInvoiceShareDenom(invoiceId uint64) string {
	return fmt.Sprintf("invoice/%d", invoiceId)
}

func GetKeyPrefixInvoices(invoiceId uint64) []byte {
	return append(KeyPrefixInvoices, sdk.Uint64ToBigEndian(invoiceId)...)
}
