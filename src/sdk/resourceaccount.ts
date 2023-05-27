/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * ResourceAccount represents the account being used to access a resource.
 *
 * @remarks
 *
 * Resource Accounts hold credentials that are required to provision and manage resources.
 * <SchemaDefinition schemaRef="#/components/schemas/ResourceAccountRequest" />
 *
 */
export class ResourceAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * List Resource Accounts in the organization.
     */
    async getOrgsOrgIdResourcesAccounts(
        req: operations.GetOrgsOrgIdResourcesAccountsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdResourcesAccountsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdResourcesAccountsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/resources/accounts", req);

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetOrgsOrgIdResourcesAccountsResponse =
            new operations.GetOrgsOrgIdResourcesAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.resourceAccountResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.resourceAccountResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ResourceAccountResponse,
                        resFieldDepth
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.humanitecErrorResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.HumanitecErrorResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a Resource Account.
     */
    async getOrgsOrgIdResourcesAccountsAccId(
        req: operations.GetOrgsOrgIdResourcesAccountsAccIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdResourcesAccountsAccIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdResourcesAccountsAccIdRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/resources/accounts/{accId}",
            req
        );

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetOrgsOrgIdResourcesAccountsAccIdResponse =
            new operations.GetOrgsOrgIdResourcesAccountsAccIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.resourceAccountResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ResourceAccountResponse
                    );
                }
                break;
            case [404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.humanitecErrorResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.HumanitecErrorResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a Resource Account.
     */
    async patchOrgsOrgIdResourcesAccountsAccId(
        req: operations.PatchOrgsOrgIdResourcesAccountsAccIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PatchOrgsOrgIdResourcesAccountsAccIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchOrgsOrgIdResourcesAccountsAccIdRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/resources/accounts/{accId}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "updateResourceAccountRequestRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PatchOrgsOrgIdResourcesAccountsAccIdResponse =
            new operations.PatchOrgsOrgIdResourcesAccountsAccIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.resourceAccountResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ResourceAccountResponse
                    );
                }
                break;
            case [400, 404, 422, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.humanitecErrorResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.HumanitecErrorResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create a new Resource Account in the organization.
     */
    async postOrgsOrgIdResourcesAccounts(
        req: operations.PostOrgsOrgIdResourcesAccountsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostOrgsOrgIdResourcesAccountsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrgsOrgIdResourcesAccountsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/resources/accounts", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createResourceAccountRequestRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostOrgsOrgIdResourcesAccountsResponse =
            new operations.PostOrgsOrgIdResourcesAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.resourceAccountResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ResourceAccountResponse
                    );
                }
                break;
            case [400, 401, 409, 422, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.humanitecErrorResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.HumanitecErrorResponse
                    );
                }
                break;
        }

        return res;
    }
}
