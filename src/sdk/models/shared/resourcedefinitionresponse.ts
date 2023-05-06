/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MatchingCriteriaResponse } from "./matchingcriteriaresponse";
import { ValuesSecretsResponse } from "./valuessecretsresponse";
import { Expose, Type } from "class-transformer";

/**
 * A Resource Definitions describes how and when a resource should be provisioned. It links a driver (the how) along with a Matching Criteria (the when) to a Resource Type. This allows Humanitec to invoke a particular driver for the required Resource Type in the context of a particular Application and Environment.
 *
 * @remarks
 *
 * The schema for the `driver_inputs` is defined by the `input_schema` property on the DriverDefinition identified by the `driver_type` property.
 */
export class ResourceDefinitionResponse extends SpeakeasyBase {
  /**
   * The timestamp of when this record has been created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt?: string;

  /**
   * The user who created this record.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy?: string;

  /**
   * (Optional) The criteria to use when looking for a Resource Definition during the deployment.
   */
  @SpeakeasyMetadata({ elemType: MatchingCriteriaResponse })
  @Expose({ name: "criteria" })
  @Type(() => MatchingCriteriaResponse)
  criteria?: MatchingCriteriaResponse[];

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
  @Type(() => ValuesSecretsResponse)
  driverInputs?: ValuesSecretsResponse;

  /**
   * The driver to be used to create the resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "driver_type" })
  driverType?: string;

  /**
   * The Resource Definition ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Indicates this definition is a built-in one (provided by Humanitec).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is_default" })
  isDefault?: boolean;

  /**
   * Indicates if this record has been marked for deletion. The Resource Definition that has been marked for deletion cannot be used to provision new resources.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is_deleted" })
  isDeleted?: boolean;

  /**
   * The display name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The Organization ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "org_id" })
  orgId: string;

  /**
   * The Resource Type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}
