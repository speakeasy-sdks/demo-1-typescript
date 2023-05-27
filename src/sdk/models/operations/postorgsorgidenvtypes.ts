/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostOrgsOrgIdEnvTypesRequest extends SpeakeasyBase {
    /**
     * New Environment Type.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    environmentTypeRequest: shared.EnvironmentTypeRequest;

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

export class PostOrgsOrgIdEnvTypesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The Environment Type requested.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    environmentTypeResponse?: shared.EnvironmentTypeResponse;

    /**
     * The supplied `id` is not a valid ID or a required field is missing.
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
