/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * UpdateArtefactVersionPayload contains the `archived` field that should be set in the Artefact Version to update.
 */
export class UpdateArtefactVersionPayloadRequest extends SpeakeasyBase {
    /**
     * The Value of the archived value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "archived" })
    archived: boolean;
}
