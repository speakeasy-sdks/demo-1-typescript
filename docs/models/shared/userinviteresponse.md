# UserInviteResponse

UserInvite stores the invitation details.


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `createdAt`                                     | *string*                                        | :heavy_check_mark:                              | The timestamp this invitation was created.      | 2020-06-22T09:37:23.523Z                        |
| `createdBy`                                     | *string*                                        | :heavy_check_mark:                              | The ID of the user who created this invitation. |                                                 |
| `email`                                         | *string*                                        | :heavy_minus_sign:                              | The email address of the user from the profile. |                                                 |
| `expiresAt`                                     | *string*                                        | :heavy_check_mark:                              | The timestamp this invitation would expire.     | 2020-06-22T09:37:23.523Z                        |
| `userId`                                        | *string*                                        | :heavy_check_mark:                              | The User ID for this user.                      |                                                 |