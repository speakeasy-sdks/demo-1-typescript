/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PutOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyRequest extends SpeakeasyBase {
  /**
   * Both `value` and `description` must be supplied. All other fields will be ignored.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  valueEditPayloadRequest: shared.ValueEditPayloadRequest;

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

export class PutOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse extends SpeakeasyBase {
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

  /**
   * Shared Value successfully updated.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata()
  valueResponse?: shared.ValueResponse;
}
