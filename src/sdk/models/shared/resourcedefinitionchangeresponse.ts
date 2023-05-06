/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * ResourceDefinitionChange describes the effects of a Resource Definition or Matching Criteria update/deletion.
 */
export class ResourceDefinitionChangeResponse extends SpeakeasyBase {
  /**
   * The ID of the App the resource is associated with.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "app_id" })
  appId: string;

  /**
   * The ID of the Environment the resource is associated with.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "env_id" })
  envId: string;

  /**
   * The Resource Definition that this resource was provisioned from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from_def" })
  fromDef: string;

  /**
   * The ID of the resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "res_id" })
  resId: string;

  /**
   * The Resource Definition that resource *will be* provisioned from if the change is applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to_def" })
  toDef: string;
}
