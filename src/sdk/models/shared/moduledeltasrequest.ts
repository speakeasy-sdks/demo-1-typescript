/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { ControllerRequest } from "./controllerrequest";
import { UpdateActionRequest } from "./updateactionrequest";
import { Expose, Transform } from "class-transformer";

/**
 * ModuleDeltas groups the different operations together.
 */
export class ModuleDeltasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ControllerRequest, elemDepth: 2 })
  @Expose({ name: "add" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, Record<string, ControllerRequest>> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], ControllerRequest);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  add?: Record<string, Record<string, ControllerRequest>>;

  @SpeakeasyMetadata()
  @Expose({ name: "remove" })
  remove?: string[];

  @SpeakeasyMetadata({ elemType: UpdateActionRequest, elemDepth: 2 })
  @Expose({ name: "update" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, UpdateActionRequest[]> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], UpdateActionRequest);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  update?: Record<string, UpdateActionRequest[]>;
}
