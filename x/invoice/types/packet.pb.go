// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: stateset/invoice/v1beta1/packet.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// IbcInvoicePacketData defines a struct for the packet payload
type IbcInvoicePacketData struct {
	Creator         string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	InvoiceId       string `protobuf:"bytes,2,opt,name=invoice_id,json=invoiceId,proto3" json:"invoice_id,omitempty"`
	InvoiceNumber   string `protobuf:"bytes,3,opt,name=invoice_number,json=invoiceNumber,proto3" json:"invoice_number,omitempty"`
	InvoiceName     string `protobuf:"bytes,4,opt,name=invoice_name,json=invoiceName,proto3" json:"invoice_name,omitempty"`
	BillingReason   string `protobuf:"bytes,5,opt,name=billing_reason,json=billingReason,proto3" json:"billing_reason,omitempty"`
	AmountDue       string `protobuf:"bytes,6,opt,name=amount_due,json=amountDue,proto3" json:"amount_due,omitempty"`
	AmountPaid      string `protobuf:"bytes,7,opt,name=amount_paid,json=amountPaid,proto3" json:"amount_paid,omitempty"`
	AmountRemaining string `protobuf:"bytes,8,opt,name=amount_remaining,json=amountRemaining,proto3" json:"amount_remaining,omitempty"`
	Subtotal        string `protobuf:"bytes,9,opt,name=subtotal,proto3" json:"subtotal,omitempty"`
	Total           string `protobuf:"bytes,10,opt,name=total,proto3" json:"total,omitempty"`
	Party           string `protobuf:"bytes,11,opt,name=party,proto3" json:"party,omitempty"`
	Counterparty    string `protobuf:"bytes,12,opt,name=counterparty,proto3" json:"counterparty,omitempty"`
	Factor          string `protobuf:"bytes,13,opt,name=factor,proto3" json:"factor,omitempty"`
	DueDate         string `protobuf:"bytes,14,opt,name=due_date,json=dueDate,proto3" json:"due_date,omitempty"`
	PeriodStartDate string `protobuf:"bytes,15,opt,name=period_start_date,json=periodStartDate,proto3" json:"period_start_date,omitempty"`
	PeriodEndDate   string `protobuf:"bytes,16,opt,name=period_end_date,json=periodEndDate,proto3" json:"period_end_date,omitempty"`
}

func (m *IbcInvoicePacketData) Reset()         { *m = IbcInvoicePacketData{} }
func (m *IbcInvoicePacketData) String() string { return proto.CompactTextString(m) }
func (*IbcInvoicePacketData) ProtoMessage()    {}
func (*IbcInvoicePacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_48b69e4971a9e8e9, []int{0}
}
func (m *IbcInvoicePacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IbcInvoicePacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IbcInvoicePacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IbcInvoicePacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IbcInvoicePacketData.Merge(m, src)
}
func (m *IbcInvoicePacketData) XXX_Size() int {
	return m.Size()
}
func (m *IbcInvoicePacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_IbcInvoicePacketData.DiscardUnknown(m)
}

var xxx_messageInfo_IbcInvoicePacketData proto.InternalMessageInfo

func (m *IbcInvoicePacketData) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *IbcInvoicePacketData) GetInvoiceId() string {
	if m != nil {
		return m.InvoiceId
	}
	return ""
}

func (m *IbcInvoicePacketData) GetInvoiceNumber() string {
	if m != nil {
		return m.InvoiceNumber
	}
	return ""
}

func (m *IbcInvoicePacketData) GetInvoiceName() string {
	if m != nil {
		return m.InvoiceName
	}
	return ""
}

func (m *IbcInvoicePacketData) GetBillingReason() string {
	if m != nil {
		return m.BillingReason
	}
	return ""
}

func (m *IbcInvoicePacketData) GetAmountDue() string {
	if m != nil {
		return m.AmountDue
	}
	return ""
}

