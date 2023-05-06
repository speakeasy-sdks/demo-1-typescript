/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchOrgsOrgIdUsersUserIdRequest extends SpeakeasyBase {
  /**
   * The new user the role
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  roleRequest: shared.RoleRequest;

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

  /**
   * The User ID
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;
}

export class PatchOrgsOrgIdUsersUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * The request was invalid or the payload malformed.
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
   * The information on the user.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata()
  userRoleResponse?: shared.UserRoleResponse;
}
