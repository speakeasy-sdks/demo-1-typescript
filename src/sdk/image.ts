/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * DEPRECATED: This type exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
 *
 * @remarks
 *
 * Container Images (known simply as Images) can be registered with Humanitec. Continuous Integration (CI) pipelines can then notify Humanitec when a new build of a Container Image becomes available. Humanitec tracks the Image along with metadata about how it was built.
 * <SchemaDefinition schemaRef="#/components/schemas/ImageRequest" />
 *
 */
export class Image {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * List all Container Images
     *
     * @remarks
     * DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
     *
     * Lists all of the Container Images registered for this organization.
     */
    async getOrgsOrgIdImages(
        req: operations.GetOrgsOrgIdImagesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdImagesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdImagesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/images", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
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

        const res: operations.GetOrgsOrgIdImagesResponse =
            new operations.GetOrgsOrgIdImagesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.imageResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.imageResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ImageResponse,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a specific Image Object
     *
     * @remarks
     * DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
     *
     * The response includes a list of Image Builds as well as some metadata about the Image such as its Image Source.
     *
     * Note, `imageId` may not be the same as the container name. `imageId` is determined by the system making notifications about new builds.
     */
    async getOrgsOrgIdImagesImageId(
        req: operations.GetOrgsOrgIdImagesImageIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdImagesImageIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdImagesImageIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/orgs/{orgId}/images/{imageId}", req);

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

        const res: operations.GetOrgsOrgIdImagesImageIdResponse =
            new operations.GetOrgsOrgIdImagesImageIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.imageResponse = utils.objectToClass(httpRes?.data, shared.ImageResponse);
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
     * Lists all the Builds of an Image
     *
     * @remarks
     * DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
     *
     * The response lists all available Image Builds of an Image.
     */
    async getOrgsOrgIdImagesImageIdBuilds(
        req: operations.GetOrgsOrgIdImagesImageIdBuildsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetOrgsOrgIdImagesImageIdBuildsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrgsOrgIdImagesImageIdBuildsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/images/{imageId}/builds",
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

        const res: operations.GetOrgsOrgIdImagesImageIdBuildsResponse =
            new operations.GetOrgsOrgIdImagesImageIdBuildsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.imageBuildResponses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.imageBuildResponses = utils.objectToClass(
                        httpRes?.data,
                        shared.ImageBuildResponse,
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
     * Add a new Image Build
     *
     * @remarks
     * DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.
     *
     * This endpoint is used by Continuous Integration (CI) pipelines to notify Humanitec that a new Image Build is available.
     *
     * If there is no Image with ID `imageId`, it will be automatically created.
     */
    async postOrgsOrgIdImagesImageIdBuilds(
        req: operations.PostOrgsOrgIdImagesImageIdBuildsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostOrgsOrgIdImagesImageIdBuildsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostOrgsOrgIdImagesImageIdBuildsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/orgs/{orgId}/images/{imageId}/builds",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "imageBuildRequest",
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
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.PostOrgsOrgIdImagesImageIdBuildsResponse =
            new operations.PostOrgsOrgIdImagesImageIdBuildsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                break;
            case [400, 401, 403, 422].includes(httpRes?.status):
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
