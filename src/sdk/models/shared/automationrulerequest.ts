/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An Automation Rule defining how and when artefacts in an environment should be updated.
 */
export class AutomationRuleRequest extends SpeakeasyBase {
  /**
   * Whether the rule will be processed or not.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  /**
   * A list of artefact names to be processed by the rule. If the array is empty, it implies include all. If `exclude_artefacts_filter` is true, this list describes the artefacts to exclude.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "artefacts_filter" })
  artefactsFilter?: string[];

  /**
   * Whether the artefacts specified in `artefacts_filter` should be excluded (true) or included (false) in the automation rule.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exclude_artefacts_filter" })
  excludeArtefactsFilter?: boolean;

  /**
   * DEPRECATED: Whether the images specified in `images_filter` should be excluded (true) or included (false) in the automation rule.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exclude_images_filter" })
  excludeImagesFilter?: boolean;

  /**
   * DEPRECATED: A list of image IDs to be processed by the rule. If the array is empty, it implies include all. If `exclude_images_filter` is true, this list describes images to exclude.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "images_filter" })
  imagesFilter?: string[];

  /**
   * DEPRECATED: A regular expression applied to the branch or tag name depending on the value of `update_to`. Defaults to match all if omitted or empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "match" })
  match?: string;

  /**
   * A regular expression applied to the ref of a new artefact version. Defaults to match all if omitted or empty.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "match_ref" })
  matchRef?: string;

  /**
   * Specifies the type of event. Currently, only updates to either branches or tags are supported. Must be `"update"`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;

  /**
   * DEPRECATED: Specifies whether the update occurs on commit to branch or creation of tag. Must be one of `"branch"` or `"tag"`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "update_to" })
  updateTo?: string;
}
