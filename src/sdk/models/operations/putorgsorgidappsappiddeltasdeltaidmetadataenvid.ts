/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdRequest extends SpeakeasyBase {
    /**
     * The new Environment ID. (NOTE: The string must still be JSON encoded.)
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: string;

    /**
     * The Application ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    /**
     * ID of the Deployment Delta.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deltaId" })
    deltaId: string;

    /**
     * The Organization ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgId" })
    orgId: string;
}

export class PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request was invalid.
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
     * No Deployment Delta with ID `deltaId` found in Application.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvId404ApplicationJSONString?: string;
}
