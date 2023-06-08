/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Artefacts can be registered with Humanitec. Continuous Integration (CI) pipelines notify Humanitec when a new version of an Artefact becomes available. Humanitec tracks the Artefact along with metadata about how it was built.
 *
 * @remarks
 * <SchemaDefinition schemaRef="#/components/schemas/ArtefactRequest" />
 *
 */
export class Artefact {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete Artefact and all related Artefact Versions
     *
     * @remarks
     * The specified Artefact and its Artefact Versions will be permanently deleted. Only Administrators can delete an Artefact.
     */
    async deleteOrgsOrgIdArtefactsArtefactId(
        req: operations.DeleteOrgsOrgIdArtefactsArtefactIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteOrgsOrgIdArtefactsArtefactIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrgsOrgIdArtefactsArtefactIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/artefacts/{artefactId}", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
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

        const res: operations.DeleteOrgsOrgIdArtefactsArtefactIdResponse =
            new operations.DeleteOrgsOrgIdArtefactsArtefactIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                break;
            case [403, 404].includes(httpRes?.status):
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
     * List all Artefacts.
     *
     * @remarks
     * Returns the Artefacts registered with your organization. If no elements are found, an empty list is returned.
     */
    async getOrgsOrgIdArtefacts(
        req: operations.GetOrgsOrgIdArtefactsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdArtefactsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdArtefactsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/artefacts", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetOrgsOrgIdArtefactsResponse =
            new operations.GetOrgsOrgIdArtefactsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.artefactResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.artefactResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ArtefactResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }
}
