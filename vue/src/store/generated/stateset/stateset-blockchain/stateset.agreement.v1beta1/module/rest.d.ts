export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface V1Beta1Agreement {
    creator?: string;
    agreementId?: string;
    agreementNumber?: string;
    agreementName?: string;
    agreementType?: string;
    agreementStatus?: string;
    totalAgreementValue?: string;
    party?: string;
    counterparty?: string;
    startDate?: string;
    endDate?: string;
}
export interface V1Beta1AgreementFilters {
    owner?: string;
    state?: string;
}
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgActivateAgreementResponse = object;
/**
 * MsgAmendResponse is the Msg/AmendAgreement response type.
 */
export declare type V1Beta1MsgAmendAgreementResponse = object;
/**
 * MsgCreateAgreementResponse is the Msg/CreateAgreement response type.
 */
export interface V1Beta1MsgCreateAgreementResponse {
    /** agreement_id is the unique ID of the newly created agreement class. */
    agreementId?: string;
}
export declare type V1Beta1MsgDeleteAgreementResponse = object;
/**
 * MsgExpireResponse is the Msg/ExpireAgreement response type.
 */
export declare type V1Beta1MsgExpireAgreementResponse = object;
/**
 * MsgRenewAgreementResponse is the Msg/SignData response type.
 */
export declare type V1Beta1MsgRenewAgreementResponse = object;
/**
 * MsgTerminateResponse is the Msg/TerminateAgreement response type.
 */
export declare type V1Beta1MsgTerminateAgreementResponse = object;
/**
 * MsgSignDataResponse is the Msg/SignData response type.
 */
export interface V1Beta1MsgUpdateAgreementResponse {
    /** agreement_id is the unique ID of the newly created agreement class. */
    agreementId?: string;
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
 * QueryClassInfoResponse is the Query/ClassInfo request type.
 */
export interface V1Beta1QueryAgreementResponse {
    agreement?: V1Beta1Agreement;
}
export interface V1Beta1QueryAgreementsResponse {
    agreements?: V1Beta1Agreement[];
    /**
     * message SomeRequest {
     *          Foo some_parameter = 1;
     *          PageRequest pagination = 2;
     *  }
     */
    pagination?: V1Beta1PageRequest;
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
 * @title stateset/agreement/v1beta1/events.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAgreements
     * @summary Agreements returns agreeement details based on agreement.
     * @request GET:/stateset/agreement/v1beta1/agreements
     */
    queryAgreements: (query?: {
        "filters.owner"?: string;
        "filters.state"?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryAgreementsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAgreement
     * @summary Agreement returns agreeement details based on agreement.
     * @request GET:/stateset/agreement/v1beta1/agreements/{agreementId}
     */
    queryAgreement: (agreementId: string, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryAgreementResponse, RpcStatus>>;
}
export {};