func (m *IbcInvoicePacketData) GetAmountPaid() string {
	if m != nil {
		return m.AmountPaid
	}
	return ""
}

func (m *IbcInvoicePacketData) GetAmountRemaining() string {
	if m != nil {
		return m.AmountRemaining
	}
	return ""
}

func (m *IbcInvoicePacketData) GetSubtotal() string {
	if m != nil {
		return m.Subtotal
	}
	return ""
}

func (m *IbcInvoicePacketData) GetTotal() string {
	if m != nil {
		return m.Total
	}
	return ""
}

func (m *IbcInvoicePacketData) GetParty() string {
	if m != nil {
		return m.Party
	}
	return ""
}

func (m *IbcInvoicePacketData) GetCounterparty() string {
	if m != nil {
		return m.Counterparty
	}
	return ""
}

func (m *IbcInvoicePacketData) GetFactor() string {
	if m != nil {
		return m.Factor
	}
	return ""
}

func (m *IbcInvoicePacketData) GetDueDate() string {
	if m != nil {
		return m.DueDate
	}
	return ""
}

func (m *IbcInvoicePacketData) GetPeriodStartDate() string {
	if m != nil {
		return m.PeriodStartDate
	}
	return ""
}

func (m *IbcInvoicePacketData) GetPeriodEndDate() string {
	if m != nil {
		return m.PeriodEndDate
	}
	return ""
}

func init() {
	proto.RegisterType((*IbcInvoicePacketData)(nil), "stateset.invoice.v1beta1.IbcInvoicePacketData")
}

func init() {
	proto.RegisterFile("stateset/invoice/v1beta1/packet.proto", fileDescriptor_48b69e4971a9e8e9)
}

