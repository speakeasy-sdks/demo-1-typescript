/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { ClusterSecretResponse } from "./clustersecretresponse";
import { Expose, Transform } from "class-transformer";

/**
 * RegistryCreds represents current registry credentials (either, username- or token-based).
 */
export class RegistryCredsResponse extends SpeakeasyBase {
  /**
   * Account credentials expiration timestamp.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expires" })
  expires?: string;

  /**
   * Account password or token secret.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  /**
   * Registry name, usually in a "{domain}" or "{domain}/{project}" format.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registry" })
  registry: string;

  /**
   * ClusterSecretsMap stores a list of Kuberenetes secret references for the target deployment clusters.
   */
  @SpeakeasyMetadata({ elemType: ClusterSecretResponse })
  @Expose({ name: "secrets" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, ClusterSecretResponse> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], ClusterSecretResponse);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  secrets: Record<string, ClusterSecretResponse>;

  /**
   * Security account login or token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;
}
