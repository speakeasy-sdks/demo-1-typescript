# GetDeltaResponse


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentType`                                                 | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `deltaResponse`                                               | [shared.DeltaResponse](../../models/shared/deltaresponse.md)  | :heavy_minus_sign:                                            | The requested Deployment Delta.                               |
| `statusCode`                                                  | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `rawResponse`                                                 | [AxiosResponse>](https://axios-http.com/docs/res_schema)      | :heavy_minus_sign:                                            | N/A                                                           |
| `getDelta404ApplicationJSONString`                            | *string*                                                      | :heavy_minus_sign:                                            | No Deployment Delta with ID `deltaId` found in Application.<br/><br/> |