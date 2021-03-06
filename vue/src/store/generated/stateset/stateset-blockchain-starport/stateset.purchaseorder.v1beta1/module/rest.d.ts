export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
 * MsgCancelPurchaseOrderResponse is the Msg/CancelPurchaseOrder response type.
 */
export interface V1Beta1MsgCancelPurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId?: string;
}
/**
* MsgCompletePurchaseOrderResponse is the Msg/CompletePurchaseOrderResponse
response type.
*/
export interface V1Beta1MsgCompletePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId?: string;
}
/**
 * MsgCreatePurchaseOrderResponse is the Msg/CreatePurchaseOrder response type.
 */
export interface V1Beta1MsgCreatePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId?: string;
}
export interface V1Beta1MsgDeletePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId?: string;
}
/**
* MsgFinancePurchaseOrderResponse is the Msg/FinancePurchaseOrder response
type.
*/
export declare type V1Beta1MsgFinancePurchaseOrderResponse = object;
/**
* MsgFinancePurchaseOrderResponse is the Msg/FinancePurchaseOrder response
type.
*/
export declare type V1Beta1MsgLockPurchaseOrderResponse = object;
export interface V1Beta1MsgUpdatePurchaseOrderResponse {
    /**
     * purchaseorder_id is the unique ID of the newly created purchase order
     * class.
     */
    purchaseorderId?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export interface V1Beta1PurchaseOrder {
    creator?: string;
    purchaseorderId?: string;
    purchaseorderNumber?: string;
    purchaseorderHash?: string;
    purchaseorderStatus?: string;
    description?: string;
    purchaseDate?: string;
    deliveryDate?: string;
    subtotal?: string;
    total?: string;
    purchaser?: string;
    vendor?: string;
    fulfiller?: string;
    financer?: string;
}
export interface V1Beta1PurchaseOrderFilters {
    owner?: string;
    state?: string;
}
export interface V1Beta1QueryPurchaseOrderResponse {
    purchaseorder?: V1Beta1PurchaseOrder;
}
export interface V1Beta1QueryPurchaseOrdersResponse {
    PurchaseOrder?: V1Beta1PurchaseOrder[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title stateset/purchaseorder/v1beta1/events.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryPurchaseOrders
     * @summary PurchaseOrders returns purchase order details based on purchase order.
     * @request GET:/stateset/purchaseorder/v1beta1/purchaseorders
     */
    queryPurchaseOrders: (query?: {
        "filters.owner"?: string;
        "filters.state"?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryPurchaseOrdersResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPurchaseOrder
     * @summary Purchase Order returns purchase order details based on purchase order.
     * @request GET:/stateset/purchaseorder/v1beta1/purchaseorders/{purchaseorderId}
     */
    queryPurchaseOrder: (purchaseorderId: string, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryPurchaseOrderResponse, RpcStatus>>;
}
export {};
