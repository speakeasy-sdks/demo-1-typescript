/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostOrgsOrgIdInvitationsRequest extends SpeakeasyBase {
  /**
   * The email and the desired role
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userInviteRequestRequest: shared.UserInviteRequestRequest;

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

export class PostOrgsOrgIdInvitationsResponse extends SpeakeasyBase {
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
   * An temporary profile for the invited user.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({ elemType: shared.UserRoleResponse })
  userRoleResponses?: shared.UserRoleResponse[];
}
