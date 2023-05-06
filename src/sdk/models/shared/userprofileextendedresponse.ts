/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * UserProfileExtended holds the profile information of a user including properties only accessible to the user.
 */
export class UserProfileExtendedResponse extends SpeakeasyBase {
  /**
   * The time the user was first registered with Humanitec
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt: string;

  /**
   * The email address of the user from the profile
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * The User ID for this user
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The name the user goes by
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "roles" })
  roles: Record<string, string>;

  /**
   * The type of the account. Could be user, service or system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}
