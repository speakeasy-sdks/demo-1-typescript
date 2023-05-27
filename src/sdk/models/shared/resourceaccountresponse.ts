/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * ResourceAccount represents the account being used to access a resource.
 *
 * @remarks
 *
 * Resource Accounts hold credentials that are required to provision and manage resources.
 */
export class ResourceAccountResponse extends SpeakeasyBase {
    /**
     * The timestamp of when the account was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt: string;

    /**
     * The ID of the user who created the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_by" })
    createdBy: string;

    /**
     * Unique identifier for the account (in scope of the organization it belongs to).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Indicates if this account is being used (referenced) by any resource definition.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_used" })
    isUsed: boolean;

    /**
     * Display name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The type of the account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}
