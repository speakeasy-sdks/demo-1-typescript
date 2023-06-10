# UserRoleRequest

UserRole holds the mapping of role to user for a particular object.


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `createdAt`                                               | *string*                                                  | :heavy_minus_sign:                                        | The time the user was first registered with Humanitec     | 2020-06-22T09:37:23.523Z                                  |
| `email`                                                   | *string*                                                  | :heavy_minus_sign:                                        | The email address of the user from the profile            |                                                           |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | The User ID for this user                                 |                                                           |
| `invite`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The status of an invitation (If applicable)               |                                                           |
| `name`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The name the user goes by                                 |                                                           |
| `role`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The role that this user holds                             |                                                           |
| `type`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The type of the account. Could be user, service or system |                                                           |
| `user`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The user ID that hold the role                            |                                                           |