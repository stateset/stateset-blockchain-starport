// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: stateset/agreement/v1beta1/packet.proto

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

// IbcAgreementPacketData defines a struct for the packet payload
type IbcAgreementPacketData struct {
	Creator             string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	AgreementId         string `protobuf:"bytes,2,opt,name=agreement_id,json=agreementId,proto3" json:"agreement_id,omitempty"`
	AgreementNumber     string `protobuf:"bytes,3,opt,name=agreement_number,json=agreementNumber,proto3" json:"agreement_number,omitempty"`
	AgreementName       string `protobuf:"bytes,4,opt,name=agreement_name,json=agreementName,proto3" json:"agreement_name,omitempty"`
	AgreementType       string `protobuf:"bytes,5,opt,name=agreement_type,json=agreementType,proto3" json:"agreement_type,omitempty"`
	AgreementStatus     string `protobuf:"bytes,6,opt,name=agreement_status,json=agreementStatus,proto3" json:"agreement_status,omitempty"`
	TotalAgreementValue string `protobuf:"bytes,7,opt,name=total_agreement_value,json=totalAgreementValue,proto3" json:"total_agreement_value,omitempty"`
	Party               string `protobuf:"bytes,8,opt,name=party,proto3" json:"party,omitempty"`
	Counterparty        string `protobuf:"bytes,9,opt,name=counterparty,proto3" json:"counterparty,omitempty"`
	StartDate           string `protobuf:"bytes,10,opt,name=start_date,json=startDate,proto3" json:"start_date,omitempty"`
	EndDate             string `protobuf:"bytes,11,opt,name=end_date,json=endDate,proto3" json:"end_date,omitempty"`
}

func (m *IbcAgreementPacketData) Reset()         { *m = IbcAgreementPacketData{} }
func (m *IbcAgreementPacketData) String() string { return proto.CompactTextString(m) }
func (*IbcAgreementPacketData) ProtoMessage()    {}
func (*IbcAgreementPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_72241c4a0b42e896, []int{0}
}
func (m *IbcAgreementPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IbcAgreementPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IbcAgreementPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IbcAgreementPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IbcAgreementPacketData.Merge(m, src)
}
func (m *IbcAgreementPacketData) XXX_Size() int {
	return m.Size()
}
func (m *IbcAgreementPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_IbcAgreementPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_IbcAgreementPacketData proto.InternalMessageInfo

func (m *IbcAgreementPacketData) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *IbcAgreementPacketData) GetAgreementId() string {
	if m != nil {
		return m.AgreementId
	}
	return ""
}

func (m *IbcAgreementPacketData) GetAgreementNumber() string {
	if m != nil {
		return m.AgreementNumber
	}
	return ""
}

func (m *IbcAgreementPacketData) GetAgreementName() string {
	if m != nil {
		return m.AgreementName
	}
	return ""
}

func (m *IbcAgreementPacketData) GetAgreementType() string {
	if m != nil {
		return m.AgreementType
	}
	return ""
}

func (m *IbcAgreementPacketData) GetAgreementStatus() string {
	if m != nil {
		return m.AgreementStatus
	}
	return ""
}

func (m *IbcAgreementPacketData) GetTotalAgreementValue() string {
	if m != nil {
		return m.TotalAgreementValue
	}
	return ""
}

func (m *IbcAgreementPacketData) GetParty() string {
	if m != nil {
		return m.Party
	}
	return ""
}

func (m *IbcAgreementPacketData) GetCounterparty() string {
	if m != nil {
		return m.Counterparty
	}
	return ""
}

func (m *IbcAgreementPacketData) GetStartDate() string {
	if m != nil {
		return m.StartDate
	}
	return ""
}

func (m *IbcAgreementPacketData) GetEndDate() string {
	if m != nil {
		return m.EndDate
	}
	return ""
}

func init() {
	proto.RegisterType((*IbcAgreementPacketData)(nil), "stateset.agreement.v1beta1.IbcAgreementPacketData")
}

func init() {
	proto.RegisterFile("stateset/agreement/v1beta1/packet.proto", fileDescriptor_72241c4a0b42e896)
}

