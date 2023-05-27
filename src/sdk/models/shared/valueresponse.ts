/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValueSource } from "./valuesource";
import { Expose, Transform } from "class-transformer";

/**
 * Shared Values can be used to manage variables and configuration that might vary between environments. They are also the way that secrets can be stored securely.
 *
 * @remarks
 *
 * Shared Values are by default shared across all environments in an application. However, they can be overridden on an Environment by Environment basis.
 *
 * For example: There might be 2 API keys that are used in an application. One development key used in the development and staging environments and another used for production. The development API key would be set at the Application level. The value would then be overridden at the Environment level for the production Environment.
 */
export class ValueResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * A Human friendly description of what the Shared Value is.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * Specified that the Shared Value contains a secret.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_secret" })
    isSecret: boolean;

    /**
     * The unique key by which the Shared Value can be referenced. pattern: ^[a-zA-Z0-9._-]+$.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key: string;

    /**
     * Location of the secret value in the secret store.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "secret_key" })
    secretKey: string;

    /**
     * Version of the current secret value as returned by the secret store.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "secret_version" })
    secretVersion: string;

    /**
     * Source of the value, "app" for app level, "env" for app env level.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source: ValueSource;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;

    /**
     * The value that will be stored. (Will be always empty for secrets.)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}
