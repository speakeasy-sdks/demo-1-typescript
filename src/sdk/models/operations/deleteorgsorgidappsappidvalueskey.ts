/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteOrgsOrgIdAppsAppIdValuesKeyRequest extends SpeakeasyBase {
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
   * The key to update.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

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

export class DeleteOrgsOrgIdAppsAppIdValuesKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Input not valid.
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
