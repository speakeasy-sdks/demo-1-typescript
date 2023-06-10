# GetOrgsOrgIdRegistriesResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `errorInfoResponse`                                                  | [shared.ErrorInfoResponse](../../models/shared/errorinforesponse.md) | :heavy_minus_sign:                                                   | Request parameters are incomplete or invalid.<br/><br/>              |
| `registryResponses`                                                  | [shared.RegistryResponse](../../models/shared/registryresponse.md)[] | :heavy_minus_sign:                                                   | A Possibly empty list of Registries.<br/><br/>                       |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |