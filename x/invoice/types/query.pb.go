// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: stateset/invoice/v1beta1/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// QueryInvoiceRequest is the Query/Invoice request type.
type QueryInvoicesRequest struct {
	Filters    InvoiceFilters     `protobuf:"bytes,1,opt,name=filters,proto3" json:"filters"`
	Pagination *query.PageRequest `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryInvoicesRequest) Reset()         { *m = QueryInvoicesRequest{} }
func (m *QueryInvoicesRequest) String() string { return proto.CompactTextString(m) }
func (*QueryInvoicesRequest) ProtoMessage()    {}
func (*QueryInvoicesRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_55105d9f29a140cb, []int{0}
}
func (m *QueryInvoicesRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryInvoicesRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryInvoicesRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryInvoicesRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryInvoicesRequest.Merge(m, src)
}
func (m *QueryInvoicesRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryInvoicesRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryInvoicesRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryInvoicesRequest proto.InternalMessageInfo

func (m *QueryInvoicesRequest) GetFilters() InvoiceFilters {
	if m != nil {
		return m.Filters
	}
	return InvoiceFilters{}
}

func (m *QueryInvoicesRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryInvoicesResponse struct {
	Invoices   []Invoice           `protobuf:"bytes,1,rep,name=invoices,proto3" json:"invoices"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryInvoicesResponse) Reset()         { *m = QueryInvoicesResponse{} }
func (m *QueryInvoicesResponse) String() string { return proto.CompactTextString(m) }
func (*QueryInvoicesResponse) ProtoMessage()    {}
func (*QueryInvoicesResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_55105d9f29a140cb, []int{1}
}
func (m *QueryInvoicesResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryInvoicesResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryInvoicesResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryInvoicesResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryInvoicesResponse.Merge(m, src)
}
func (m *QueryInvoicesResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryInvoicesResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryInvoicesResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryInvoicesResponse proto.InternalMessageInfo

func (m *QueryInvoicesResponse) GetInvoices() []Invoice {
	if m != nil {
		return m.Invoices
	}
	return nil
}

func (m *QueryInvoicesResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryInvoiceRequest struct {
	// invoice_id is the unique ID of invoice to query.
	InvoiceId string `protobuf:"bytes,1,opt,name=invoice_id,json=invoiceId,proto3" json:"invoice_id,omitempty" yaml:"invoice_id"`
}

func (m *QueryInvoiceRequest) Reset()         { *m = QueryInvoiceRequest{} }
func (m *QueryInvoiceRequest) String() string { return proto.CompactTextString(m) }
func (*QueryInvoiceRequest) ProtoMessage()    {}
func (*QueryInvoiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_55105d9f29a140cb, []int{2}
}
func (m *QueryInvoiceRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryInvoiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryInvoiceRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryInvoiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryInvoiceRequest.Merge(m, src)
}
func (m *QueryInvoiceRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryInvoiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryInvoiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryInvoiceRequest proto.InternalMessageInfo

func (m *QueryInvoiceRequest) GetInvoiceId() string {
	if m != nil {
		return m.InvoiceId
	}
	return ""
}

// QueryClassInfoResponse is the Query/ClassInfo request type.
type QueryInvoiceResponse struct {
	Invoice *Invoice `protobuf:"bytes,1,opt,name=invoice,proto3" json:"invoice,omitempty"`
}

func (m *QueryInvoiceResponse) Reset()         { *m = QueryInvoiceResponse{} }
func (m *QueryInvoiceResponse) String() string { return proto.CompactTextString(m) }
func (*QueryInvoiceResponse) ProtoMessage()    {}
func (*QueryInvoiceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_55105d9f29a140cb, []int{3}
}
func (m *QueryInvoiceResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryInvoiceResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryInvoiceResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryInvoiceResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryInvoiceResponse.Merge(m, src)
}
func (m *QueryInvoiceResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryInvoiceResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryInvoiceResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryInvoiceResponse proto.InternalMessageInfo

func (m *QueryInvoiceResponse) GetInvoice() *Invoice {
	if m != nil {
		return m.Invoice
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryInvoicesRequest)(nil), "stateset.invoice.v1beta1.QueryInvoicesRequest")
	proto.RegisterType((*QueryInvoicesResponse)(nil), "stateset.invoice.v1beta1.QueryInvoicesResponse")
	proto.RegisterType((*QueryInvoiceRequest)(nil), "stateset.invoice.v1beta1.QueryInvoiceRequest")
	proto.RegisterType((*QueryInvoiceResponse)(nil), "stateset.invoice.v1beta1.QueryInvoiceResponse")
}

func init() {
	proto.RegisterFile("stateset/invoice/v1beta1/query.proto", fileDescriptor_55105d9f29a140cb)
}

var fileDescriptor_55105d9f29a140cb = []byte{
	// 479 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0x4f, 0x6b, 0x13, 0x41,
	0x18, 0x87, 0x77, 0xe2, 0x9f, 0xb4, 0xd3, 0x93, 0x63, 0x0b, 0x21, 0xc8, 0xd6, 0x2e, 0x45, 0x43,
	0xa1, 0x33, 0x24, 0x0a, 0x05, 0xbd, 0x45, 0xa8, 0x16, 0x2f, 0x76, 0xbd, 0x79, 0x91, 0xd9, 0xed,
	0xb8, 0x1d, 0xdc, 0xec, 0x6c, 0x33, 0x93, 0xd2, 0x20, 0x5e, 0xfc, 0x04, 0x82, 0x07, 0xcf, 0x1e,
	0x04, 0xbf, 0x88, 0xd0, 0x63, 0xc1, 0x8b, 0xa7, 0x20, 0x89, 0x9f, 0xc0, 0x4f, 0x20, 0xbb, 0x33,
	0xb3, 0x9b, 0x94, 0x2c, 0x9b, 0xdb, 0x86, 0x79, 0xde, 0xdf, 0xfb, 0xcc, 0xfb, 0x4e, 0xe0, 0xae,
	0x54, 0x54, 0x31, 0xc9, 0x14, 0xe1, 0xc9, 0xb9, 0xe0, 0x21, 0x23, 0xe7, 0xdd, 0x80, 0x29, 0xda,
	0x25, 0x67, 0x23, 0x36, 0x1c, 0xe3, 0x74, 0x28, 0x94, 0x40, 0x2d, 0x4b, 0x61, 0x43, 0x61, 0x43,
	0xb5, 0x37, 0x23, 0x11, 0x89, 0x1c, 0x22, 0xd9, 0x97, 0xe6, 0xdb, 0xf7, 0x22, 0x21, 0xa2, 0x98,
	0x11, 0x9a, 0x72, 0x42, 0x93, 0x44, 0x28, 0xaa, 0xb8, 0x48, 0xa4, 0x39, 0xdd, 0xa9, 0xec, 0xa9,
	0x2e, 0x0c, 0xb2, 0x17, 0x0a, 0x39, 0x10, 0x92, 0x04, 0x54, 0x32, 0x6d, 0x52, 0x30, 0x29, 0x8d,
	0x78, 0x92, 0xe7, 0x69, 0xd6, 0xfb, 0x01, 0xe0, 0xe6, 0x71, 0x86, 0x1c, 0xe9, 0x34, 0xe9, 0xb3,
	0xb3, 0x11, 0x93, 0x0a, 0xbd, 0x80, 0xcd, 0x77, 0x3c, 0x56, 0x6c, 0x28, 0x5b, 0xe0, 0x3e, 0xe8,
	0x6c, 0xf4, 0x3a, 0xb8, 0xea, 0x1e, 0xd8, 0xd4, 0x1e, 0x6a, 0xbe, 0x7f, 0xf3, 0x72, 0xb2, 0xed,
	0xf8, 0xb6, 0x1c, 0x1d, 0x42, 0x58, 0xb6, 0x6d, 0x35, 0xf2, 0xb0, 0x07, 0x58, 0x3b, 0xe2, 0xcc,
	0x11, 0xeb, 0x69, 0xd9, 0xb4, 0x57, 0x34, 0x62, 0xc6, 0xc2, 0x9f, 0xab, 0xf4, 0xbe, 0x03, 0xb8,
	0x75, 0x4d, 0x55, 0xa6, 0x22, 0x91, 0x0c, 0x3d, 0x83, 0x6b, 0x46, 0x29, 0x93, 0xbd, 0xd1, 0xd9,
	0xe8, 0xed, 0xd4, 0xca, 0x1a, 0xcb, 0xa2, 0x10, 0x3d, 0x5f, 0xa2, 0xf9, 0xb0, 0x56, 0x53, 0x1b,
	0x2c, 0x78, 0xbe, 0x84, 0x77, 0xe7, 0x35, 0xed, 0x40, 0x1f, 0x43, 0x68, 0x7a, 0xbd, 0xe5, 0x27,
	0xf9, 0x4c, 0xd7, 0xfb, 0x5b, 0xff, 0x26, 0xdb, 0x77, 0xc6, 0x74, 0x10, 0x3f, 0xf1, 0xca, 0x33,
	0xcf, 0x5f, 0x37, 0x3f, 0x8e, 0x4e, 0xbc, 0xd7, 0x8b, 0xeb, 0x29, 0xae, 0xfc, 0x14, 0x36, 0x0d,
	0x64, 0xd6, 0x53, 0x7f, 0x63, 0xdf, 0x56, 0xf4, 0x7e, 0x36, 0xe0, 0xad, 0x3c, 0x15, 0x7d, 0x05,
	0x70, 0xcd, 0x8e, 0x13, 0xe1, 0xea, 0x88, 0x65, 0x4f, 0xa4, 0x4d, 0x56, 0xe6, 0xb5, 0xb4, 0xb7,
	0xf7, 0xe9, 0xd7, 0xdf, 0x2f, 0x8d, 0x5d, 0xe4, 0x91, 0xca, 0x47, 0x5c, 0xac, 0xe3, 0x1b, 0x80,
	0x4d, 0x13, 0x80, 0xf6, 0x57, 0x6b, 0x64, 0xbd, 0xf0, 0xaa, 0xb8, 0xd1, 0x3a, 0xc8, 0xb5, 0xba,
	0x88, 0xd4, 0x6b, 0x91, 0x0f, 0xe5, 0x9e, 0x3e, 0xf6, 0x8f, 0x2f, 0xa7, 0x2e, 0xb8, 0x9a, 0xba,
	0xe0, 0xcf, 0xd4, 0x05, 0x9f, 0x67, 0xae, 0x73, 0x35, 0x73, 0x9d, 0xdf, 0x33, 0xd7, 0x79, 0x73,
	0x10, 0x71, 0x75, 0x3a, 0x0a, 0x70, 0x28, 0x06, 0x65, 0xa8, 0xfd, 0xd8, 0x0f, 0x62, 0x11, 0xbe,
	0x0f, 0x4f, 0x29, 0x4f, 0xc8, 0x45, 0xd1, 0x4a, 0x8d, 0x53, 0x26, 0x83, 0xdb, 0xf9, 0xdf, 0xf2,
	0xd1, 0xff, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb6, 0x4f, 0x85, 0x06, 0x5b, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Invoices returns invoices.
	Invoices(ctx context.Context, in *QueryInvoicesRequest, opts ...grpc.CallOption) (*QueryInvoicesResponse, error)
	// Invoice returns invoice details based on incoice id.
	Invoice(ctx context.Context, in *QueryInvoiceRequest, opts ...grpc.CallOption) (*QueryInvoiceResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Invoices(ctx context.Context, in *QueryInvoicesRequest, opts ...grpc.CallOption) (*QueryInvoicesResponse, error) {
	out := new(QueryInvoicesResponse)
	err := c.cc.Invoke(ctx, "/stateset.invoice.v1beta1.Query/Invoices", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Invoice(ctx context.Context, in *QueryInvoiceRequest, opts ...grpc.CallOption) (*QueryInvoiceResponse, error) {
	out := new(QueryInvoiceResponse)
	err := c.cc.Invoke(ctx, "/stateset.invoice.v1beta1.Query/Invoice", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Invoices returns invoices.
	Invoices(context.Context, *QueryInvoicesRequest) (*QueryInvoicesResponse, error)
	// Invoice returns invoice details based on incoice id.
	Invoice(context.Context, *QueryInvoiceRequest) (*QueryInvoiceResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Invoices(ctx context.Context, req *QueryInvoicesRequest) (*QueryInvoicesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Invoices not implemented")
}
func (*UnimplementedQueryServer) Invoice(ctx context.Context, req *QueryInvoiceRequest) (*QueryInvoiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Invoice not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Invoices_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryInvoicesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Invoices(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/stateset.invoice.v1beta1.Query/Invoices",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Invoices(ctx, req.(*QueryInvoicesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Invoice_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryInvoiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Invoice(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/stateset.invoice.v1beta1.Query/Invoice",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Invoice(ctx, req.(*QueryInvoiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "stateset.invoice.v1beta1.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Invoices",
			Handler:    _Query_Invoices_Handler,
		},
		{
			MethodName: "Invoice",
			Handler:    _Query_Invoice_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "stateset/invoice/v1beta1/query.proto",
}

func (m *QueryInvoicesRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryInvoicesRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryInvoicesRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	{
		size, err := m.Filters.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryInvoicesResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryInvoicesResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryInvoicesResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Invoices) > 0 {
		for iNdEx := len(m.Invoices) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Invoices[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *QueryInvoiceRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryInvoiceRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryInvoiceRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.InvoiceId) > 0 {
		i -= len(m.InvoiceId)
		copy(dAtA[i:], m.InvoiceId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.InvoiceId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryInvoiceResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryInvoiceResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryInvoiceResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Invoice != nil {
		{
			size, err := m.Invoice.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryInvoicesRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Filters.Size()
	n += 1 + l + sovQuery(uint64(l))
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryInvoicesResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Invoices) > 0 {
		for _, e := range m.Invoices {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryInvoiceRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.InvoiceId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryInvoiceResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Invoice != nil {
		l = m.Invoice.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryInvoicesRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryInvoicesRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryInvoicesRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Filters", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Filters.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryInvoicesResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryInvoicesResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryInvoicesResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Invoices", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Invoices = append(m.Invoices, Invoice{})
			if err := m.Invoices[len(m.Invoices)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryInvoiceRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryInvoiceRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryInvoiceRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InvoiceId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InvoiceId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryInvoiceResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryInvoiceResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryInvoiceResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Invoice", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Invoice == nil {
				m.Invoice = &Invoice{}
			}
			if err := m.Invoice.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
