/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Matching Criteria are a set of rules used to choose which Resource Definition to use to provision a particular Resource Type.
 *
 * @remarks
 *
 * Matching criteria are made up in order of specificity with least specific first:
 *
 * - Environment Type (`env_type`)
 *
 * - Application (`app_id`)
 *
 * - Environment (`env_id`)
 *
 * - Resource (`res_id`)
 *
 * When selecting matching criteria, the most specific one is selected. In general, this means of all the Matching Criteria fully matching the context, the Matching Criteria Rule with the most specific element filled is chosen. If there is a tie, the next most specific elements are compared and so on until one is chosen.
 *
 * **NOTE:**
 *
 * Humanitec will reject the registration of matching criteria rules that duplicate rules already present for a Resource Type.
 * <SchemaDefinition schemaRef="#/components/schemas/MatchingCriteriaRequest" />
 *
 */
export class MatchingCriteria {
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
   * Delete a Matching Criteria from a Resource Definition.
   *
   * @remarks
   * If there **are no** Active Resources that would match to a different Resource Definition when the current Matching Criteria is deleted, the Matching Criteria is deleted immediately.
   *
   * If there **are** Active Resources that would match to a different Resource Definition, the request fails with HTTP status code 409 (Conflict). The response content will list all of affected Active Resources and their new matches.
   *
   * The request can take an optional `force` query parameter. If set to `true`, the Matching Criteria is deleted immediately. Referenced Active Resources would match to a different Resource Definition during the next deployment in the target environment.
   */
  async deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId(
    req: operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/defs/{defId}/criteria/{criteriaId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "delete",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse =
      new operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
    switch (true) {
      case httpRes?.status == 204:
        break;
      case httpRes?.status == 404:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId404ApplicationJSONString =
            JSON.stringify(httpRes?.data);
        }
        break;
      case httpRes?.status == 409:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.resourceDefinitionChangeResponses = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.resourceDefinitionChangeResponses = utils.objectToClass(
            httpRes?.data,
            shared.ResourceDefinitionChangeResponse,
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
   * Add a new Matching Criteria to a Resource Definition.
   *
   * @remarks
   * Matching Criteria are combined with Resource Type to select a specific definition. Matching Criteria can be set for any combination of Application ID, Environment ID, Environment Type, and Resource ID. In the event of multiple matches, the most specific match is chosen.
   *
   * For example, given 3 sets of matching criteria for the same type:
   *
   * ```
   *  1. {"env_type":"test"}
   *  2. {"env_type":"development"}
   *  3. {"env_type":"test", "app_id":"my-app"}
   * ```
   *
   * If, a resource of that time was needed in an Application `my-app`, Environment `qa-team` with Type `test` and Resource ID `modules.my-module-externals.my-resource`, there would be two resources definitions matching the criteria: #1 & #3. Definition #3 will be chosen because it's matching criteria is the most specific.
   */
  async postOrgsOrgIdResourcesDefsDefIdCriteria(
    req: operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/orgs/{orgId}/resources/defs/{defId}/criteria",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "matchingCriteriaRuleRequest",
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

    const res: operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaResponse =
      new operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.matchingCriteriaResponse = utils.objectToClass(
            httpRes?.data,
            shared.MatchingCriteriaResponse
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
}
