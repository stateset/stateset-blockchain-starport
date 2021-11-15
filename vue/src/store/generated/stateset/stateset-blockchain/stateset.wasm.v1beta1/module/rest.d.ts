export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface V1Beta1CodeInfo {
    /** @format uint64 */
    codeId?: string;
    /** @format byte */
    codeHash?: string;
    creator?: string;
}
/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
}
export interface V1Beta1ContractInfo {
    address?: string;
    creator?: string;
    admin?: string;
    /** @format uint64 */
    codeId?: string;
    /** @format byte */
    initMsg?: string;
}
/**
 * MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type.
 */
export declare type V1Beta1MsgClearContractAdminResponse = object;
/**
 * MsgExecuteContractResponse defines the Msg/ExecuteContract response type.
 */
export interface V1Beta1MsgExecuteContractResponse {
    /** @format byte */
    data?: string;
}
/**
 * MsgInstantiateContractResponse defines the Msg/InstantiateContract response type.
 */
export interface V1Beta1MsgInstantiateContractResponse {
    /** ContractAddress is the bech32 address of the new contract instance. */
    contractAddress?: string;
    /** @format byte */
    data?: string;
}
/**
 * MsgMigrateCodeResponse defines the Msg/MigrateCode response type.
 */
export declare type V1Beta1MsgMigrateCodeResponse = object;
/**
 * MsgMigrateContractResponse defines the Msg/MigrateContract response type.
 */
export interface V1Beta1MsgMigrateContractResponse {
    /** @format byte */
    data?: string;
}
/**
 * MsgStoreCodeResponse defines the Msg/StoreCode response type.
 */
export interface V1Beta1MsgStoreCodeResponse {
    /** @format uint64 */
    codeId?: string;
}
/**
 * MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type.
 */
export declare type V1Beta1MsgUpdateContractAdminResponse = object;
/**
 * Params defines the parameters for the wasm module.
 */
export interface V1Beta1Params {
    /** @format uint64 */
    maxContractSize?: string;
    /** @format uint64 */
    maxContractGas?: string;
    /** @format uint64 */
    maxContractMsgSize?: string;
}
/**
* QueryByteCodeResponse is response type for the
QueryyByteCode RPC method.
*/
export interface V1Beta1QueryByteCodeResponse {
    /** @format byte */
    byteCode?: string;
}
/**
* QueryCodeInfoResponse is response type for the
QueryyCodeInfo RPC method.
*/
export interface V1Beta1QueryCodeInfoResponse {
    codeInfo?: V1Beta1CodeInfo;
}
/**
* QueryContractInfoResponse is response type for the
Query/ContractInfo RPC method.
*/
export interface V1Beta1QueryContractInfoResponse {
    contractInfo?: V1Beta1ContractInfo;
}
/**
* QueryContractStoreResponse is response type for the
Query/ContractStore RPC method.
*/
export interface V1Beta1QueryContractStoreResponse {
    /** @format byte */
    queryResult?: string;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface V1Beta1QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: V1Beta1Params;
}
/**
* QueryRawStoreResponse is response type for the
Query/RawStore RPC method.
*/
export interface V1Beta1QueryRawStoreResponse {
    /** @format byte */
    data?: string;
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
 * @title stateset/wasm/v1beta1/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCodeInfo
     * @summary CodeInfo returns the stored code info
     * @request GET:/stateset/wasm/v1beta1/codes/{codeId}
     */
    queryCodeInfo: (codeId: string, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryCodeInfoResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryByteCode
     * @summary ByteCode returns the stored byte code
     * @request GET:/stateset/wasm/v1beta1/codes/{codeId}/byte_code
     */
    queryByteCode: (codeId: string, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryByteCodeResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryContractStore
     * @summary ContractStore return smart query result from the contract
     * @request GET:/stateset/wasm/v1beta1/contract/{contractAddress}/store
     */
    queryContractStore: (contractAddress: string, query?: {
        queryMsg?: string;
    }, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryContractStoreResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRawStore
     * @summary RawStore return single key from the raw store data of a contract
     * @request GET:/stateset/wasm/v1beta1/contract/{contractAddress}/store/raw
     */
    queryRawStore: (contractAddress: string, query?: {
        key?: string;
    }, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryRawStoreResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryContractInfo
     * @summary ContractInfo returns the stored contract info
     * @request GET:/stateset/wasm/v1beta1/contracts/{contractAddress}
     */
    queryContractInfo: (contractAddress: string, params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryContractInfoResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Params queries all parameters.
     * @request GET:/stateset/wasm/v1beta1/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<V1Beta1QueryParamsResponse, RpcStatus>>;
}
export {};
