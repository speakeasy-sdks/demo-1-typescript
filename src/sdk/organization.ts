/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * An Organization is the top level object in Humanitec. All other objects belong to an Organization.
 *
 * @remarks
 * <SchemaDefinition schemaRef="#/components/schemas/OrganizationRequest" />
 *
 */
export class Organization {
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
     * List active organizations the user has access to.
     */
    async getOrgs(config?: AxiosRequestConfig): Promise<operations.GetOrgsResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/orgs";

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
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

        const res: operations.GetOrgsResponse = new operations.GetOrgsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.organizationResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.organizationResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.OrganizationResponse,
                        resFieldDepth
                    );
                }
                break;
            case [401, 403].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * Get the specified Organization.
     */
    async getOrgsOrgId(
        req: operations.GetOrgsOrgIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}", req);

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

        const res: operations.GetOrgsOrgIdResponse = new operations.GetOrgsOrgIdResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.organizationResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.OrganizationResponse
                    );
                }
                break;
            case [400, 409].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorInfoResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ErrorInfoResponse
                    );
                }
                break;
            case [401, 403].includes(httpRes?.status):
                break;
        }

        return res;
    }
}
