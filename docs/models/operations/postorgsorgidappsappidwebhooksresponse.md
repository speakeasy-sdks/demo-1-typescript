# PostOrgsOrgIdAppsAppIdWebhooksResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `errorInfoResponse`                                                  | [shared.ErrorInfoResponse](../../models/shared/errorinforesponse.md) | :heavy_minus_sign:                                                   | Some of the values supplied are invalid.<br/><br/>                   |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `webhookResponse`                                                    | [shared.WebhookResponse](../../models/shared/webhookresponse.md)     | :heavy_minus_sign:                                                   | A created webhook.<br/><br/>                                         |