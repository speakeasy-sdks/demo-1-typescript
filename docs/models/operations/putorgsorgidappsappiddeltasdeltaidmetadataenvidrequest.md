# PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdRequest


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `requestBody`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The new Environment ID. (NOTE: The string must still be JSON encoded.)<br/><br/> |
| `appId`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The Application ID.<br/><br/>                                            |
| `deltaId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | ID of the Deployment Delta.<br/><br/>                                    |
| `orgId`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The Organization ID.<br/><br/>                                           |