var fileDescriptor_48b69e4971a9e8e9 = []byte{
	// 428 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x92, 0xcf, 0x8e, 0xd3, 0x30,
	0x10, 0x87, 0x1b, 0xd8, 0x76, 0x5b, 0xb7, 0xfb, 0x07, 0x6b, 0x85, 0x0c, 0x12, 0x01, 0x56, 0x5a,
	0x04, 0x48, 0x34, 0x5a, 0x71, 0xe0, 0x8e, 0xca, 0xa1, 0x17, 0xb4, 0x94, 0x1b, 0x97, 0x68, 0x62,
	0x0f, 0x5d, 0x6b, 0x13, 0x3b, 0x72, 0x26, 0x2b, 0xf6, 0x2d, 0x78, 0x02, 0x9e, 0x87, 0xe3, 0x1e,
	0x39, 0xa2, 0xf6, 0x45, 0x50, 0x6c, 0x27, 0x12, 0xb7, 0xcc, 0xf7, 0xfb, 0x3c, 0x72, 0xc6, 0xc3,
	0x2e, 0x1a, 0x02, 0xc2, 0x06, 0x29, 0xd3, 0xe6, 0xd6, 0x6a, 0x89, 0xd9, 0xed, 0x65, 0x81, 0x04,
	0x97, 0x59, 0x0d, 0xf2, 0x06, 0x69, 0x59, 0x3b, 0x4b, 0x96, 0x8b, 0x5e, 0x5b, 0x46, 0x6d, 0x19,
	0xb5, 0xf3, 0x5f, 0x07, 0xec, 0x6c, 0x5d, 0xc8, 0x75, 0xc0, 0x57, 0xfe, 0xd0, 0x0a, 0x08, 0xb8,
	0x60, 0x87, 0xd2, 0x21, 0x90, 0x75, 0x22, 0x79, 0x91, 0xbc, 0x9e, 0x6d, 0xfa, 0x92, 0x3f, 0x63,
	0x2c, 0x76, 0xc9, 0xb5, 0x12, 0x0f, 0x7c, 0x38, 0x8b, 0x64, 0xad, 0xf8, 0x05, 0x3b, 0xee, 0x63,
	0xd3, 0x56, 0x05, 0x3a, 0xf1, 0xd0, 0x2b, 0x47, 0x91, 0x7e, 0xf6, 0x90, 0xbf, 0x64, 0x8b, 0x41,
	0x83, 0x0a, 0xc5, 0x81, 0x97, 0xe6, 0xbd, 0x04, 0x15, 0x76, 0x9d, 0x0a, 0x5d, 0x96, 0xda, 0x6c,
	0x73, 0x87, 0xd0, 0x58, 0x23, 0xc6, 0xa1, 0x53, 0xa4, 0x1b, 0x0f, 0xbb, 0xfb, 0x40, 0x65, 0x5b,
	0x43, 0xb9, 0x6a, 0x51, 0x4c, 0xc2, 0x7d, 0x02, 0x59, 0xb5, 0xc8, 0x9f, 0xb3, 0x79, 0x8c, 0x6b,
	0xd0, 0x4a, 0x1c, 0xfa, 0x3c, 0x9e, 0xb8, 0x02, 0xad, 0xf8, 0x1b, 0x76, 0x1a, 0x05, 0x87, 0x15,
	0x68, 0xa3, 0xcd, 0x56, 0x4c, 0xbd, 0x75, 0x12, 0xf8, 0xa6, 0xc7, 0xfc, 0x29, 0x9b, 0x36, 0x6d,
	0x41, 0x96, 0xa0, 0x14, 0x33, 0xaf, 0x0c, 0x35, 0x3f, 0x63, 0xe3, 0x10, 0x30, 0x1f, 0x8c, 0x07,
	0x5a, 0x83, 0xa3, 0x3b, 0x31, 0x0f, 0xd4, 0x17, 0xfc, 0x9c, 0x2d, 0x64, 0xd7, 0x19, 0x5d, 0x08,
	0x17, 0x3e, 0xfc, 0x8f, 0xf1, 0xc7, 0x6c, 0xf2, 0x1d, 0x64, 0x37, 0xff, 0x23, 0x9f, 0xc6, 0x8a,
	0x3f, 0x61, 0x53, 0xd5, 0x62, 0xae, 0x80, 0x50, 0x1c, 0x87, 0x97, 0x51, 0x2d, 0xae, 0x80, 0x90,
	0xbf, 0x65, 0x8f, 0x6a, 0x74, 0xda, 0xaa, 0xbc, 0x21, 0x70, 0x14, 0x9c, 0x93, 0xf0, 0x2b, 0x21,
	0xf8, 0xda, 0x71, 0xef, 0xbe, 0x62, 0x11, 0xe5, 0x68, 0x54, 0x30, 0x4f, 0xc3, 0x74, 0x03, 0xfe,
	0x64, 0x54, 0xe7, 0x7d, 0xfc, 0xf2, 0x7b, 0x97, 0x26, 0xf7, 0xbb, 0x34, 0xf9, 0xbb, 0x4b, 0x93,
	0x9f, 0xfb, 0x74, 0x74, 0xbf, 0x4f, 0x47, 0x7f, 0xf6, 0xe9, 0xe8, 0xdb, 0x87, 0xad, 0xa6, 0xeb,
	0xb6, 0x58, 0x4a, 0x5b, 0x65, 0xc3, 0x1a, 0xf6, 0x1f, 0xef, 0x8a, 0xd2, 0xca, 0x1b, 0x79, 0x0d,
	0xda, 0x64, 0x3f, 0x86, 0xe5, 0xa4, 0xbb, 0x1a, 0x9b, 0x62, 0xe2, 0x97, 0xf2, 0xfd, 0xbf, 0x00,
	0x00, 0x00, 0xff, 0xff, 0xb3, 0x47, 0x1c, 0x88, 0xbd, 0x02, 0x00, 0x00,
}

