package types

import (
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// Invoices is an array of invoices
type Invoices []Invoice

// NewInvoice creates a new invoice object
func NewInvoice(invoiceId uint64, invoiceNumber string, invoiceName string, billingReason string, amountDue sdk.Coin, amountPaid sdk.Coin, amountRemaining sdk.Coin, subtotal sdk.Coin, total sdk.Coin, party sdk.AccAddress, counterparty sdk.AccAddress, dueDate time.Time, periodStartDate time.Time, periodEndDate time.Time, paid bool, active bool, createdTime time.Time) Invoice {
	return Invoice{
		InvoiceID:       invoiceId,
		InvoiceNumber:   invoiceNumber,
		InvoiceName:     invoiceName,
		BillingReason:   billingReason,
		AmountDue:       amountDue,
		AmountPaid:		 amountPaid,
		AmountRemaining:  amountRemaining,
		Subtotal:        subtotal,
		Total: 			 total,
		Party:		     party,
		Counterparty:	 counterparty,
		DueDate:		 dueDate,
		PeriodStartDate: periodStartDate,
		PeriodEndDate:   periodEndDate,
		Paid:			 paid,
		Active: 		 active,
		CreatedTime:     createdTime,
	}
}

func (i Invoice) String() string {
	return fmt.Sprintf(`Invoice %d:
		InvoiceID:       %s,
		InvoiceNumber:   %s,
		InvoiceName:     %s,
		BillingReason:   %s,
		AmountDue:       %s
		AmountPaid:		 %s,
		AmountRemaining  %s,
		Subtotal:        %s,
		Total: 			 %s,
		Party:		     %s,
		Counterparty:	 %s,
		DueDate:		 %s,
		PeriodStartDate: %s,
		PeriodEndDate:   %s,
		Paid:			 %s,
		Active: 		 %s,
		CreatedTime:     %s`,
		i.InvoiceID, i.InvoiceNumber, i.InvoiceName, i.BillingReason, i.AmountDue.String(), i.AmountPaid.String(), i.AmountRemaining.String(), i.Subtotal.String(), i.Total.String(), i.Party.String(), i.Counterparty.String(), i.DueDate.String(), i.PeriodStartDate.String(), i.PeriodEndDate.String(), i.Paid.String(), i.Active.String(), a.CreatedTime.String())
}