# ModuleDeltasResponse

ModuleDeltas groups the different operations together.


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `add`                                                                                           | Record<string, Record<string, [ControllerResponse](../../models/shared/controllerresponse.md)>> | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `remove`                                                                                        | *string*[]                                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `update`                                                                                        | Record<string, [UpdateActionResponse](../../models/shared/updateactionresponse.md)[]>           | :heavy_check_mark:                                                                              | N/A                                                                                             |