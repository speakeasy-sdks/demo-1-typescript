/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Resources Types define the technology that Applications can have dependencies on.
 *
 * @remarks
 *
 * Each Resource Type also defines a set of input parameters (`inputs_schema`), and a set of output data (`outputs_schema`). When provisioning a resource, these are treated as inputs and outputs respectively.
 * <SchemaDefinition schemaRef="#/components/schemas/ResourceTypeRequest" />
 *
 */
export class ResourceType {
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
     * List Resource Types.
     */
    async getOrgsOrgIdResourcesTypes(
        req: operations.GetOrgsOrgIdResourcesTypesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdResourcesTypesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdResourcesTypesRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/resources/types", req);

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

        const res: operations.GetOrgsOrgIdResourcesTypesResponse =
            new operations.GetOrgsOrgIdResourcesTypesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.resourceTypeResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.resourceTypeResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ResourceTypeResponse,
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
}
