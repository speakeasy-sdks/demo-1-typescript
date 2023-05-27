/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModuleDeltasResponse } from "./moduledeltasresponse";
import { UpdateActionResponse } from "./updateactionresponse";
import { Expose, Type } from "class-transformer";

/**
 * Similar to the delta response, except the id and metadata properties.
 *
 * @remarks
 *
 * **Basic Structure**
 *
 * ```
 *  {
 *    "modules" : {
 *      "add" : {
 *        <ID of Module to add to the Deployment Set> : {
 *          <An entire Modules object>
 *        }
 *      },
 *      "remove": [
 *        <An array of Module IDs that should be removed from the Deployment Set>
 *      ],
 *     "update": {
 *        <ID of Module already in the Set to be updated> : [
 *          <An array of JSON Patch (Search Results (RFC 6902) objects scoped to the module>
 *        ]
 *      }
 *    }
 *  }
 * ```
 */
export class PlainDeltaResponse extends SpeakeasyBase {
    /**
     * ModuleDeltas groups the different operations together.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modules" })
    @Type(() => ModuleDeltasResponse)
    modules: ModuleDeltasResponse;

    @SpeakeasyMetadata({ elemType: UpdateActionResponse })
    @Expose({ name: "shared" })
    @Type(() => UpdateActionResponse)
    shared: UpdateActionResponse[];
}
