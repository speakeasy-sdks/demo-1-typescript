/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Deployments represent updates to the running state of an Environment.
 *
 * @remarks
 *
 * Deployments are made by applying _Deltas_ to a state defined by an existing Deployment. The Environment’s from_deploy property defines the Deployment. This Deployment is usually but not always in the current Environment. If the Deployment is from another Environment, the state of that Environment will be "cloned" into the current Environment with the option to apply a Delta.
 * <SchemaDefinition schemaRef="#/components/schemas/DeploymentRequest" />
 *
 */
export class Deployment {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * List Deployments in an Environment.
     *
     * @remarks
     * List all of the Deployments that have been carried out in the current Environment. Deployments are returned with the newest first.
     */
    async getOrgsOrgIdAppsAppIdEnvsEnvIdDeploys(
        req: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/envs/{envId}/deploys",
            req
        );

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

        const res: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse =
            new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deploymentResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.deploymentResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.DeploymentResponse,
                        resFieldDepth
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
     * Get a specific Deployment.
     *
     * @remarks
     * Gets a specific Deployment in an Application and an Environment.
     */
    async getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployId(
        req: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/envs/{envId}/deploys/{deployId}",
            req
        );

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

        const res: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdResponse =
            new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deploymentResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.DeploymentResponse
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
     * List errors that occurred in a Deployment.
     */
    async getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrors(
        req: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/envs/{envId}/deploys/{deployId}/errors",
            req
        );

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

        const res: operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsResponse =
            new operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deploymentErrorResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.deploymentErrorResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.DeploymentErrorResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Start a new Deployment.
     *
     * @remarks
     * At Humanitec, Deployments are defined as changes to the state of the Environment. The state can be changed by defining a set of desired changes to the current state via a Deployment Delta or by resetting the current state after a previous Deployment. (See Environment Rebase.) Both types of changes can be combined into a single Deployment during which the Delta is applied to the Rebased state.
     *
     * When specifying a Delta, a Delta ID must be used. That Delta must have been committed to the Delta store prior to the Deployment.
     *
     * A Set ID can also be defined in the deployment to force the state of the environment to a particular state. This will be ignored if the Delta is specified.
     *
     * **NOTE:**
     *
     * Directly setting a `set_id` in a deployment is not recommended as it will not record history of where the set came from. If the intention is to replicate an existing environment, use the environment rebasing approach described above.
     */
    async postOrgsOrgIdAppsAppIdEnvsEnvIdDeploys(
        req: operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/apps/{appId}/envs/{envId}/deploys",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "deploymentRequest",
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

        const res: operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse =
            new operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deploymentResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.DeploymentResponse
                    );
                }
                break;
            case [400, 404, 409].includes(httpRes?.status):
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
