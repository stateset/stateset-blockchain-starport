export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface V1Beta1Invoice {
    creator?: string;
    invoiceId?: string;
    invoiceNumber?: string;
    invoiceName?: string;
    billingReason?: string;
    amountDue?: string;
    amountPaid?: string;
    amountRemaining?: string;
    subtotal?: string;
    total?: string;
    party?: string;
    counterparty?: string;
    factor?: string;
    dueDate?: string;
    periodStartDate?: string;
    periodEndDate?: string;
}
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgCancelInvoiceResponse = object;
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgCompleteInvoiceResponse = object;
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgCreateInvoiceResponse = object;
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgDeleteInvoiceResponse = object;
export declare type V1Beta1MsgFactorInvoiceResponse = object;
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgUpdateInvoiceResponse = object;
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
/**
 * QueryClassInfoResponse is the Query/ClassInfo request type.
 */
export interface V1Beta1QueryInvoiceResponse {
    invoice?: V1Beta1Invoice;
}
export interface V1Beta1QueryInvoicesResponse {
    invoices?: V1Beta1Invoice[];
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
 * @title stateset/invoice/v1beta1/events.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryInvoices
     * @summary Invoices returns purchase order details based on purchase order.
     * @request GET:/stateset/invoice/v1beta1/invoices
     */
    queryInvoices: (params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryInvoicesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryInvoice
     * @summary Queries a day by id.
     * @request GET:/stateset/invoice/v1beta1/invoices/{invoiceId}
     */
    queryInvoice: (invoiceId: string, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryInvoiceResponse, RpcStatus>>;
}
export {};
