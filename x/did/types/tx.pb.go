// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: stateset/did/v1beta1/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

// MsgAddDid defines a message for adding a DID.
type MsgAddDid struct {
	Did    string `protobuf:"bytes,1,opt,name=did,proto3" json:"did,omitempty" json:"did" yaml:"did"`
	PubKey string `protobuf:"bytes,2,opt,name=pubKey,proto3" json:"pubKey,omitempty" json:"pubKey" yaml:"pubKey"`
}

func (m *MsgAddDid) Reset()         { *m = MsgAddDid{} }
func (m *MsgAddDid) String() string { return proto.CompactTextString(m) }
func (*MsgAddDid) ProtoMessage()    {}
func (*MsgAddDid) Descriptor() ([]byte, []int) {
	return fileDescriptor_13c104b2e20bcc0e, []int{0}
}
func (m *MsgAddDid) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgAddDid) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgAddDid.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgAddDid) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgAddDid.Merge(m, src)
}
func (m *MsgAddDid) XXX_Size() int {
	return m.Size()
}
func (m *MsgAddDid) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgAddDid.DiscardUnknown(m)
}

var xxx_messageInfo_MsgAddDid proto.InternalMessageInfo

func (m *MsgAddDid) GetDid() string {
	if m != nil {
		return m.Did
	}
	return ""
}

func (m *MsgAddDid) GetPubKey() string {
	if m != nil {
		return m.PubKey
	}
	return ""
}

// MsgAddDidResponse defines the Msg/AddDid response type.
type MsgAddDidResponse struct {
}

func (m *MsgAddDidResponse) Reset()         { *m = MsgAddDidResponse{} }
func (m *MsgAddDidResponse) String() string { return proto.CompactTextString(m) }
func (*MsgAddDidResponse) ProtoMessage()    {}
func (*MsgAddDidResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_13c104b2e20bcc0e, []int{1}
}
func (m *MsgAddDidResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgAddDidResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgAddDidResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgAddDidResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgAddDidResponse.Merge(m, src)
}
func (m *MsgAddDidResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgAddDidResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgAddDidResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgAddDidResponse proto.InternalMessageInfo

// MsgAddCredential defines a message for adding a credential to the signer's DID.
type MsgAddCredential struct {
	DidCredential DidCredential `protobuf:"bytes,1,opt,name=did_credential,json=didCredential,proto3" json:"credential" yaml:"credential"`
}

func (m *MsgAddCredential) Reset()         { *m = MsgAddCredential{} }
func (m *MsgAddCredential) String() string { return proto.CompactTextString(m) }
func (*MsgAddCredential) ProtoMessage()    {}
func (*MsgAddCredential) Descriptor() ([]byte, []int) {
	return fileDescriptor_13c104b2e20bcc0e, []int{2}
}
func (m *MsgAddCredential) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgAddCredential) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgAddCredential.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgAddCredential) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgAddCredential.Merge(m, src)
}
func (m *MsgAddCredential) XXX_Size() int {
	return m.Size()
}
func (m *MsgAddCredential) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgAddCredential.DiscardUnknown(m)
}

var xxx_messageInfo_MsgAddCredential proto.InternalMessageInfo

func (m *MsgAddCredential) GetDidCredential() DidCredential {
	if m != nil {
		return m.DidCredential
	}
	return DidCredential{}
}

// MsgAddCredentialResponse defines the Msg/AddCredential response type.
type MsgAddCredentialResponse struct {
}

func (m *MsgAddCredentialResponse) Reset()         { *m = MsgAddCredentialResponse{} }
func (m *MsgAddCredentialResponse) String() string { return proto.CompactTextString(m) }
func (*MsgAddCredentialResponse) ProtoMessage()    {}
func (*MsgAddCredentialResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_13c104b2e20bcc0e, []int{3}
}
func (m *MsgAddCredentialResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgAddCredentialResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgAddCredentialResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgAddCredentialResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgAddCredentialResponse.Merge(m, src)
}
func (m *MsgAddCredentialResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgAddCredentialResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgAddCredentialResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgAddCredentialResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgAddDid)(nil), "did.MsgAddDid")
	proto.RegisterType((*MsgAddDidResponse)(nil), "did.MsgAddDidResponse")
	proto.RegisterType((*MsgAddCredential)(nil), "did.MsgAddCredential")
	proto.RegisterType((*MsgAddCredentialResponse)(nil), "did.MsgAddCredentialResponse")
}

