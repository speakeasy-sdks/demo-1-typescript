# GetOrgsResponse


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `organizationResponses`                                                       | [shared.OrganizationResponse](../../models/shared/organizationresponse.md)[]  | :heavy_minus_sign:                                                            | A list of available organizations (based on the current user access level).<br/><br/> |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `rawResponse`                                                                 | [AxiosResponse>](https://axios-http.com/docs/res_schema)                      | :heavy_minus_sign:                                                            | N/A                                                                           |