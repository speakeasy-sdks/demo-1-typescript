/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * EnvironmentRuntimeInfo
 */
export class EnvironmentRuntimeInfoResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paused" })
    paused: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
