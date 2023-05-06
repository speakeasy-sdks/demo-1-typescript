/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetOrgsOrgIdEventsRequest extends SpeakeasyBase {
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

export class GetOrgsOrgIdEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * A list of Events.
   *
   * @remarks
   *
   *
   */
  @SpeakeasyMetadata({ elemType: shared.EventResponse })
  eventResponses?: shared.EventResponse[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
