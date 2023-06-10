# RuntimeInfoResponse

RuntimeInfo object returned by the runtime endpoint. Represents a list post statuses grouped by modules and controllers (deployments and stateful sets).


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `modules`                                                                                       | Record<string, Record<string, [ControllerResponse](../../models/shared/controllerresponse.md)>> | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `namespace`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |