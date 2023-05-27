/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKeyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    valueSetActionPayloadRequest: shared.ValueSetActionPayloadRequest;

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
     * Key of the value to be restored.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
    key: string;

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
     * The ValueSetVersion ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=valueSetVersionId" })
    valueSetVersionId: string;
}

export class PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKeyResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Invalid request
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
     * The resulting ValueSetVersion
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    valueSetVersionResponse?: shared.ValueSetVersionResponse;
}
