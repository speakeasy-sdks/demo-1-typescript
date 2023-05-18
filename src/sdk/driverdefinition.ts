/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * DriverDefinition describes the resource driver.
 *
 * @remarks
 *
 * Resource Drivers are code that fulfils the Humanitec Resource Driver Interface. This interface allows for certain actions to be performed on resources such as creation and destruction. Humanitec provides numerous Resource Drivers “out of the box”. It is also possible to use 3rd party Resource Drivers or write your own.
 * <SchemaDefinition schemaRef="#/components/schemas/DriverDefinitionRequest" />
 *
 */
export class DriverDefinition {
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
   * Delete a Resources Driver.
   */
  async deleteOrgsOrgIdResourcesDriversDriverId(
    req: operations.DeleteOrgsOrgIdResourcesDriversDriverIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrgsOrgIdResourcesDriversDriverIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrgsOrgIdResourcesDriversDriverIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/drivers/{driverId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...config?.headers };
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

    const res: operations.DeleteOrgsOrgIdResourcesDriversDriverIdResponse =
      new operations.DeleteOrgsOrgIdResourcesDriversDriverIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 204:
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
   * List Resource Drivers.
   */
  async getOrgsOrgIdResourcesDrivers(
    req: operations.GetOrgsOrgIdResourcesDriversRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrgsOrgIdResourcesDriversResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrgsOrgIdResourcesDriversRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/drivers",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...config?.headers };
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

    const res: operations.GetOrgsOrgIdResourcesDriversResponse =
      new operations.GetOrgsOrgIdResourcesDriversResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.driverDefinitionResponses = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.driverDefinitionResponses = utils.objectToClass(
            httpRes?.data,
            shared.DriverDefinitionResponse,
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
   * Get a Resource Driver.
   *
   * @remarks
   * # Only drivers that belongs to the given organization or registered as `public` are accessible through this endpoint
   */
  async getOrgsOrgIdResourcesDriversDriverId(
    req: operations.GetOrgsOrgIdResourcesDriversDriverIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrgsOrgIdResourcesDriversDriverIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrgsOrgIdResourcesDriversDriverIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/drivers/{driverId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...config?.headers };
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

    const res: operations.GetOrgsOrgIdResourcesDriversDriverIdResponse =
      new operations.GetOrgsOrgIdResourcesDriversDriverIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.driverDefinitionResponse = utils.objectToClass(
            httpRes?.data,
            shared.DriverDefinitionResponse
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
   * Register a new Resource Driver.
   */
  async postOrgsOrgIdResourcesDrivers(
    req: operations.PostOrgsOrgIdResourcesDriversRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrgsOrgIdResourcesDriversResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrgsOrgIdResourcesDriversRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/drivers",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "createDriverRequestRequest",
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

    const res: operations.PostOrgsOrgIdResourcesDriversResponse =
      new operations.PostOrgsOrgIdResourcesDriversResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.driverDefinitionResponse = utils.objectToClass(
            httpRes?.data,
            shared.DriverDefinitionResponse
          );
        }
        break;
      case [400, 409, 422, 500].includes(httpRes?.status):
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
   * Update a Resource Driver.
   */
  async putOrgsOrgIdResourcesDriversDriverId(
    req: operations.PutOrgsOrgIdResourcesDriversDriverIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutOrgsOrgIdResourcesDriversDriverIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutOrgsOrgIdResourcesDriversDriverIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/drivers/{driverId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "updateDriverRequestRequest",
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
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.PutOrgsOrgIdResourcesDriversDriverIdResponse =
      new operations.PutOrgsOrgIdResourcesDriversDriverIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.driverDefinitionResponse = utils.objectToClass(
            httpRes?.data,
            shared.DriverDefinitionResponse
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
}