var fileDescriptor_72241c4a0b42e896 = []byte{
	// 354 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x92, 0xbb, 0x4e, 0xeb, 0x40,
	0x10, 0x86, 0xe3, 0x93, 0x93, 0xdb, 0x26, 0x5c, 0xb4, 0x5c, 0xb4, 0x20, 0x61, 0x41, 0x24, 0x04,
	0x14, 0xd8, 0x0a, 0x54, 0x94, 0xa0, 0x34, 0x69, 0x10, 0x22, 0x88, 0x82, 0x26, 0x1a, 0xdb, 0xa3,
	0x24, 0x4a, 0xec, 0xb5, 0xd6, 0xe3, 0x88, 0xbc, 0x05, 0xaf, 0xc0, 0xdb, 0x50, 0xa6, 0xa4, 0x44,
	0xc9, 0x8b, 0x20, 0xaf, 0xb1, 0x73, 0xe9, 0x3c, 0xff, 0xf7, 0x8d, 0x47, 0x3b, 0x1a, 0x76, 0x11,
	0x11, 0x10, 0x46, 0x48, 0x36, 0xf4, 0x15, 0xa2, 0x8f, 0x01, 0xd9, 0x93, 0x96, 0x83, 0x04, 0x2d,
	0x3b, 0x04, 0x77, 0x84, 0x64, 0x85, 0x4a, 0x92, 0xe4, 0xc7, 0x99, 0x68, 0xe5, 0xa2, 0xf5, 0x27,
	0x36, 0x3f, 0x8b, 0xec, 0xb0, 0xe3, 0xb8, 0xf7, 0x19, 0x78, 0xd2, 0x8d, 0x6d, 0x20, 0xe0, 0x82,
	0x55, 0x5c, 0x85, 0x40, 0x52, 0x09, 0xe3, 0xd4, 0xb8, 0xac, 0x3d, 0x67, 0x25, 0x3f, 0x63, 0x8d,
	0xfc, 0x4f, 0xbd, 0xa1, 0x27, 0xfe, 0x69, 0x5c, 0xcf, 0xb3, 0x8e, 0xc7, 0xaf, 0xd8, 0xee, 0x52,
	0x09, 0x62, 0xdf, 0x41, 0x25, 0x8a, 0x5a, 0xdb, 0xc9, 0xf3, 0x47, 0x1d, 0xf3, 0x73, 0xb6, 0xbd,
	0xa2, 0x82, 0x8f, 0xe2, 0xbf, 0x16, 0xb7, 0x96, 0x22, 0xf8, 0xb8, 0xae, 0xd1, 0x34, 0x44, 0x51,
	0xda, 0xd0, 0x5e, 0xa6, 0x21, 0xae, 0x0f, 0x4e, 0x1e, 0x1e, 0x47, 0xa2, 0xbc, 0x31, 0xb8, 0xab,
	0x63, 0x7e, 0xc3, 0x0e, 0x48, 0x12, 0x8c, 0x7b, 0xcb, 0x86, 0x09, 0x8c, 0x63, 0x14, 0x15, 0xed,
	0xef, 0x69, 0x98, 0x6f, 0xe6, 0x35, 0x41, 0x7c, 0x9f, 0x95, 0x42, 0x50, 0x34, 0x15, 0x55, 0xed,
	0xa4, 0x05, 0x6f, 0xb2, 0x86, 0x2b, 0xe3, 0x80, 0x50, 0xa5, 0xb0, 0xa6, 0xe1, 0x5a, 0xc6, 0x4f,
	0x18, 0x8b, 0x08, 0x14, 0xf5, 0x3c, 0x20, 0x14, 0x4c, 0x1b, 0x35, 0x9d, 0xb4, 0x81, 0x90, 0x1f,
	0xb1, 0x2a, 0x06, 0x5e, 0x0a, 0xeb, 0xe9, 0xba, 0x31, 0xf0, 0x12, 0xf4, 0xd0, 0xfd, 0x9a, 0x9b,
	0xc6, 0x6c, 0x6e, 0x1a, 0x3f, 0x73, 0xd3, 0xf8, 0x58, 0x98, 0x85, 0xd9, 0xc2, 0x2c, 0x7c, 0x2f,
	0xcc, 0xc2, 0xdb, 0x5d, 0x7f, 0x48, 0x83, 0xd8, 0xb1, 0x5c, 0xe9, 0xdb, 0xf9, 0x35, 0x64, 0x1f,
	0xd7, 0xce, 0x58, 0xba, 0x23, 0x77, 0x00, 0xc3, 0xc0, 0x7e, 0x5f, 0xb9, 0x91, 0x64, 0x77, 0x91,
	0x53, 0xd6, 0xb7, 0x71, 0xfb, 0x1b, 0x00, 0x00, 0xff, 0xff, 0x84, 0xc7, 0xe7, 0xdb, 0x46, 0x02,
	0x00, 0x00,
}

func (m *IbcAgreementPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IbcAgreementPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IbcAgreementPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.EndDate) > 0 {
		i -= len(m.EndDate)
		copy(dAtA[i:], m.EndDate)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.EndDate)))
		i--
		dAtA[i] = 0x5a
	}
	if len(m.StartDate) > 0 {
		i -= len(m.StartDate)
		copy(dAtA[i:], m.StartDate)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.StartDate)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.Counterparty) > 0 {
		i -= len(m.Counterparty)
		copy(dAtA[i:], m.Counterparty)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Counterparty)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Party) > 0 {
		i -= len(m.Party)
		copy(dAtA[i:], m.Party)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Party)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.TotalAgreementValue) > 0 {
		i -= len(m.TotalAgreementValue)
		copy(dAtA[i:], m.TotalAgreementValue)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.TotalAgreementValue)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.AgreementStatus) > 0 {
		i -= len(m.AgreementStatus)
		copy(dAtA[i:], m.AgreementStatus)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AgreementStatus)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.AgreementType) > 0 {
		i -= len(m.AgreementType)
		copy(dAtA[i:], m.AgreementType)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AgreementType)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.AgreementName) > 0 {
		i -= len(m.AgreementName)
		copy(dAtA[i:], m.AgreementName)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AgreementName)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.AgreementNumber) > 0 {
		i -= len(m.AgreementNumber)
		copy(dAtA[i:], m.AgreementNumber)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AgreementNumber)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.AgreementId) > 0 {
		i -= len(m.AgreementId)
		copy(dAtA[i:], m.AgreementId)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AgreementId)))
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
func (m *IbcAgreementPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AgreementId)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AgreementNumber)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AgreementName)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AgreementType)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.AgreementStatus)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.TotalAgreementValue)
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
	l = len(m.StartDate)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.EndDate)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}

func sovPacket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPacket(x uint64) (n int) {
	return sovPacket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *IbcAgreementPacketData) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: IbcAgreementPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IbcAgreementPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
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
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementId", wireType)
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
			m.AgreementId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementNumber", wireType)
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
			m.AgreementNumber = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementName", wireType)
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
			m.AgreementName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementType", wireType)
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
			m.AgreementType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AgreementStatus", wireType)
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
			m.AgreementStatus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TotalAgreementValue", wireType)
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
			m.TotalAgreementValue = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
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
		case 9:
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
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StartDate", wireType)
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
			m.StartDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EndDate", wireType)
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
			m.EndDate = string(dAtA[iNdEx:postIndex])
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
