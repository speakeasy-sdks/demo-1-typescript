# GetOrgsOrgIdAppsAppIdDeltasRequest


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `appId`                                                         | *string*                                                        | :heavy_check_mark:                                              | The Application ID.<br/><br/>                                   |
| `archived`                                                      | *boolean*                                                       | :heavy_minus_sign:                                              | If true, return archived Deltas.<br/><br/>                      |
| `env`                                                           | *string*                                                        | :heavy_minus_sign:                                              | Only return Deltas associated with the specified Environment.<br/><br/> |
| `orgId`                                                         | *string*                                                        | :heavy_check_mark:                                              | The Organization ID.<br/><br/>                                  |