func (m *IbcInvoicePacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IbcInvoicePacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IbcInvoicePacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PeriodEndDate) > 0 {
		i -= len(m.PeriodEndDate)
		copy(dAtA[i:], m.PeriodEndDate)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.PeriodEndDate)))
		i--
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x82
	}
	if len(m.PeriodStartDate) > 0 {
		i -= len(m.PeriodStartDate)
		copy(dAtA[i:], m.PeriodStartDate)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.PeriodStartDate)))
		i--
		dAtA[i] = 0x7a
	}
	if len(m.DueDate) > 0 {
		i -= len(m.DueDate)
		copy(dAtA[i:], m.DueDate)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.DueDate)))
		i--
		dAtA[i] = 0x72
	}
	if len(m.Factor) > 0 {
		i -= len(m.Factor)
		copy(dAtA[i:], m.Factor)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Factor)))
		i--
		dAtA[i] = 0x6a
	}
	if len(m.Counterparty) > 0 {
		i -= len(m.Counterparty)
		copy(dAtA[i:], m.Counterparty)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Counterparty)))
		i--
		dAtA[i] = 0x62
	}
	if len(m.Party) > 0 {
		i -= len(m.Party)
		copy(dAtA[i:], m.Party)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Party)))
		i--
		dAtA[i] = 0x5a
	}
	if len(m.Total) > 0 {
		i -= len(m.Total)
		copy(dAtA[i:], m.Total)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Total)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.Subtotal) > 0 {
		i -= len(m.Subtotal)
		copy(dAtA[i:], m.Subtotal)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Subtotal)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.AmountRemaining) > 0 {
		i -= len(m.AmountRemaining)
		copy(dAtA[i:], m.AmountRemaining)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AmountRemaining)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.AmountPaid) > 0 {
		i -= len(m.AmountPaid)
		copy(dAtA[i:], m.AmountPaid)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AmountPaid)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.AmountDue) > 0 {
		i -= len(m.AmountDue)
		copy(dAtA[i:], m.AmountDue)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AmountDue)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.BillingReason) > 0 {
		i -= len(m.BillingReason)
		copy(dAtA[i:], m.BillingReason)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.BillingReason)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.InvoiceName) > 0 {
		i -= len(m.InvoiceName)
		copy(dAtA[i:], m.InvoiceName)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.InvoiceName)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.InvoiceNumber) > 0 {
		i -= len(m.InvoiceNumber)
		copy(dAtA[i:], m.InvoiceNumber)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.InvoiceNumber)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.InvoiceId) > 0 {
		i -= len(m.InvoiceId)
		copy(dAtA[i:], m.InvoiceId)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.InvoiceId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPacket(dAtA []byte, offset int, v uint64) int {
	offset -= sovPacket(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *IbcInvoicePacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.InvoiceId)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.InvoiceNumber)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.InvoiceName)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.BillingReason)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AmountDue)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AmountPaid)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AmountRemaining)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Subtotal)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Total)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Party)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Counterparty)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Factor)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.DueDate)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.PeriodStartDate)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.PeriodEndDate)
	if l > 0 {
		n += 2 + l + sovPacket(uint64(l))
	}
	return n
}

func sovPacket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPacket(x uint64) (n int) {
	return sovPacket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *IbcInvoicePacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: IbcInvoicePacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IbcInvoicePacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InvoiceId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InvoiceId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InvoiceNumber", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InvoiceNumber = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InvoiceName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InvoiceName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BillingReason", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BillingReason = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AmountDue", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AmountDue = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AmountPaid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AmountPaid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AmountRemaining", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AmountRemaining = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Subtotal", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Subtotal = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Total", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Total = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Party", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Party = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Counterparty", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Counterparty = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Factor", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Factor = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DueDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DueDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 15:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PeriodStartDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PeriodStartDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 16:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PeriodEndDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PeriodEndDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPacket(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPacket
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPacket
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPacket
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPacket        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPacket          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPacket = fmt.Errorf("proto: unexpected end of group")
)
