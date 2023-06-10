# UserProfileExtendedResponse

UserProfileExtended holds the profile information of a user including properties only accessible to the user.


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `createdAt`                                               | *string*                                                  | :heavy_check_mark:                                        | The time the user was first registered with Humanitec     | 2020-06-22T09:37:23.523Z                                  |
| `email`                                                   | *string*                                                  | :heavy_minus_sign:                                        | The email address of the user from the profile            |                                                           |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The User ID for this user                                 |                                                           |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | The name the user goes by                                 |                                                           |
| `properties`                                              | Record<string, *any*>                                     | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `roles`                                                   | Record<string, *string*>                                  | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `type`                                                    | *string*                                                  | :heavy_check_mark:                                        | The type of the account. Could be user, service or system |                                                           |