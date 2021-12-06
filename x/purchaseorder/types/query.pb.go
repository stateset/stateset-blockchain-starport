// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: stateset/purchaseorder/v1beta1/query.proto

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

// QueryPurchaseOrderRequest is the Query/PurchaseOrder request type.
type QueryPurchaseOrderRequest struct {
	// purchase_id is the unique ID of purchase order to query.
	PurchaseorderId string `protobuf:"bytes,1,opt,name=purchaseorder_id,json=purchaseorderId,proto3" json:"purchaseorder_id,omitempty" yaml:"purchaseorder_id"`
}

func (m *QueryPurchaseOrderRequest) Reset()         { *m = QueryPurchaseOrderRequest{} }
func (m *QueryPurchaseOrderRequest) String() string { return proto.CompactTextString(m) }
func (*QueryPurchaseOrderRequest) ProtoMessage()    {}
func (*QueryPurchaseOrderRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b51eedd3c3b69826, []int{0}
}
func (m *QueryPurchaseOrderRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryPurchaseOrderRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryPurchaseOrderRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryPurchaseOrderRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryPurchaseOrderRequest.Merge(m, src)
}
func (m *QueryPurchaseOrderRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryPurchaseOrderRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryPurchaseOrderRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryPurchaseOrderRequest proto.InternalMessageInfo

func (m *QueryPurchaseOrderRequest) GetPurchaseorderId() string {
	if m != nil {
		return m.PurchaseorderId
	}
	return ""
}

type QueryPurchaseOrderResponse struct {
	Purchaseorder *PurchaseOrder `protobuf:"bytes,1,opt,name=purchaseorder,proto3" json:"purchaseorder,omitempty"`
}

func (m *QueryPurchaseOrderResponse) Reset()         { *m = QueryPurchaseOrderResponse{} }
func (m *QueryPurchaseOrderResponse) String() string { return proto.CompactTextString(m) }
func (*QueryPurchaseOrderResponse) ProtoMessage()    {}
func (*QueryPurchaseOrderResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b51eedd3c3b69826, []int{1}
}
func (m *QueryPurchaseOrderResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryPurchaseOrderResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryPurchaseOrderResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryPurchaseOrderResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryPurchaseOrderResponse.Merge(m, src)
}
func (m *QueryPurchaseOrderResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryPurchaseOrderResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryPurchaseOrderResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryPurchaseOrderResponse proto.InternalMessageInfo

func (m *QueryPurchaseOrderResponse) GetPurchaseorder() *PurchaseOrder {
	if m != nil {
		return m.Purchaseorder
	}
	return nil
}

type QueryPurchaseOrdersRequest struct {
	Filters    PurchaseOrderFilters `protobuf:"bytes,1,opt,name=filters,proto3" json:"filters"`
	Pagination *query.PageRequest   `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryPurchaseOrdersRequest) Reset()         { *m = QueryPurchaseOrdersRequest{} }
func (m *QueryPurchaseOrdersRequest) String() string { return proto.CompactTextString(m) }
func (*QueryPurchaseOrdersRequest) ProtoMessage()    {}
func (*QueryPurchaseOrdersRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b51eedd3c3b69826, []int{2}
}
func (m *QueryPurchaseOrdersRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryPurchaseOrdersRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryPurchaseOrdersRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryPurchaseOrdersRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryPurchaseOrdersRequest.Merge(m, src)
}
func (m *QueryPurchaseOrdersRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryPurchaseOrdersRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryPurchaseOrdersRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryPurchaseOrdersRequest proto.InternalMessageInfo

func (m *QueryPurchaseOrdersRequest) GetFilters() PurchaseOrderFilters {
	if m != nil {
		return m.Filters
	}
	return PurchaseOrderFilters{}
}

func (m *QueryPurchaseOrdersRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryPurchaseOrdersResponse struct {
	PurchaseOrder []PurchaseOrder     `protobuf:"bytes,1,rep,name=PurchaseOrder,proto3" json:"PurchaseOrder"`
	Pagination    *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryPurchaseOrdersResponse) Reset()         { *m = QueryPurchaseOrdersResponse{} }
func (m *QueryPurchaseOrdersResponse) String() string { return proto.CompactTextString(m) }
func (*QueryPurchaseOrdersResponse) ProtoMessage()    {}
func (*QueryPurchaseOrdersResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b51eedd3c3b69826, []int{3}
}
func (m *QueryPurchaseOrdersResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryPurchaseOrdersResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryPurchaseOrdersResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryPurchaseOrdersResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryPurchaseOrdersResponse.Merge(m, src)
}
func (m *QueryPurchaseOrdersResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryPurchaseOrdersResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryPurchaseOrdersResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryPurchaseOrdersResponse proto.InternalMessageInfo

func (m *QueryPurchaseOrdersResponse) GetPurchaseOrder() []PurchaseOrder {
	if m != nil {
		return m.PurchaseOrder
	}
	return nil
}

func (m *QueryPurchaseOrdersResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryPurchaseOrderRequest)(nil), "stateset.purchaseorder.v1beta1.QueryPurchaseOrderRequest")
	proto.RegisterType((*QueryPurchaseOrderResponse)(nil), "stateset.purchaseorder.v1beta1.QueryPurchaseOrderResponse")
	proto.RegisterType((*QueryPurchaseOrdersRequest)(nil), "stateset.purchaseorder.v1beta1.QueryPurchaseOrdersRequest")
	proto.RegisterType((*QueryPurchaseOrdersResponse)(nil), "stateset.purchaseorder.v1beta1.QueryPurchaseOrdersResponse")
}

func init() {
	proto.RegisterFile("stateset/purchaseorder/v1beta1/query.proto", fileDescriptor_b51eedd3c3b69826)
}

var fileDescriptor_b51eedd3c3b69826 = []byte{
	// 495 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x54, 0xcd, 0x6e, 0xd3, 0x30,
	0x1c, 0xaf, 0x37, 0x3e, 0x84, 0xd1, 0x00, 0x59, 0x48, 0x94, 0x0e, 0x65, 0x53, 0x0e, 0x0c, 0x4d,
	0xaa, 0xcd, 0x06, 0x42, 0xa2, 0x9c, 0x28, 0x52, 0xd1, 0x4e, 0x40, 0xe1, 0x02, 0x17, 0x70, 0x52,
	0x93, 0x46, 0xa4, 0x71, 0x6a, 0x3b, 0x68, 0x15, 0xe2, 0xc2, 0x13, 0x20, 0xf1, 0x00, 0xbc, 0x07,
	0xb7, 0xdd, 0x76, 0x1c, 0xe2, 0xc2, 0x69, 0x42, 0x2d, 0x4f, 0xc0, 0x13, 0xa0, 0xc4, 0xce, 0x36,
	0x47, 0x81, 0x28, 0xbb, 0x45, 0xf6, 0xef, 0xf3, 0xff, 0xaf, 0x0b, 0x37, 0xa5, 0xa2, 0x8a, 0x49,
	0xa6, 0x48, 0x92, 0x0a, 0x7f, 0x4c, 0x25, 0xe3, 0x62, 0xc4, 0x04, 0x79, 0xbf, 0xe5, 0x31, 0x45,
	0xb7, 0xc8, 0x34, 0x65, 0x62, 0x86, 0x13, 0xc1, 0x15, 0x47, 0x4e, 0x81, 0xc5, 0x16, 0x16, 0x1b,
	0x6c, 0xe7, 0x6a, 0xc0, 0x03, 0x9e, 0x43, 0x49, 0xf6, 0xa5, 0x59, 0x9d, 0x1b, 0x01, 0xe7, 0x41,
	0xc4, 0x08, 0x4d, 0x42, 0x42, 0xe3, 0x98, 0x2b, 0xaa, 0x42, 0x1e, 0x4b, 0x73, 0xbb, 0xe9, 0x73,
	0x39, 0xe1, 0x92, 0x78, 0x54, 0x32, 0x6d, 0x76, 0x64, 0x9d, 0xd0, 0x20, 0x8c, 0x73, 0xb0, 0xc1,
	0x6e, 0xd4, 0x64, 0x55, 0xbb, 0x1a, 0xe8, 0xfa, 0xf0, 0xfa, 0xb3, 0x4c, 0xea, 0xa9, 0x81, 0x3d,
	0xc9, 0x60, 0x43, 0x36, 0x4d, 0x99, 0x54, 0x68, 0x00, 0xaf, 0x58, 0xf4, 0xd7, 0xe1, 0xa8, 0x0d,
	0xd6, 0xc1, 0xad, 0x0b, 0xfd, 0xd5, 0x3f, 0x87, 0x6b, 0xd7, 0x66, 0x74, 0x12, 0xf5, 0xdc, 0x32,
	0xc2, 0x1d, 0x5e, 0xb6, 0x8e, 0x76, 0x46, 0xee, 0x14, 0x76, 0xaa, 0x4c, 0x64, 0xc2, 0x63, 0xc9,
	0xd0, 0x73, 0xb8, 0x62, 0x11, 0x72, 0x8b, 0x8b, 0xdb, 0x5d, 0xfc, 0xff, 0x19, 0x62, 0x5b, 0xcd,
	0xd6, 0x70, 0xbf, 0x81, 0x2a, 0x4f, 0x59, 0x34, 0x7b, 0x01, 0xcf, 0xbf, 0x0d, 0x23, 0xc5, 0x84,
	0x34, 0x6e, 0x77, 0x1b, 0xb9, 0x0d, 0x34, 0xb7, 0x7f, 0x66, 0xff, 0x70, 0xad, 0x35, 0x2c, 0xa4,
	0xd0, 0x00, 0xc2, 0xe3, 0x4d, 0xb4, 0x97, 0x72, 0xe1, 0x9b, 0x58, 0xaf, 0x0d, 0x67, 0x6b, 0xc3,
	0xfa, 0x37, 0x72, 0xa4, 0x49, 0x03, 0x66, 0x12, 0x0d, 0x4f, 0x30, 0xdd, 0x3d, 0x00, 0x57, 0x2b,
	0xc3, 0x9b, 0x89, 0xbd, 0x84, 0x2b, 0xd6, 0x4d, 0x1b, 0xac, 0x2f, 0x37, 0x9e, 0x98, 0x09, 0x6f,
	0x2b, 0xa1, 0xc7, 0x15, 0x15, 0x36, 0x6a, 0x2b, 0xe8, 0x5c, 0x27, 0x3b, 0x6c, 0x7f, 0x5d, 0x86,
	0x67, 0xf3, 0x0e, 0x68, 0x0f, 0xc0, 0x4b, 0x76, 0x11, 0xd4, 0xab, 0x4b, 0xfa, 0xef, 0xd5, 0x75,
	0x1e, 0x9c, 0x8a, 0xab, 0x13, 0xba, 0xf7, 0x3e, 0xfd, 0xf8, 0xfd, 0x65, 0xe9, 0x36, 0xc2, 0xa4,
	0xe6, 0x81, 0x58, 0xa7, 0x12, 0x7d, 0x07, 0xa5, 0x91, 0xa3, 0xfb, 0xcd, 0x63, 0x14, 0x0d, 0x7a,
	0xa7, 0xa1, 0x9a, 0x02, 0x3b, 0x79, 0x81, 0x47, 0xe8, 0x61, 0xb3, 0x02, 0xe4, 0x43, 0xf9, 0x99,
	0x7e, 0xec, 0xbf, 0xd9, 0x9f, 0x3b, 0xe0, 0x60, 0xee, 0x80, 0x5f, 0x73, 0x07, 0x7c, 0x5e, 0x38,
	0xad, 0x83, 0x85, 0xd3, 0xfa, 0xb9, 0x70, 0x5a, 0xaf, 0x06, 0x41, 0xa8, 0xc6, 0xa9, 0x87, 0x7d,
	0x3e, 0x39, 0xb6, 0x29, 0x3e, 0xba, 0x5e, 0xc4, 0xfd, 0x77, 0xfe, 0x98, 0x86, 0x71, 0x57, 0x2a,
	0x2a, 0x12, 0x2e, 0x14, 0xd9, 0x2d, 0xa5, 0x50, 0xb3, 0x84, 0x49, 0xef, 0x5c, 0xfe, 0x1f, 0x73,
	0xe7, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xc7, 0x50, 0xd9, 0x21, 0x3a, 0x05, 0x00, 0x00,
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
	// PurchaseOrders returns purchase order details based on purchase order.
	PurchaseOrders(ctx context.Context, in *QueryPurchaseOrdersRequest, opts ...grpc.CallOption) (*QueryPurchaseOrdersResponse, error)
	// Purchase Order returns purchase order details based on purchase order.
	PurchaseOrder(ctx context.Context, in *QueryPurchaseOrderRequest, opts ...grpc.CallOption) (*QueryPurchaseOrderResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) PurchaseOrders(ctx context.Context, in *QueryPurchaseOrdersRequest, opts ...grpc.CallOption) (*QueryPurchaseOrdersResponse, error) {
	out := new(QueryPurchaseOrdersResponse)
	err := c.cc.Invoke(ctx, "/stateset.purchaseorder.v1beta1.Query/PurchaseOrders", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) PurchaseOrder(ctx context.Context, in *QueryPurchaseOrderRequest, opts ...grpc.CallOption) (*QueryPurchaseOrderResponse, error) {
	out := new(QueryPurchaseOrderResponse)
	err := c.cc.Invoke(ctx, "/stateset.purchaseorder.v1beta1.Query/PurchaseOrder", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// PurchaseOrders returns purchase order details based on purchase order.
	PurchaseOrders(context.Context, *QueryPurchaseOrdersRequest) (*QueryPurchaseOrdersResponse, error)
	// Purchase Order returns purchase order details based on purchase order.
	PurchaseOrder(context.Context, *QueryPurchaseOrderRequest) (*QueryPurchaseOrderResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) PurchaseOrders(ctx context.Context, req *QueryPurchaseOrdersRequest) (*QueryPurchaseOrdersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PurchaseOrders not implemented")
}
func (*UnimplementedQueryServer) PurchaseOrder(ctx context.Context, req *QueryPurchaseOrderRequest) (*QueryPurchaseOrderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PurchaseOrder not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_PurchaseOrders_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryPurchaseOrdersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).PurchaseOrders(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/stateset.purchaseorder.v1beta1.Query/PurchaseOrders",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).PurchaseOrders(ctx, req.(*QueryPurchaseOrdersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_PurchaseOrder_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryPurchaseOrderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).PurchaseOrder(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/stateset.purchaseorder.v1beta1.Query/PurchaseOrder",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).PurchaseOrder(ctx, req.(*QueryPurchaseOrderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "stateset.purchaseorder.v1beta1.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PurchaseOrders",
			Handler:    _Query_PurchaseOrders_Handler,
		},
		{
			MethodName: "PurchaseOrder",
			Handler:    _Query_PurchaseOrder_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "stateset/purchaseorder/v1beta1/query.proto",
}

func (m *QueryPurchaseOrderRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryPurchaseOrderRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryPurchaseOrderRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PurchaseorderId) > 0 {
		i -= len(m.PurchaseorderId)
		copy(dAtA[i:], m.PurchaseorderId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.PurchaseorderId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryPurchaseOrderResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryPurchaseOrderResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryPurchaseOrderResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Purchaseorder != nil {
		{
			size, err := m.Purchaseorder.MarshalToSizedBuffer(dAtA[:i])
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

func (m *QueryPurchaseOrdersRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryPurchaseOrdersRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryPurchaseOrdersRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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

func (m *QueryPurchaseOrdersResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryPurchaseOrdersResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryPurchaseOrdersResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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
	if len(m.PurchaseOrder) > 0 {
		for iNdEx := len(m.PurchaseOrder) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PurchaseOrder[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
func (m *QueryPurchaseOrderRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.PurchaseorderId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryPurchaseOrderResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Purchaseorder != nil {
		l = m.Purchaseorder.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryPurchaseOrdersRequest) Size() (n int) {
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

func (m *QueryPurchaseOrdersResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.PurchaseOrder) > 0 {
		for _, e := range m.PurchaseOrder {
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

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryPurchaseOrderRequest) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: QueryPurchaseOrderRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryPurchaseOrderRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PurchaseorderId", wireType)
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
			m.PurchaseorderId = string(dAtA[iNdEx:postIndex])
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
func (m *QueryPurchaseOrderResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: QueryPurchaseOrderResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryPurchaseOrderResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Purchaseorder", wireType)
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
			if m.Purchaseorder == nil {
				m.Purchaseorder = &PurchaseOrder{}
			}
			if err := m.Purchaseorder.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
func (m *QueryPurchaseOrdersRequest) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: QueryPurchaseOrdersRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryPurchaseOrdersRequest: illegal tag %d (wire type %d)", fieldNum, wire)
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
func (m *QueryPurchaseOrdersResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: QueryPurchaseOrdersResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryPurchaseOrdersResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PurchaseOrder", wireType)
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
			m.PurchaseOrder = append(m.PurchaseOrder, PurchaseOrder{})
			if err := m.PurchaseOrder[len(m.PurchaseOrder)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
