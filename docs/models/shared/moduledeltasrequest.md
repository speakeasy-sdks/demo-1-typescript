# ModuleDeltasRequest

ModuleDeltas groups the different operations together.


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `add`                                                                                         | Record<string, Record<string, [ControllerRequest](../../models/shared/controllerrequest.md)>> | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `remove`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `update`                                                                                      | Record<string, [UpdateActionRequest](../../models/shared/updateactionrequest.md)[]>           | :heavy_minus_sign:                                                                            | N/A                                                                                           |