/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteOrgsOrgIdAppsAppIdEnvsEnvIdRequest extends SpeakeasyBase {
  /**
   * The Application ID.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=appId",
  })
  appId: string;

  /**
   * The Environment ID.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=envId",
  })
  envId: string;

  /**
   * The Organization ID.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=orgId",
  })
  orgId: string;
}

export class DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Attempt to delete the last Environment in an Application.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata()
  humanitecErrorResponse?: shared.HumanitecErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
