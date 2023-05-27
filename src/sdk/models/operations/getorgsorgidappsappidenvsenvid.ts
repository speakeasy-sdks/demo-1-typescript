/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetOrgsOrgIdAppsAppIdEnvsEnvIdRequest extends SpeakeasyBase {
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
     * The Environment ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=envId" })
    envId: string;

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

export class GetOrgsOrgIdAppsAppIdEnvsEnvIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The Environment requested.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    environmentResponse?: shared.EnvironmentResponse;

    /**
     * No Environment with `id` in Application.
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
