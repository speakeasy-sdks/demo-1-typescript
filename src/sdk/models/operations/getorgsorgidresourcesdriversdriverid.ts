/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetOrgsOrgIdResourcesDriversDriverIdRequest extends SpeakeasyBase {
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

export class GetOrgsOrgIdResourcesDriversDriverIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The requested Resources Driver details.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    driverDefinitionResponse?: shared.DriverDefinitionResponse;

    /**
     * A Resource Driver with the 'driverId' ID is not found or is not accessible by the organization.
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
