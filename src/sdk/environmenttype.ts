/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Environment Types are a way of grouping and managing Environments. Every Environment has exactly 1 Environment Type.
 *
 * @remarks
 *
 * Environment Types can be used with External Resources to manage where resources such as databases are provisioned or even which cluster to deploy to.
 * <SchemaDefinition schemaRef="#/components/schemas/EnvironmentTypeRequest" />
 *
 */
export class EnvironmentType {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Deletes an Environment Type
     *
     * @remarks
     * Deletes a specific Environment Type from an Organization. If there are Environments with this Type in the Organization, the operation will fail.
     */
    async deleteOrgsOrgIdEnvTypesEnvTypeId(
        req: operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/env-types/{envTypeId}", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdResponse =
            new operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentTypeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.EnvironmentTypeResponse
                    );
                }
                break;
            case [401, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.humanitecErrorResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.HumanitecErrorResponse
                    );
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteOrgsOrgIdEnvTypesEnvTypeId409ApplicationJSONObjects =
                        utils.objectToClass(httpRes?.data);
                }
                break;
        }

        return res;
    }

    /**
     * List all Environment Types
     *
     * @remarks
     * Lists all Environment Types in an Organization.
     */
    async getOrgsOrgIdEnvTypes(
        req: operations.GetOrgsOrgIdEnvTypesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdEnvTypesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdEnvTypesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/env-types", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.GetOrgsOrgIdEnvTypesResponse =
            new operations.GetOrgsOrgIdEnvTypesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentTypeResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.environmentTypeResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.EnvironmentTypeResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get an Environment Type
     *
     * @remarks
     * Gets a specific Environment Type within an Organization.
     */
    async getOrgsOrgIdEnvTypesEnvTypeId(
        req: operations.GetOrgsOrgIdEnvTypesEnvTypeIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdEnvTypesEnvTypeIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdEnvTypesEnvTypeIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/env-types/{envTypeId}", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.GetOrgsOrgIdEnvTypesEnvTypeIdResponse =
            new operations.GetOrgsOrgIdEnvTypesEnvTypeIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentTypeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.EnvironmentTypeResponse
                    );
                }
                break;
            case httpRes?.status == 404:
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
     * Add a new Environment Type
     *
     * @remarks
     * Adds a new Environment Type to an Organization.
     */
    async postOrgsOrgIdEnvTypes(
        req: operations.PostOrgsOrgIdEnvTypesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostOrgsOrgIdEnvTypesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrgsOrgIdEnvTypesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/env-types", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "environmentTypeRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.PostOrgsOrgIdEnvTypesResponse =
            new operations.PostOrgsOrgIdEnvTypesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentTypeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.EnvironmentTypeResponse
                    );
                }
                break;
            case [400, 401, 409].includes(httpRes?.status):
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
