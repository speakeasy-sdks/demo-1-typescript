/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PutOrgsOrgIdResourcesDriversDriverIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateDriverRequestRequest: shared.UpdateDriverRequestRequest;

    /**
     * The Resource Driver ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=driverId" })
    driverId: string;

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

export class PutOrgsOrgIdResourcesDriversDriverIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The updated Resources Driver details.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    driverDefinitionResponse?: shared.DriverDefinitionResponse;

    /**
     * One or more request parameters is missing or invalid.
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
