/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Active Resources represent the concrete resources provisioned for an Environment. They are provisioned on the first deployment after a dependency on a particular resource type is introduced into an Environment. In general, Active Resources are only deleted when their introductory Environment is deleted.
 *
 * @remarks
 *
 * Active Resources are provisioned based on a Resource Definition. The Resource Definition describes how to provision a concrete resource based on a Resource Type and metadata about the Environment (for example the Environment Type or the Application ID). The criteria for how to choose a Resource Definition is known as a Matching Criteria. If the Matching Criteria changes or the Resource Definition is deleted, the concrete resource represented by an Active Resource might be deleted and reprovisioned when a deployment occurs in the Environment.
 * <SchemaDefinition schemaRef="#/components/schemas/ActiveResourceRequest" />
 *
 */
export class ActiveResource {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete Active Resources.
     */
    async deleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResId(
        req: operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/envs/{envId}/resources/{type}/{resId}",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdResponse =
            new operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [202, 204, 404, 409].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List Active Resources provisioned in an environment.
     */
    async getOrgsOrgIdAppsAppIdEnvsEnvIdResources(
        req: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/envs/{envId}/resources",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesResponse =
            new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.activeResourceResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.activeResourceResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ActiveResourceResponse,
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
     * List Active Resources provisioned via a specific Resource Definition.
     */
    async getOrgsOrgIdResourcesDefsDefIdResources(
        req: operations.GetOrgsOrgIdResourcesDefsDefIdResourcesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdResourcesDefsDefIdResourcesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdResourcesDefsDefIdResourcesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/resources/defs/{defId}/resources",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.GetOrgsOrgIdResourcesDefsDefIdResourcesResponse =
            new operations.GetOrgsOrgIdResourcesDefsDefIdResourcesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.activeResourceResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.activeResourceResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ActiveResourceResponse,
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
