/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostOrgsOrgIdAppsAppIdWebhooksRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    webhookRequest: shared.WebhookRequest;

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
     * The Organization ID.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgId" })
    orgId: string;
}

export class PostOrgsOrgIdAppsAppIdWebhooksResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Some of the values supplied are invalid.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    errorInfoResponse?: shared.ErrorInfoResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * A created webhook.
     *
     * @remarks
     *
     *
     */
    @SpeakeasyMetadata()
    webhookResponse?: shared.WebhookResponse;
}
