/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteOrgsOrgIdRegistriesRegIdRequest extends SpeakeasyBase {
  /**
   * Unique (alpha-numerical) organization identifier.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=orgId",
  })
  orgId: string;

  /**
   * Unique (alpha-numerical) registry identifier.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=regId",
  })
  regId: string;
}

export class DeleteOrgsOrgIdRegistriesRegIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request parameters are incomplete or invalid.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata()
  errorInfoResponse?: shared.ErrorInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
