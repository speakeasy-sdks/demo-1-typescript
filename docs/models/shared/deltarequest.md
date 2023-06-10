# DeltaRequest

A Deployment Delta (or just "Delta") describes the changes that must be applied to one Deployment Set to generate another Deployment Set. Deployment Deltas are the only way to create new Deployment Sets.

Deployment Deltas can be created fully formed or combined together via PATCHing. They can also be generated from the difference between two Deployment Sets.

**Basic Structure**

```
 {
   "id": <ID of the Deployment Delta.>,
   "metadata": {
     <Properties such as who created the Delta, which Environment it is associated to and a Human-friendly name>
   }
   "modules" : {
     "add" : {
       <ID of Module to add to the Deployment Set> : {
         <An entire Modules object>
       }
     },
     "remove": [
       <An array of Module IDs that should be removed from the Deployment Set>
     ],
    "update": {
       <ID of Module already in the Set to be updated> : [
         <An array of JSON Patch (Search Results (RFC 6902) objects scoped to the module>
       ]
     }
   }
 }
```


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | Ignored, but can be provided.                                       |
| `metadata`                                                          | [DeltaMetadataRequest](../../models/shared/deltametadatarequest.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `modules`                                                           | [ModuleDeltasRequest](../../models/shared/moduledeltasrequest.md)   | :heavy_minus_sign:                                                  | ModuleDeltas groups the different operations together.              |
| `shared`                                                            | [UpdateActionRequest](../../models/shared/updateactionrequest.md)[] | :heavy_minus_sign:                                                  | N/A                                                                 |