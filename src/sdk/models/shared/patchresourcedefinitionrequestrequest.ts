/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValuesSecretsRequest } from "./valuessecretsrequest";
import { Expose, Type } from "class-transformer";

/**
 * PatchResourceDefinitionRequest describes a ResourceDefinition change request.
 */
export class PatchResourceDefinitionRequestRequest extends SpeakeasyBase {
  /**
   * (Optional) Security account required by the driver.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "driver_account" })
  driverAccount?: string;

  /**
   * ValuesSecrets stores data that should be passed around split by sensitivity.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "driver_inputs" })
  @Type(() => ValuesSecretsRequest)
  driverInputs?: ValuesSecretsRequest;

  /**
   * (Optional) Resource display name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