func init() { proto.RegisterFile("stateset/did/v1beta1/tx.proto", fileDescriptor_13c104b2e20bcc0e) }

var fileDescriptor_13c104b2e20bcc0e = []byte{
	// 368 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0xb1, 0x4e, 0xfa, 0x50,
	0x14, 0xc6, 0xdb, 0x3f, 0x09, 0x09, 0xf7, 0x1f, 0x88, 0x54, 0x31, 0x58, 0x43, 0x4b, 0xba, 0x68,
	0x62, 0xa0, 0x82, 0x83, 0x89, 0x71, 0x11, 0x71, 0x32, 0x2c, 0x1d, 0x1c, 0x5c, 0x4c, 0xdb, 0x73,
	0x53, 0xae, 0x42, 0x6f, 0xed, 0xbd, 0x10, 0x58, 0x7c, 0x06, 0x1f, 0x8b, 0x91, 0xd1, 0xa9, 0x31,
	0xb0, 0x39, 0xf2, 0x04, 0xa6, 0xbd, 0xb4, 0x80, 0x61, 0x3b, 0xe7, 0xbb, 0xbf, 0xef, 0x9c, 0xaf,
	0x3d, 0xa8, 0xc6, 0xb8, 0xcd, 0x31, 0xc3, 0xdc, 0x04, 0x02, 0xe6, 0xb8, 0xe5, 0x60, 0x6e, 0xb7,
	0x4c, 0x3e, 0x69, 0x06, 0x21, 0xe5, 0x54, 0xc9, 0x01, 0x01, 0xf5, 0xc8, 0xa3, 0x1e, 0x4d, 0x7a,
	0x33, 0xae, 0xc4, 0x93, 0xaa, 0xed, 0x75, 0x02, 0x01, 0xf1, 0x6e, 0xbc, 0xa3, 0x42, 0x8f, 0x79,
	0x77, 0x00, 0x5d, 0x02, 0xca, 0x05, 0x8a, 0x27, 0x55, 0xe5, 0xba, 0x7c, 0x5e, 0xe8, 0x9c, 0xac,
	0x22, 0xbd, 0xf2, 0xca, 0xa8, 0x7f, 0x63, 0x00, 0x01, 0xa3, 0x3e, 0xb5, 0x87, 0x03, 0x51, 0x5a,
	0x31, 0xa5, 0x5c, 0xa3, 0x7c, 0x30, 0x72, 0x1e, 0xf1, 0xb4, 0xfa, 0x2f, 0xe1, 0xf5, 0x55, 0xa4,
	0x9f, 0x0a, 0x5e, 0xe8, 0xa9, 0x65, 0xdd, 0x59, 0x6b, 0xdc, 0x38, 0x44, 0xe5, 0x6c, 0xa5, 0x85,
	0x59, 0x40, 0x7d, 0x86, 0x8d, 0x31, 0x3a, 0x10, 0xe2, 0x7d, 0x88, 0x01, 0xfb, 0x9c, 0xd8, 0x03,
	0xc5, 0x41, 0x25, 0x20, 0xf0, 0xe2, 0x66, 0x4a, 0x92, 0xec, 0x7f, 0x5b, 0x69, 0xc6, 0xf9, 0xbb,
	0x64, 0x8b, 0xed, 0x9c, 0xcd, 0x22, 0x5d, 0xfa, 0x89, 0x74, 0xb4, 0xa1, 0x57, 0x91, 0x5e, 0x16,
	0x09, 0x36, 0x9a, 0x61, 0x15, 0x61, 0xdb, 0x67, 0xa8, 0xa8, 0xfa, 0x77, 0x6f, 0x9a, 0xa9, 0xfd,
	0x81, 0x72, 0x3d, 0xe6, 0x29, 0x97, 0x28, 0xbf, 0xfe, 0x3f, 0xa5, 0x64, 0x71, 0x16, 0x5e, 0x3d,
	0xde, 0xed, 0x53, 0xa3, 0xf2, 0x80, 0x8a, 0xbb, 0x5f, 0x52, 0xd9, 0x02, 0x37, 0xb2, 0x5a, 0xdb,
	0x2b, 0xa7, 0x63, 0x3a, 0x4f, 0xb3, 0x85, 0x26, 0xcf, 0x17, 0x9a, 0xfc, 0xbd, 0xd0, 0xe4, 0xcf,
	0xa5, 0x26, 0xcd, 0x97, 0x9a, 0xf4, 0xb5, 0xd4, 0xa4, 0xe7, 0x5b, 0x8f, 0xf0, 0xfe, 0xc8, 0x69,
	0xba, 0x74, 0x68, 0x66, 0x07, 0x4e, 0x8b, 0x86, 0x33, 0xa0, 0xee, 0x9b, 0xdb, 0xb7, 0x89, 0xdf,
	0x60, 0xdc, 0x0e, 0x03, 0x1a, 0x72, 0x73, 0x92, 0xdc, 0x9f, 0x4f, 0x03, 0xcc, 0x9c, 0x7c, 0x72,
	0xfa, 0xab, 0xdf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xae, 0x09, 0x93, 0x9f, 0x56, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	// AddDid defines a method for adding a DID.
	AddDid(ctx context.Context, in *MsgAddDid, opts ...grpc.CallOption) (*MsgAddDidResponse, error)
	// AddCredential defines a method for adding a credential to the signer's DID.
	AddCredential(ctx context.Context, in *MsgAddCredential, opts ...grpc.CallOption) (*MsgAddCredentialResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) AddDid(ctx context.Context, in *MsgAddDid, opts ...grpc.CallOption) (*MsgAddDidResponse, error) {
	out := new(MsgAddDidResponse)
	err := c.cc.Invoke(ctx, "/did.Msg/AddDid", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) AddCredential(ctx context.Context, in *MsgAddCredential, opts ...grpc.CallOption) (*MsgAddCredentialResponse, error) {
	out := new(MsgAddCredentialResponse)
	err := c.cc.Invoke(ctx, "/did.Msg/AddCredential", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	// AddDid defines a method for adding a DID.
	AddDid(context.Context, *MsgAddDid) (*MsgAddDidResponse, error)
	// AddCredential defines a method for adding a credential to the signer's DID.
	AddCredential(context.Context, *MsgAddCredential) (*MsgAddCredentialResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) AddDid(ctx context.Context, req *MsgAddDid) (*MsgAddDidResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddDid not implemented")
}
func (*UnimplementedMsgServer) AddCredential(ctx context.Context, req *MsgAddCredential) (*MsgAddCredentialResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddCredential not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_AddDid_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgAddDid)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).AddDid(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/did.Msg/AddDid",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).AddDid(ctx, req.(*MsgAddDid))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_AddCredential_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgAddCredential)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).AddCredential(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/did.Msg/AddCredential",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).AddCredential(ctx, req.(*MsgAddCredential))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "did.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddDid",
			Handler:    _Msg_AddDid_Handler,
		},
		{
			MethodName: "AddCredential",
			Handler:    _Msg_AddCredential_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "stateset/did/v1beta1/tx.proto",
}

func (m *MsgAddDid) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgAddDid) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgAddDid) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PubKey) > 0 {
		i -= len(m.PubKey)
		copy(dAtA[i:], m.PubKey)
		i = encodeVarintTx(dAtA, i, uint64(len(m.PubKey)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Did) > 0 {
		i -= len(m.Did)
		copy(dAtA[i:], m.Did)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Did)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgAddDidResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgAddDidResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgAddDidResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgAddCredential) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgAddCredential) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgAddCredential) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.DidCredential.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintTx(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *MsgAddCredentialResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgAddCredentialResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgAddCredentialResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgAddDid) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Did)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.PubKey)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgAddDidResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgAddCredential) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.DidCredential.Size()
	n += 1 + l + sovTx(uint64(l))
	return n
}

func (m *MsgAddCredentialResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgAddDid) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgAddDid: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgAddDid: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Did", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Did = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PubKey", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PubKey = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func (m *MsgAddDidResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgAddDidResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgAddDidResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func (m *MsgAddCredential) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgAddCredential: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgAddCredential: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DidCredential", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.DidCredential.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func (m *MsgAddCredentialResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgAddCredentialResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgAddCredentialResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
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
					return 0, ErrIntOverflowTx
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
					return 0, ErrIntOverflowTx
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
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
