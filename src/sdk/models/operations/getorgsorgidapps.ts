/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetOrgsOrgIdAppsRequest extends SpeakeasyBase {
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

export class GetOrgsOrgIdAppsResponse extends SpeakeasyBase {
    /**
     * Possibly empty list of Applications.
     */
    @SpeakeasyMetadata({ elemType: shared.ApplicationResponse })
    applicationResponses?: shared.ApplicationResponse[];

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
