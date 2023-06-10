# AccountCredsRequest

AccountCreds represents an account credentials (either, username- or token-based).


## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `expires`                                 | *string*                                  | :heavy_minus_sign:                        | Account credentials expiration timestamp. | 2020-06-22T09:37:23.523Z                  |
| `password`                                | *string*                                  | :heavy_check_mark:                        | Account password or token secret.         |                                           |
| `username`                                | *string*                                  | :heavy_check_mark:                        | Security account login or token.          |                                           |