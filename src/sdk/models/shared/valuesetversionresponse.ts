/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { JSONPatchResponse } from "./jsonpatchresponse";
import { ValueResponse } from "./valueresponse";
import { ValueSetVersionResultOfEnum } from "./valuesetversionresultofenum";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A Value Set Version can be used as a track record of Shared Values changes, to restore a previous version of a Shared Value or Value Set, or to purge a Shared Value if it shouldn't be accessible anymore.
 */
export class ValueSetVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: JSONPatchResponse })
  @Expose({ name: "change" })
  @Type(() => JSONPatchResponse)
  change: JSONPatchResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "comment" })
  comment: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "result_of" })
  resultOf: ValueSetVersionResultOfEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "source_value_set_version_id" })
  sourceValueSetVersionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata({ elemType: ValueResponse })
  @Expose({ name: "values" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, ValueResponse> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], ValueResponse);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  values: Record<string, ValueResponse>;
}
