/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PatchOrgsOrgIdResourcesDefsDefIdRequest extends SpeakeasyBase {
    /**
     * The Resource Definition record details.
     *
     * @remarks
     *
     * The PATCH operation would change the value of the property if it is included in the request payload JSON, and not `null`. Missing and `null` properties are ignored.
     *
     * For the map properties, such as PatchResourceDefinitionRequest.DriverInputs, the merge operation is applied.
     *
     * Merge rules are as follows:
     *
     * - If a map property has a value, it is replaced (or added).
     *
     * - If a map property is set to `null`, it is removed.
     *
     * - If a map property is not included (missing in JSON), it remains unchanged.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    patchResourceDefinitionRequestRequest: shared.PatchResourceDefinitionRequestRequest;

    /**
     * The Resource Definition ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=defId" })
    defId: string;

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

export class PatchOrgsOrgIdResourcesDefsDefIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * One or more request parameters is missing or invalid.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    humanitecErrorResponse?: shared.HumanitecErrorResponse;

    /**
     * The updated Resource Definition.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    resourceDefinitionResponse?: shared.ResourceDefinitionResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
