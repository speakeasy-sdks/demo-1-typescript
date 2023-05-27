/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostOrgsOrgIdAppsRequest extends SpeakeasyBase {
    /**
     * The request ID, Human-friendly name and environment of the Application.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    applicationCreationRequest: shared.ApplicationCreationRequest;

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

export class PostOrgsOrgIdAppsResponse extends SpeakeasyBase {
    /**
     * The Application requested.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    applicationResponse?: shared.ApplicationResponse;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request body was unparseable.
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
