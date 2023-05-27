/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Webhook is a special type of a Job, it performs a HTTPS request to a specified URL with specified headers.
 *
 * @remarks
 * <SchemaDefinition schemaRef="#/components/schemas/WebhookRequest" />
 *
 */
export class Event {
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
     * Deletes all Jobs for the Application
     */
    async deleteOrgsOrgIdAppsAppIdJobs(
        req: operations.DeleteOrgsOrgIdAppsAppIdJobsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteOrgsOrgIdAppsAppIdJobsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrgsOrgIdAppsAppIdJobsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/apps/{appId}/jobs", req);

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.DeleteOrgsOrgIdAppsAppIdJobsResponse =
            new operations.DeleteOrgsOrgIdAppsAppIdJobsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                break;
        }

        return res;
    }

    /**
     * Delete a Webhook
     */
    async deleteOrgsOrgIdAppsAppIdWebhooksJobId(
        req: operations.DeleteOrgsOrgIdAppsAppIdWebhooksJobIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteOrgsOrgIdAppsAppIdWebhooksJobIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrgsOrgIdAppsAppIdWebhooksJobIdRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/webhooks/{jobId}",
            req
        );

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.DeleteOrgsOrgIdAppsAppIdWebhooksJobIdResponse =
            new operations.DeleteOrgsOrgIdAppsAppIdWebhooksJobIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case [204, 404].includes(httpRes?.status):
                break;
        }

        return res;
    }

    /**
     * List Webhooks
     */
    async getOrgsOrgIdAppsAppIdWebhooks(
        req: operations.GetOrgsOrgIdAppsAppIdWebhooksRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdAppsAppIdWebhooksResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdAppsAppIdWebhooksRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/apps/{appId}/webhooks", req);

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

        const res: operations.GetOrgsOrgIdAppsAppIdWebhooksResponse =
            new operations.GetOrgsOrgIdAppsAppIdWebhooksResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.webhookResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.WebhookResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a Webhook
     */
    async getOrgsOrgIdAppsAppIdWebhooksJobId(
        req: operations.GetOrgsOrgIdAppsAppIdWebhooksJobIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdAppsAppIdWebhooksJobIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdAppsAppIdWebhooksJobIdRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/webhooks/{jobId}",
            req
        );

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

        const res: operations.GetOrgsOrgIdAppsAppIdWebhooksJobIdResponse =
            new operations.GetOrgsOrgIdAppsAppIdWebhooksJobIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.WebhookResponse
                    );
                }
                break;
            case httpRes?.status == 404:
                break;
        }

        return res;
    }

    /**
     * List Events
     */
    async getOrgsOrgIdEvents(
        req: operations.GetOrgsOrgIdEventsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdEventsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdEventsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/events", req);

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

        const res: operations.GetOrgsOrgIdEventsResponse =
            new operations.GetOrgsOrgIdEventsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.eventResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.eventResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.EventResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create a new Webhook
     */
    async postOrgsOrgIdAppsAppIdWebhooks(
        req: operations.PostOrgsOrgIdAppsAppIdWebhooksRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostOrgsOrgIdAppsAppIdWebhooksResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrgsOrgIdAppsAppIdWebhooksRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/apps/{appId}/webhooks", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "webhookRequest", "json");
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

        const res: operations.PostOrgsOrgIdAppsAppIdWebhooksResponse =
            new operations.PostOrgsOrgIdAppsAppIdWebhooksResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.WebhookResponse
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
            case httpRes?.status == 422:
                break;
        }

        return res;
    }

    /**
     * Update a Webhook
     */
    async postOrgsOrgIdAppsAppIdWebhooksJobId(
        req: operations.PostOrgsOrgIdAppsAppIdWebhooksJobIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostOrgsOrgIdAppsAppIdWebhooksJobIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrgsOrgIdAppsAppIdWebhooksJobIdRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/webhooks/{jobId}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "webhookRequest", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
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

        const res: operations.PostOrgsOrgIdAppsAppIdWebhooksJobIdResponse =
            new operations.PostOrgsOrgIdAppsAppIdWebhooksJobIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhookResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.WebhookResponse
                    );
                }
                break;
            case [404, 422].includes(httpRes?.status):
                break;
        }

        return res;
    }
}
