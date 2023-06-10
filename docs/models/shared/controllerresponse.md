# ControllerResponse

Controller represents deployment, stateful set etc


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `kind`                                                        | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `message`                                                     | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `pods`                                                        | [PodStateResponse](../../models/shared/podstateresponse.md)[] | :heavy_check_mark:                                            | N/A                                                           |
| `replicas`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `revision`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `status`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |