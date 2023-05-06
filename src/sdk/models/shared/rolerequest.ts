/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Role defines the role that will be used in request
 */
export class RoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role?: string;
}
