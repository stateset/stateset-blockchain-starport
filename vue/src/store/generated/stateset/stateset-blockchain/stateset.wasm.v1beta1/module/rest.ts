/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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
export type V1Beta1MsgClearContractAdminResponse = object;

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
export type V1Beta1MsgMigrateCodeResponse = object;

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
export type V1Beta1MsgUpdateContractAdminResponse = object;

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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title stateset/wasm/v1beta1/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCodeInfo
   * @summary CodeInfo returns the stored code info
   * @request GET:/stateset/wasm/v1beta1/codes/{codeId}
   */
  queryCodeInfo = (codeId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryCodeInfoResponse, RpcStatus>({
      path: `/stateset/wasm/v1beta1/codes/${codeId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryByteCode
   * @summary ByteCode returns the stored byte code
   * @request GET:/stateset/wasm/v1beta1/codes/{codeId}/byte_code
   */
  queryByteCode = (codeId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryByteCodeResponse, RpcStatus>({
      path: `/stateset/wasm/v1beta1/codes/${codeId}/byte_code`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryContractStore
   * @summary ContractStore return smart query result from the contract
   * @request GET:/stateset/wasm/v1beta1/contract/{contractAddress}/store
   */
  queryContractStore = (contractAddress: string, query?: { queryMsg?: string }, params: RequestParams = {}) =>
    this.request<V1Beta1QueryContractStoreResponse, RpcStatus>({
      path: `/stateset/wasm/v1beta1/contract/${contractAddress}/store`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRawStore
   * @summary RawStore return single key from the raw store data of a contract
   * @request GET:/stateset/wasm/v1beta1/contract/{contractAddress}/store/raw
   */
  queryRawStore = (contractAddress: string, query?: { key?: string }, params: RequestParams = {}) =>
    this.request<V1Beta1QueryRawStoreResponse, RpcStatus>({
      path: `/stateset/wasm/v1beta1/contract/${contractAddress}/store/raw`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryContractInfo
   * @summary ContractInfo returns the stored contract info
   * @request GET:/stateset/wasm/v1beta1/contracts/{contractAddress}
   */
  queryContractInfo = (contractAddress: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryContractInfoResponse, RpcStatus>({
      path: `/stateset/wasm/v1beta1/contracts/${contractAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params queries all parameters.
   * @request GET:/stateset/wasm/v1beta1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryParamsResponse, RpcStatus>({
      path: `/stateset/wasm/v1beta1/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
