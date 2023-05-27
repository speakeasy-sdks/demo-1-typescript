/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetOrgsOrgIdAppsAppIdSetsSetIdRequest extends SpeakeasyBase {
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
     * ID of the Deployment Set to compared against.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=diff" })
    diff?: string;

    /**
     * The Organization ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgId" })
    orgId: string;

    /**
     * ID of the Deployment Set.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=setId" })
    setId: string;
}

export class GetOrgsOrgIdAppsAppIdSetsSetIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The Requested Deployment Set.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    getOrgsOrgIdAppsAppIdSetsSetId200ApplicationJSONOneOf?: any;

    /**
     * No Deployment Set with ID `setId` found in Application.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    getOrgsOrgIdAppsAppIdSetsSetId404ApplicationJSONString?: string;
}
